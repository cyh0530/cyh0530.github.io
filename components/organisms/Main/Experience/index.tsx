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
    name: "SeekOut",
    startDate: "Feb 2024",
    endDate: "Present",
    location: "Seattle, WA",
    title: "Software Engineer II",
    logo: "/static/images/logo/seekout-new.png",
    logoWidth: 60,
    logoHeight: 60,
    description: (
      <>
        <ul></ul>
        <div className="ml-5 mb-4">
          <IconList
            icons={[ICONS.CSHARP, ICONS.PYTHON, ICONS.GIT, ICONS.AZURE]}
          />
        </div>
      </>
    ),
  },
  {
    name: "SeekOut",
    startDate: "Feb 2023",
    endDate: "Jan 2024",
    location: "Seattle, WA",
    title: "Software Engineer I",
    logo: "/static/images/logo/seekout-new.png",
    logoWidth: 60,
    logoHeight: 60,
    description: (
      <>
        <ul>
          <li>
            Helped users reach their career goals easily by optimizing job
            recommendation search results through user profiles, including
            skills, experiences, and career interests.
          </li>
          <li>
            Ensured service stability by doing load testing through k6 framework
            before the product was launched to 17000+ users. No service downtime
            occurred.
          </li>
          <li>
            Normalized user location data through GPT to allow custom location
            attribute comparison.
          </li>
          <li>
            Built customer-facing self-serve metrics dashboards to evaluate
            product usage and ROI by building Snowflake pipelines with event
            data.
          </li>
        </ul>
        <div className="ml-5 mb-4">
          <IconList
            icons={[ICONS.CSHARP, ICONS.PYTHON, ICONS.GIT, ICONS.AZURE]}
          />
        </div>
      </>
    ),
  },
  {
    name: "SeekOut",
    startDate: "Jun 2022",
    endDate: "Sep 2022",
    location: "Seattle, WA",
    title: "Software Engineer Intern",
    logo: "static/images/logo/seekout.png",
    logoWidth: 60,
    logoHeight: 60,
    description: (
      <>
        <ul>
          <li>
            Built infrastructures to expose machine learning model through
            FastAPI to rank job recommendations
          </li>
          <li>
            Integrated CI/CD pipelines to deploy Azure Functions when new
            branches are created to accomplish branch-based deployment
          </li>
          <li>
            Implemented unit tests with dependency injections and mock requests
            to secure code quality
          </li>
          <li>
            Utilized - C#, Python, Github Actions, Azure Functions, Unit Tests
          </li>
        </ul>
        <div className="ml-5 mb-4">
          <IconList
            icons={[ICONS.CSHARP, ICONS.PYTHON, ICONS.GIT, ICONS.AZURE]}
          />
        </div>
      </>
    ),
  },
  {
    name: "BiiLabs",
    startDate: "Jul 2020",
    endDate: "Aug 2021",
    location: "Taipei, Taiwan",
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
          <li>
            Utilized - React, Redux, NodeJS, Typescript, Git Flow, Azure (VM,
            Cosmos DB, Blob Container)
          </li>
        </ul>
        <div className="ml-5 mb-4">
          <IconList
            icons={[
              ICONS.HTML5,
              ICONS.SASS,
              ICONS.TS,
              ICONS.REACT,
              ICONS.REDUX,
              ICONS.NODE,
              ICONS.YARN,
              ICONS.NGINX,
              ICONS.POSTGRE,
              ICONS.MONGO,
              ICONS.GIT,
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
      </>
    ),
  },
  {
    name: "Make A Thing",
    startDate: "May 2019",
    endDate: "Aug 2019",
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
          <li>Utilized - React, NodeJS, Bootstrap, MySQL, AWS (RDS, S3)</li>
        </ul>
        <div className="ml-5 mb-4">
          <IconList
            icons={[
              ICONS.HTML5,
              ICONS.CSS3,
              ICONS.JS,
              ICONS.REACT,
              ICONS.NODE,
              ICONS.BOOTSTRAP,
              ICONS.MYSQL,
            ]}
          />
        </div>
        <Row>
          <Col xs={12} md={6} className="pb-4">
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
