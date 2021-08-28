import { ReactNode } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface IProps {
  name: string;
  startDate: string;
  endDate: string;
  location: string;
  logo?: string;
  logoWidth?: number;
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
          <Col xs={2}>
            {logo && (
              <img
                src={logo}
                alt="UW"
                width={logoWidth}
                height={logoHeight}
              />
            )}
          </Col>
        </Row>
      </Col>
      <Col xs={12} md={6} className="ps-4">
        <h5 className="font-weight-bold">{title}</h5>
        <p>{description}</p>
      </Col>
    </Row>
  );
};

export default Information;
