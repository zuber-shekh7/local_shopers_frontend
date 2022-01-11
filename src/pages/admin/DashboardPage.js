import React, { useEffect } from "react";
import { Container, Row, Col, ListGroup, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

const AdminDashboardPage = ({ history }) => {
  const { adminInfo } = useSelector((state) => state.adminLogin);

  useEffect(() => {
    if (!adminInfo) {
      history.push("/admin/login");
    }
  }, [history, adminInfo]);

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
                <LinkContainer to="/admin/account">
                  <Nav.Link>Manage Orders</Nav.Link>
                </LinkContainer>
              </ListGroup.Item>
              <ListGroup.Item>
                <LinkContainer to="/admin/account">
                  <Nav.Link>Manage Categories</Nav.Link>
                </LinkContainer>
              </ListGroup.Item>
              <ListGroup.Item>
                <LinkContainer to="/admin/account">
                  <Nav.Link>Manager Sellers</Nav.Link>
                </LinkContainer>
              </ListGroup.Item>
              <ListGroup.Item>
                <LinkContainer to="/admin/account">
                  <Nav.Link>Manager Users</Nav.Link>
                </LinkContainer>
              </ListGroup.Item>
              <ListGroup.Item>
                <LinkContainer to="/admin/account">
                  <Nav.Link>Manage Admin</Nav.Link>
                </LinkContainer>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={8}>
            <section className="mt-3">
              <h1>Welcome {adminInfo.user.firstName}</h1>
              <h5 className="text-muted">{adminInfo.user.email}</h5>
            </section>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default AdminDashboardPage;
