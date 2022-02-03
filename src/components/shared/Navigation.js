import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { adminLogout } from "../../actions/adminActions";
import { sellerLogout } from "../../actions/sellerActions";
import { userLogout } from "../../actions/userActions";

const Navigation = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);
  const { sellerInfo } = useSelector((state) => state.sellerLogin);
  const { adminInfo } = useSelector((state) => state.adminLogin);

  const handleUserLogout = () => {
    dispatch(userLogout());
  };

  const handleSellerLogout = () => {
    dispatch(sellerLogout());
  };

  const handleAdminLogout = () => {
    dispatch(adminLogout());
  };

  const renderNavigationLinks = () => {
    if (userInfo) {
      return (
        <>
          <LinkContainer to="/users/account">
            <Nav.Link>Your Account</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/users/cart">
            <Nav.Link>Cart</Nav.Link>
          </LinkContainer>
          <Nav.Link onClick={handleUserLogout}>Log Out</Nav.Link>
        </>
      );
    } else if (sellerInfo) {
      return (
        <>
          <LinkContainer to="/sellers/dashboard">
            <Nav.Link>Your Account</Nav.Link>
          </LinkContainer>

          <Nav.Link onClick={handleSellerLogout}>Log Out</Nav.Link>
        </>
      );
    } else if (adminInfo) {
      return (
        <>
          <LinkContainer to="/admin/account">
            <Nav.Link>Your Account</Nav.Link>
          </LinkContainer>

          <Nav.Link onClick={handleAdminLogout}>Log Out</Nav.Link>
        </>
      );
    } else {
      return (
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
          <LinkContainer to="/users/cart">
            <Nav.Link>Cart</Nav.Link>
          </LinkContainer>
        </>
      );
    }
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
            {renderNavigationLinks()}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
