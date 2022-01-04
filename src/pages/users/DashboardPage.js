import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getUserDetails } from "../../actions/userActions";
import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";

const UserProfilePage = ({ history }) => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);

  const { loading, user, error } = useSelector((state) => state.userDetails);

  useEffect(() => {
    if (!userInfo) {
      history.push("/users/login");
    } else {
      dispatch(getUserDetails());
    }
  }, [userInfo, history, dispatch]);

  return (
    <main className="mt-4">
      <Container>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        {user && (
          <Row>
            <Col md={8}>
              <h1>Welcome {user.firstName}</h1>
            </Col>
            <Col md={4}>
              <section className="text-center">
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
                  alt={user.firstName}
                  fluid
                  thumbnail
                  width="200"
                  height="150"
                />
              </section>
              <section>
                <hr />
                <ListGroup className="mt-4">
                  <ListGroup.Item>First Name: {user.firstName}</ListGroup.Item>
                  <ListGroup.Item>Last Name: {user.lastName}</ListGroup.Item>
                  <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                  <ListGroup.Item>Mobile: {user.mobile}</ListGroup.Item>
                </ListGroup>
              </section>
            </Col>
          </Row>
        )}
      </Container>
    </main>
  );
};

export default UserProfilePage;
