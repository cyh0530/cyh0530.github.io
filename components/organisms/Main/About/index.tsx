import { useMemo } from "react";
import { Button, Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Image from 'next/image';
import Section from "../../../molecules/Section";
import { RESUME_LINK, SITE_DESC } from "@constants/index";
import socialMedia from "@constants/socialMedia";

const renderTooltip = (props: any, name: string) => (
  <Tooltip id={name} {...props}>
    {name}
  </Tooltip>
);

const About = () => {
  const avatarSize = useMemo(() => 300, []);

  return (
    <Section id="about-me" bg="dark">
      <Row>
        <Col
          lg={5}
          className="d-none d-lg-flex align-self-center justify-content-center"
        >
          <Image
            src="static/images/head.jpg"
            alt="Chia-Yang Huang"
            className="border border-secondary rounded-circle"
            width={avatarSize}
            height={avatarSize}
          />
        </Col>
        <Col lg={7}>
          <div className="text-center">
            <h2 className="display-4">Chia-Yang Huang</h2>
            <h5 className="mb-5">Seattle, WA</h5>
            <p className="lead">{SITE_DESC}</p>
            <div>
              <a
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark me-2 align-top"
                aria-label="Resume"
              >
                <Button variant="primary">Resume</Button>
              </a>
              {socialMedia.map((social, index) => (
                <OverlayTrigger
                  key={index}
                  placement="bottom"
                  delay={{ show: 150, hide: 150 }}
                  overlay={(props) => renderTooltip(props, social.name)}
                >
                  <a
                    href={social.link}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark"
                    aria-label={social.name}
                  >
                    <Icon
                      icon={social.icon}
                      height={38}
                      className="mx-2 mb-4"
                      color={social.color}
                    />
                  </a>
                </OverlayTrigger>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Section>
  );
};

export default About;
