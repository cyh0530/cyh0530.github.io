import IconList from "@components/molecules/IconList";
import { ReactNode, useRef } from "react";
import Card from "react-bootstrap/Card";
import { Icon } from "@iconify/react";
import ICONS from "@constants/icons";
import { StaticImageData } from "next/image";

interface IProps {
  title: string;
  image: string;
  description: ReactNode;
  link?: string;
  githubLink: string;
  icons: { icon: string; name: string; color?: string }[];
  images?: { src: string | StaticImageData; name: string }[];
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
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const handleOnClick = () => {
    anchorRef.current?.click();
  };
  const card = (
    <Card
      className="shadow-lg p-3 rounded mb-5 bg-white"
      style={{ cursor: link ? "pointer" : "default" }}
    >
      <Card.Img
        variant="top"
        src={image}
        className="rounded"
        alt={title}
        onClick={handleOnClick}
      />
      <Card.Body onClick={handleOnClick}>
        <Card.Title>{title}</Card.Title>
        <span style={{ minHeight: 100 }}>{description}</span>
      </Card.Body>
      <Card.Footer className="bg-transparent border-0" onClick={handleOnClick}>
        <IconList icons={icons} images={images} />
        <a
          href={githubLink}
          className="position-absolute"
          style={{ right: 20, bottom: 23 }}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={title}
          onClick={(e) => e.stopPropagation}
        >
          <Icon icon={ICONS.GITHUB.icon} height={32} />
        </a>
      </Card.Footer>
    </Card>
  );

  return (
    <>
      {!!link && (
        <a
          ref={anchorRef}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-body"
        />
      )}

      {card}
    </>
  );
};

export default ProjectCard;
