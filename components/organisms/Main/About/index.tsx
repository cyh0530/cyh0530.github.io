import { useMemo } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Icon } from "@iconify/react";
import Section from "../../../molecules/Section";
import { SITE_DESC } from "@constants/index";
import socialMedia from "@constants/socialMedia";

const About = () => {
  const avatarSize = useMemo(() => 300, []);

  return (
    <Section id="about-me" bg="dark">
      <Row>
        <Col
          lg={5}
          className="d-none d-lg-flex align-self-center justify-content-center"
        >
          <img           
            src="static/images/head.jpg"
            alt="Chia-Yang Huang"
            className="border border-secondary rounded-circle"
            width={avatarSize}
            height={avatarSize}
          />
        </Col>
        <Col lg={7} className="d-flex align-items-center">
          <div>
            <h2 className="display-4 text-center">About Me</h2>
            <h5 className="text-center mb-5">Seattle, WA</h5>
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
    </Section>
  );
};

export default About;
