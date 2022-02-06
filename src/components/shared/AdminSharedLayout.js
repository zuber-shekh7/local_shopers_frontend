import React from "react";
import { Nav, Col, Row, ListGroup, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const AdminSharedLayout = ({ children }) => {
  return (
    <main>
      <Container fluid>
        <Row>
          <Col className="min-vh-100" md={3}>
            <ListGroup className="mt-3">
              <ListGroup.Item>
                <LinkContainer to="/admin/account">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
              </ListGroup.Item>
              <ListGroup.Item>
                <LinkContainer to="/manage/business-categories">
                  <Nav.Link>Manage Categories</Nav.Link>
                </LinkContainer>
              </ListGroup.Item>
              <ListGroup.Item>
                <LinkContainer to="/admin/sellers">
                  <Nav.Link>Manage Sellers</Nav.Link>
                </LinkContainer>
              </ListGroup.Item>
              <ListGroup.Item>
                <LinkContainer to="/admin/users">
                  <Nav.Link>Manage Users</Nav.Link>
                </LinkContainer>
              </ListGroup.Item>
              <ListGroup.Item>
                <LinkContainer to="/admin/admin">
                  <Nav.Link>Manage Admin</Nav.Link>
                </LinkContainer>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={8}>{children}</Col>
        </Row>
      </Container>
    </main>
  );
};

export default AdminSharedLayout;
