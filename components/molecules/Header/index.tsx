import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container'
import { LINKS } from "../../../constants";

const Header = () => {

  return (
    <Navbar
      bg="light"
      expand="lg"
      variant="light"
      id="header"
      className="position-fixed start-0 end-0 shadow-sm"
      style={{ zIndex: 1000 }}
    >
      <Container fluid>
        <Navbar.Brand href="/">cyh0530</Navbar.Brand>
        <Navbar.Toggle className="toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {LINKS.map((link, index) => (
              <Nav.Link
                key={index}
                className=""
                href={`#${link.toLowerCase()}`}
              >
                {link}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
