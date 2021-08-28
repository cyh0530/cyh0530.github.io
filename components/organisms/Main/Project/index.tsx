import Section from "@components/molecules/Section";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "./ProjectCard";
import { ICONS } from "@constants/index";

const Project = () => {
  return (
    <Section id="project" bg="light" title="Projects">
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={6}>
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
    </Section>
  );
};

const projects = [
  {
    title: "Stocks",
    image: "static/images/projects/stocks.png",
    link: "https://cyh0530.github.io/stocks",
    githubLink: "https://github.com/cyh0530/stocks",
    description: (
      <>
        <ul>
          <li>
            Analyzed historic stock data with the pre-known logic to predict
            future stock price
          </li>
          <li>In progress to apply machine learning to increase accuracy</li>
        </ul>
      </>
    ),
    icons: [
      ICONS.HTML5,
      ICONS.SASS,
      ICONS.TS,
      ICONS.REACT,
      ICONS.PYTHON,
      ICONS.TENSORFLOW,
    ],
    images: [
      {
        src: "static/images/logo/app-scripts.svg",
        name: "Google App Script",
      },
    ],
  },
  {
    title: "Husky Map",
    image: "static/images/projects/huskymap.png",
    link: "https://huskymaps-cyh0530.herokuapp.com",
    githubLink: "https://github.com/cyh0530/CSE373-Data-Structure",
    description: (
      <>
        <ul>
          <li>
            Built a map around Greater Seattle Area to find shortest path
            between two locations
            <br />
          </li>
          <li>
            Implemented K-D Tree, A* search to store locations and find shortest
            route <br />
          </li>
        </ul>
      </>
    ),
    icons: [ICONS.JAVA],
    images: [
      {
        src: "static/images/logo/uw.png",
        name: "UW CSE 373 Data Structure Course Project",
      },
    ],
  },
  {
    title: "Job Apply",
    image: "static/images/projects/company.png",
    link: "https://cyh0530.github.io/company",
    githubLink: "https://github.com/cyh0530/company",
    description: (
      <>
        <ul>
          <li>
            Assist people to remind what companies to apply when they are
            looking for jobs
          </li>
          <li>
            Summarized numerous companies career websites and career platforms
          </li>
        </ul>
      </>
    ),
    icons: [ICONS.HTML5, ICONS.TS, ICONS.REACT, ICONS.ANT_DESIGN],
  },
];

export default Project;
