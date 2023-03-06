import IconList from "@components/molecules/IconList";
import { ReactNode } from "react";
import Card from "react-bootstrap/Card";
import { Icon } from "@iconify/react";
import ICONS from "@constants/icons";

interface IProps {
  title: string;
  image: string;
  description: ReactNode;
  link?: string;
  githubLink: string;
  icons: { icon: string; name: string; color?: string }[];
  images?: { src: string; name: string }[];
}

const ProjectCard = ({
  title,
  image,
  description,
  link,
  githubLink,
  icons,
  images = [],
}: IProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-body"
    >
      <Card className="shadow-lg p-3 rounded mb-5 bg-white">
        <Card.Img variant="top" src={image} className="rounded"  />
        <Card.Body>
          <Card.Title className="">{title}</Card.Title>
          <Card.Text style={{ minHeight: 100 }}>{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="bg-transparent border-0">
          <IconList icons={icons} images={images} />
          <a
            href={githubLink}
            className="position-absolute"
            style={{ right: 20, bottom: 23 }}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation}
          >
            <Icon icon={ICONS.GITHUB.icon} height={32} />
          </a>
        </Card.Footer>
      </Card>
    </a>
  );
};

export default ProjectCard;
