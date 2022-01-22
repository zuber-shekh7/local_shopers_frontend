import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { getUser } from "../../actions/userActions";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";
import { LinkContainer } from "react-router-bootstrap";

const UserProfilePage = () => {
  const dispatch = useDispatch();

  const { loading, error, user } = useSelector((state) => state.getUser);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <main>
      <Container>
        <Row>
          <Col md={6} className="mx-auto">
            {loading && <Loader />}
            {error && <Message variant="danger">{error}</Message>}
            {user && (
              <section className="mt-3">
                <h1 className="mb-3">Your Profile</h1>
                <ListGroup>
                  <ListGroup.Item className="py-3">
                    <Row>
                      <Col md={10}>
                        <strong>First Name</strong>: {user.firstName}
                      </Col>
                      <Col md={2}>
                        <LinkContainer to="/users/profile/edit">
                          <Button>Edit</Button>
                        </LinkContainer>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item className="py-3">
                    <Row>
                      <Col md={10}>
                        <strong>Last Name</strong>: {user.lastName}
                      </Col>
                      <Col md={2}>
                        <LinkContainer to="/users/profile/edit">
                          <Button>Edit</Button>
                        </LinkContainer>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item className="py-3">
                    <Row>
                      <Col md={10}>
                        <strong>Email</strong>: {user.email}
                      </Col>
                      <Col md={2}>
                        <LinkContainer to="/users/profile/edit">
                          <Button>Edit</Button>
                        </LinkContainer>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item className="py-3">
                    <Row>
                      <Col md={10}>
                        <strong>Mobile Number</strong>: {user.mobile}
                      </Col>
                      <Col md={2}>
                        <LinkContainer to="/users/profile/edit">
                          <Button>Edit</Button>
                        </LinkContainer>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item className="py-3">
                    <Row>
                      <Col md={10}>
                        <strong>Password</strong>: {"********"}
                      </Col>
                      <Col md={2}>
                        <Button>Edit</Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </section>
            )}
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default UserProfilePage;
