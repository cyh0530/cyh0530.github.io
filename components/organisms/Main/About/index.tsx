import { useMemo } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import head from "../../../../static/images/head.jpg";
import { Icon } from "@iconify/react";
import Section from '../../../molecules/Section'
import { SITE_DESC, ICON_COLORS } from "@constants/index";
const About = () => {

  const avatarSize = useMemo(() => (300), [])
  const socialMedia = useMemo(
    () => [
      {
        icon: "fa-solid:id-card",
        title: "Resume",
        link: "",
        color: "#4b2e83",
      },
      {
        icon: "cib:gmail",
        title: "Email",
        link: "mailto:cyh0530@uw.edu",
        color: "#bb001b",
      },
      {
        icon: "akar-icons:linkedin-fill",
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/cyh0530/",
        color: ICON_COLORS.LINKEDIN,
      },
      {
        icon: "fa-brands:github",
        title: "Github",
        link: "https://github.com/cyh0530",
        color: ICON_COLORS.GITHUB,
      },
      {
        icon: "fa-brands:facebook",
        title: "Facebook",
        link: "https://www.facebook.com/cyh0530/",
        color: ICON_COLORS.FACEBOOK,
      },
      {
        icon: "fa-brands:instagram",
        title: "Instagram",
        link: "https://www.instagram.com/cyh0530/",
        color: ICON_COLORS.INSTAGRAM,
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
                    title={social.title}
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
