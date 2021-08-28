import { ReactNode } from "react";
import Container from "react-bootstrap/Container";
import { BG } from "../../../constants";
interface IProps {
  id: string;
  children: ReactNode;
  bg: "light" | "dark";
  className?: string;
  title?: string;
}

const Section = ({ id, children, className, bg, title }: IProps) => {
  return (
    <div
      id={id}
      className={`p-5 ${className}`}
      style={{ backgroundColor: BG[bg] }}
    >
      <Container>
        {title && <h2 className="display-4 mb-5 text-center">{title}</h2>}
        {children}
      </Container>
    </div>
  );
};

export default Section;