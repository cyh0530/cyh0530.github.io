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

const Section = ({ id, children, className = "", bg, title }: IProps) => {
  return (
    <div
      id={id}
      className={`py-5 ${className}`}
      style={{ backgroundColor: BG[bg] }}
    >
      <Container className="pt-5 px-4" fluid="md">
        {title && <h2 className="display-4 mb-4 text-center">{title}</h2>}
        {children}
      </Container>
    </div>
  );
};

export default Section;
