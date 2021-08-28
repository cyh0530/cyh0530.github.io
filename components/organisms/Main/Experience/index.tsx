import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Information from "../../../molecules/Information";
import Section from "../../../molecules/Section";
import { ICON_COLORS } from "@constants/index";
import make1 from "@images/experiences/make-1.png";
import make2 from "@images/experiences/make-2.png";
import tyapn1 from "@images/experiences/tyapn-1.jpg";
import tyapn2 from "@images/experiences/tyapn-2.jpg";
import IconList from "components/molecules/IconList";
const Experience = () => {
  return (
    <Section id="experience" title="Experience" bg="dark">
      {experiences.map((exp, index) => (
        <Information {...exp} key={index} />
      ))}
    </Section>
  );
};

const experiences = [
  {
    name: "BiiLabs",
    startDate: "Jul 2020",
    endDate: "Aug 2021",
    location: "Taipei Taiwan",
    title: "Software Engineer",
    logo: require("@images/logo/biilabs.svg"),
    logoWidth: 60,
    logoHeight: 60,
    description: (
      <>
        <ul>
          <li>
            Built a digital certificate platform for institutions, students, and
            corporate to issue and verify certificates.
          </li>
          <li>Led a team of 3 engineers to coordinate, develop softwares</li>
          <li>
            Established work procedures to allow information be easily
            communicated in a team of 10 people
          </li>
          <li>
            Created a drag-and-drop editor to allow issuers to design their own
            certificate templates
          </li>
        </ul>
        <div className="d-flex align-item-center ml-5 mb-4">
          <IconList
            icons={[
              {
                icon: "fa-brands:html5",
                title: "HTML5",
                color: ICON_COLORS.HTML5,
              },
              {
                icon: "fa-brands:css3",
                title: "CSS 3",
                color: ICON_COLORS.CSS3,
              },
              {
                icon: "vscode-icons:file-type-js-official",
                title: "Javascript",
                color: ICON_COLORS.JS,
              },
              {
                icon: "fa-brands:react",
                title: "React",
                color: ICON_COLORS.REACT,
              },
              {
                icon: "fa-brands:node",
                title: "Node",
                color: ICON_COLORS.NODE,
              },
              {
                icon: "fa-brands:yarn",
                title: "Yarn",
                color: ICON_COLORS.YARN,
              },
              {
                icon: "file-icons:nginx",
                title: "Nginx",
                color: ICON_COLORS.NGINX,
              },
              {
                icon: "cib:postgresql",
                title: "PostgreSQL",
                color: ICON_COLORS.POSTGRE,
              },
              {
                icon: "vscode-icons:file-type-mongo",
                title: "MongoDB",
                color: ICON_COLORS.MONGO,
              },
              {
                icon: "codicon:azure",
                title: "Azure",
                color: ICON_COLORS.AZURE,
              },
            ]}
          />
        </div>
      </>
    ),
  },
  {
    name: "Taiwanese Youth Alliance of Pacific Northwest",
    startDate: "May 2019",
    endDate: "May 2020",
    location: "Seattle, WA",
    logo: require("@images/logo/tyapn.png"),
    logoWidth: 60,
    logoHeight: 60,
    title: "Director of Event Planning",
    description: (
      <>
        <ul>
          <li>
            Scheduled 10+ cultural, social, professional developing events an
            year for students in Great Seattle Area
            <br />
          </li>
          <li>
            Reorganized organization’s working structure and established
            standard operating procedure
            <br />
          </li>
          <li>
            Invite 10+ speakers from different fields to share their experiences
          </li>
        </ul>
        <Row>
          <Col xs={12} md={6}>
            <Image src={tyapn1} alt="TYAPN Officers" />
          </Col>
          <Col xs={12} md={6}>
            <Image src={tyapn2} alt="TYAPN's Event - Legend of the Swoosh" />
          </Col>
        </Row>
      </>
    ),
  },
  {
    name: "Make A Thing",
    startDate: "May 2019",
    endDate: "Jul 2019",
    location: "West Lafayette",
    logo: require("@images/logo/make-a-thing.jpeg"),
    logoWidth: 60,
    logoHeight: 60,
    title: "Full Stack Web Developer",
    description: (
      <>
        <ul>
          <li>
            Designed the company’s website from scratch to increase the
            reputation
            <br />
          </li>
          <li>
            Built an AWS database for users to upload and download projects
            <br />
          </li>
          <li>
            Implemented Hotjar and Google Analytics to track website visitors{" "}
            <br />
          </li>
        </ul>
        <div className="d-flex align-item-center ml-5 mb-4">
          <IconList
            icons={[
              {
                icon: "fa-brands:html5",
                title: "HTML5",
                color: ICON_COLORS.HTML5,
              },
              {
                icon: "fa-brands:css3",
                title: "CSS 3",
                color: ICON_COLORS.CSS3,
              },
              {
                icon: "vscode-icons:file-type-js-official",
                title: "Javascript",
                color: ICON_COLORS.JS,
              },
              {
                icon: "fa-brands:react",
                title: "React",
                color: ICON_COLORS.REACT,
              },
              {
                icon: "fa-brands:node",
                title: "Node",
                color: ICON_COLORS.NODE,
              },
              {
                icon: "whh:mysqltwo",
                title: "MySQL",
                color: ICON_COLORS.MYSQL,
              },
            ]}
          />
        </div>
        <Row>
          <Col xs={12} md={6}>
            <Image src={make1} className="project-pic" alt="Make A Thing" />
          </Col>
          <Col xs={12} md={6}>
            <Image src={make2} className="project-pic" alt="Make A Thing" />
          </Col>
        </Row>
      </>
    ),
  },
];

export default Experience;
