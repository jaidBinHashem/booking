import React from "react";
import { Nav } from "react-bootstrap";
import "./SecondaryNav.css";
const SecondaryNav = () => {
  return (
    <Nav
      className="secondary-nav-component"
      variant="tabs"
      defaultActiveKey="for_you"
    >
      <Nav.Item>
        <Nav.Link eventKey="for_you">FOR YOU</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="homes">HOMES</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="experience">EXPERIENCES</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="places">PLACES</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default SecondaryNav;
