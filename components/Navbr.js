import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from "prop-types";

export default function Navbr(props) {
  return (
    <div>
      <Navbar expand="lg" classNameName="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav classNameName="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">{props.abtxt}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

Navbr.propTypes = { title: PropTypes.string, abtxt: PropTypes.string };

