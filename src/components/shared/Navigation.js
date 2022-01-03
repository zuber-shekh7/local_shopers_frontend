import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { userLogout } from "../../actions/userActions";

const Navigation = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);

  const handleLogout = () => {
    dispatch(userLogout());
  };

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
            {userInfo ? (
              <>
                <LinkContainer to="/users/profile">
                  <Nav.Link>Your Account</Nav.Link>
                </LinkContainer>

                <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
              </>
            ) : (
              <>
                <LinkContainer to="/sellers">
                  <Nav.Link>Sell Online</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/users/login">
                  <Nav.Link>Log In</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/users/signup">
                  <Nav.Link>Sign Up</Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
