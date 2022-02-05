import React, { useEffect } from "react";
import { Container, Row, Col, ListGroup, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { getCummulativeStats } from "../../actions/adminActions";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";
import AdminRenderLineChart from "./AdminRenderLineChart";

const AdminDashboardPage = ({ history }) => {
  const { adminInfo } = useSelector((state) => state.adminLogin);
  const { error, loading, stats } = useSelector(
    (state) => state.getCummulativeStats
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCummulativeStats());
  }, []);

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
                  <Nav.Link>Manage Business Categories</Nav.Link>
                </LinkContainer>
              </ListGroup.Item>
              <ListGroup.Item>
                <LinkContainer to="/admin/account">
                  <Nav.Link>Manage Orders</Nav.Link>
                </LinkContainer>
              </ListGroup.Item>
              <ListGroup.Item>
                <LinkContainer to="/admin/category">
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
          <Col md={8}>
            <section className="mt-3">
              <h1>Welcome {adminInfo.user.firstName}</h1>
              <h5 className="text-muted">{adminInfo.user.email}</h5>
            </section>
            <section className="mt-5">
              <h2>Statistics</h2>
              {loading && <Loader />}
              {error && <Message variant="dange">{error}</Message>}
              <Row>
                <Col>
                  <h5>Total Orders</h5>
                </Col>
                <Col>
                  <h5>Total Customers</h5>
                </Col>
                <Col>
                  <h5>Total Sellers</h5>
                </Col>
                <Col>
                  <h5>Total Products</h5>
                </Col>
              </Row>
              <Row>
                {stats && (
                  <>
                    <Col>
                      <h5>{stats.totalItems.totalCustomers}</h5>
                    </Col>
                    <Col>
                      <h5>{stats.totalItems.totalCustomers}</h5>
                    </Col>
                    <Col>
                      <h5> {stats.totalItems.totalProducts}</h5>
                    </Col>
                    <Col>
                      <h5>{stats.totalItems.totalSellers}</h5>
                    </Col>
                  </>
                )}
              </Row>
            </section>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default AdminDashboardPage;
