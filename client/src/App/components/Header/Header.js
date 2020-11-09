import React from "react";
import { Navbar, Nav, Form, Row, Col } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUsers,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="white" className="header-component pt-2 pb-3 pl-5" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Row className="align-items-center col-md-5 px-0 header-component__search-bar">
          <Col md={4} className="header-component__search-box">
            <FontAwesomeIcon icon={faSearch} />
            <Form.Control placeholder="Anywhere"></Form.Control>
          </Col>
          <Col md={4} className="header-component__search-box">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <Form.Control placeholder="Anytime"></Form.Control>
          </Col>
          <Col md={4} className="header-component__search-box">
            <FontAwesomeIcon icon={faUsers} />
            <Form.Control placeholder="1 Guest"></Form.Control>
          </Col>
        </Row>

        <Nav className="ml-auto align-items-center">
          <Link className="nav-link" to="/host">
            Become a host
          </Link>
          <Link className="nav-link" to="/">
            Help
          </Link>
          <Link className="nav-link" to="/">
            Sign Up
          </Link>
          <Link className="nav-link" to="/">
            Login
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
