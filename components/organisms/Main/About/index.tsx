import { useMemo } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import head from "../../../../static/images/head.jpg";
import { Icon } from "@iconify/react";
import Section from "../../../molecules/Section";
import { SITE_DESC, ICONS } from "@constants/index";

const About = () => {
  const avatarSize = useMemo(() => 300, []);
  const socialMedia = useMemo(
    () => [
      {
        ...ICONS.ID_CARD,
        link: "",
      },
      {
        ...ICONS.GMAIL,
        link: "mailto:cyh0530@uw.edu",
      },
      {
        ...ICONS.LINKEDIN,
        link: "https://www.linkedin.com/in/cyh0530/",
      },
      {
        ...ICONS.GITHUB,
        link: "https://github.com/cyh0530",
      },
      {
        ...ICONS.FACEBOOK,
        link: "https://www.facebook.com/cyh0530/",
      },
      {
        ...ICONS.INSTAGRAM,
        link: "https://www.instagram.com/cyh0530/",
      },
    ],
    []
  );

  return (
    <Section id="about-me" bg="dark">
      <Container fluid="lg" className="pt-5">
        <Row>
          <Col
            lg={5}
            className="d-none d-lg-flex align-self-center justify-content-center"
          >
            <Image
              src={head}
              alt="Chia-Yang Huang"
              className="border border-secondary rounded-circle"
              width={avatarSize}
              height={avatarSize}
            />
          </Col>
          <Col lg={7} className="d-flex align-items-center">
            <div>
              <h2 className="display-4 mb-5 text-center">About Me</h2>
              <p className="lead text-center">{SITE_DESC}</p>
              <p className="text-center">
                {socialMedia.map((social, index) => (
                  <a
                    href={social.link}
                    key={index}
                    title={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark"
                  >
                    <Icon
                      icon={social.icon}
                      // size="2x"
                      height={32}
                      className="mx-2"
                      color={social.color}
                    />
                  </a>
                ))}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default About;
