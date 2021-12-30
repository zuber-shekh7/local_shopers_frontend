import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <Navbar className="py-4 shadow sticky-top" bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Local Shoppers</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/auth/login">
              <Nav.Link>Log In</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/auth/signup">
              <Nav.Link>Sign Up</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
