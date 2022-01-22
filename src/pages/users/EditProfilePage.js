import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getUser, updateUser } from "../../actions/userActions";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";

const EditUserProfilePage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.getUser);

  const {
    loading,
    error,
    user: updatedUser,
  } = useSelector((state) => state.updateUser);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      user.email === email &&
      user.firstName === firstName &&
      user.lastName === lastName &&
      user.mobile === mobile
    ) {
      history.goBack();
      return;
    }

    dispatch(updateUser(email, mobile, firstName, lastName, user._id));

    setMessage("");
  };

  useEffect(() => {
    if (!user) {
      dispatch(getUser());
    } else {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
      setMobile(user.mobile);
    }
  }, [user, dispatch]);

  if (updatedUser) {
    return <Redirect to="/users/profile" />;
  }

  return (
    <main className="mt-4">
      <Container>
        <Row>
          <Col md={6} className="mx-auto">
            {loading && <Loader />}
            {error && <Message variant="danger">{error}</Message>}
            {message && <Message variant="info">{message}</Message>}
            <h1 className="mb-3">Edit Your Profile</h1>
            <section>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={firstName}
                    placeholder="Steve"
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={lastName}
                    placeholder="Jobs"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    placeholder="stevejobs@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="text"
                    value={mobile}
                    placeholder="9876543210"
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Button type="submit" className="w-100" variant="primary">
                    Save
                  </Button>
                </Form.Group>
              </Form>
            </section>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default EditUserProfilePage;
