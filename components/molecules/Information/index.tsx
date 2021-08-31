import { ReactNode, useRef, useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useWindowSize } from "../../../hooks";
interface IProps {
  name: string;
  startDate: string;
  endDate: string;
  location: string;
  logo?: string;
  logoWidth: number;
  logoHeight?: number;
  title: string;
  description: ReactNode | string;
}

const Information = ({
  name,
  startDate,
  endDate,
  location,
  logo,
  logoWidth,
  logoHeight,
  title,
  description,
}: IProps) => {
  const logoColRef = useRef<HTMLDivElement>(null);
  const [logoDisplayWidth, setLogoDisplayWidth] = useState<any>(logoWidth);

  const { width } = useWindowSize();

  useEffect(() => {
    if (logoColRef && logoColRef.current?.clientWidth && logoColRef.current?.clientWidth < logoWidth) {
        setLogoDisplayWidth("100%");
    } else {
      setLogoDisplayWidth(logoWidth)
    }
  }, [width]);

  return (
    <Row className="py-4">
      <Col xs={12} md={6} className="mb-4" data-aos="fade-right">
        <Row className="align-items-center">
          <Col className="text-md-end text-start">
            <h4 className="font-weight-bold">{name}</h4>
            <h6>
              {startDate} - {endDate}
            </h6>
            <h6>{location}</h6>
          </Col>
          <Col xs={3} md={2} ref={logoColRef} className="text-center">
            {logo && <img src={logo} alt={name} width={logoDisplayWidth} />}
          </Col>
        </Row>
      </Col>
      <Col xs={12} md={6} className="ps-md-4">
        <h5 className="font-weight-bold">{title}</h5>
        <p>{description}</p>
      </Col>
    </Row>
  );
};

export default Information;
