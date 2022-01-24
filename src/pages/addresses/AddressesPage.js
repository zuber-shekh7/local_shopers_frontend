import React, { useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { getAddresses } from "../../actions/addressActions";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";

const AddressesPage = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, error, addresses } = useSelector(
    (state) => state.getAddresses
  );

  const { user } = userInfo;

  useEffect(() => {
    dispatch(getAddresses(user._id));
  }, []);

  return (
    <main className="mt-4">
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            <section>
              <section className="d-flex justify-content-between">
                <h2>Your Addresses</h2>
                <LinkContainer to="/users/addresses/new">
                  <Button>Add new address</Button>
                </LinkContainer>
              </section>
              <hr />
              {loading && <Loader />}
              {error && <Message>{error}</Message>}
              <Row>
                {addresses && addresses.length && addresses.length > 0 ? (
                  <>
                    {addresses.map((address) => {
                      return (
                        <Col key={address._id} md={4} className="mb-3">
                          <Card>
                            <Card.Body>
                              <Card.Title>{address.fullName}</Card.Title>
                              <p>
                                {address.flatNo} {address.street}
                                {address.landmark}
                              </p>
                              <p>
                                {address.city}, {address.state},{" "}
                                {address.pincode}
                              </p>
                              <p>Phone Number: {address.mobileNumber}</p>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-between">
                              <LinkContainer
                                to={`/users/addresses/${address._id}`}
                              >
                                <Button className="w-100 me-2">View</Button>
                              </LinkContainer>
                            </Card.Footer>
                          </Card>
                        </Col>
                      );
                    })}
                  </>
                ) : (
                  <h3 className="text-center text-muted">
                    No address available
                  </h3>
                )}
              </Row>
            </section>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default AddressesPage;
