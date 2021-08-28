import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Information from "../../../molecules/Information";
import Section from "../../../molecules/Section";
import ICONS from "@constants/icons";
import IconList from "components/molecules/IconList";

const Experience = () => {
  return (
    <Section id="experience" title="Experience" bg="dark">
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-container" key={index}>
            <Information {...exp} key={index} />
          </div>
        ))}
      </div>
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
    logo: "static/images/logo/biilabs.svg",
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
              ICONS.HTML5,
              ICONS.SASS,
              ICONS.TS,
              ICONS.REACT,
              ICONS.NODE,
              ICONS.YARN,
              ICONS.NGINX,
              ICONS.POSTGRE,
              ICONS.MONGO,
              ICONS.AZURE,
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
    logo: "static/images/logo/tyapn.png",
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
            <img
              src="static/images/experiences/tyapn-1.jpg"
              alt="TYAPN Officers"
              width="100%"
            />
          </Col>
          <Col xs={12} md={6}>
            <img
              src="static/images/experiences/tyapn-2.jpg"
              alt="TYAPN's Event - Legend of the Swoosh"
              width="100%"
            />
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
    logo: "static/images/logo/make-a-thing.jpeg",
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
              ICONS.HTML5,
              ICONS.CSS3,
              ICONS.JS,
              ICONS.REACT,
              ICONS.NODE,
              ICONS.MYSQL,
            ]}
          />
        </div>
        <Row>
          <Col xs={12} md={6}>
            <img
              src="static/images/experiences/make-1.png"
              className="project-pic"
              alt="Make A Thing"
              width="100%"
            />
          </Col>
          <Col xs={12} md={6}>
            <img
              src="static/images/experiences/make-2.png"
              className="project-pic"
              alt="Make A Thing"
              width="100%"
            />
          </Col>
        </Row>
      </>
    ),
  },
];

export default Experience;
