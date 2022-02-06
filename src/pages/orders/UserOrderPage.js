import React, { useEffect } from "react";
import { Container, Row, Col, Button, ListGroup, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { getUserOrder } from "../../actions/orderActions";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";

const UserOrderPage = ({ match }) => {
  useEffect(() => {
    dispatch(getUserOrder(order_id));
  }, []);

  const { loading, order, error } = useSelector((state) => state.getUserOrder);

  const { order_id } = match.params;

  const dispatch = useDispatch();

  return (
    <main className="mt-4">
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            <section>
              <LinkContainer to="/users/orders">
                <Button className="mb-3">Back</Button>
              </LinkContainer>

              {loading && <Loader />}
              {error && <Message variant="danger">{error}</Message>}
              {order && (
                <section>
                  <p className="lead text-uppercase">
                    <strong>
                      Order | {order._id} | {order.createdAt}
                    </strong>
                  </p>
                  <section>
                    <h4>Shipping</h4>
                    <hr />
                    <p className="lead">
                      {order.shippingAddress.fullName},{" "}
                      {order.shippingAddress.city},{" "}
                      {order.shippingAddress.state},{" "}
                      {order.shippingAddress.pincode}
                    </p>
                    <p className="lead">{order.shippingAddress.mobileNumber}</p>
                  </section>
                  <section>
                    <h4>Payment</h4>
                    <hr />
                    <p className="lead">{order.paymentMethod}</p>
                  </section>
                  <section>
                    <h4>Order Items</h4>
                    <hr />
                    {order.orderItems.length > 0 && (
                      <ListGroup variant="flush">
                        {order.orderItems.map((item) => {
                          return (
                            <ListGroup.Item>
                              <Row>
                                <Col>
                                  <Image
                                    className="rounded"
                                    fluid
                                    style={{ height: 50 }}
                                    src={item.image}
                                    alt={item.name}
                                  />
                                </Col>
                                <Col>{item.name}</Col>
                                <Col>
                                  {item.qty} * {item.price}/-
                                </Col>
                                <Col>₹ {item.price * item.qty}/-</Col>
                              </Row>
                            </ListGroup.Item>
                          );
                        })}
                      </ListGroup>
                    )}
                  </section>
                  <section>
                    <h4>Status</h4>
                    <hr />
                    <p className="lead">{order.status}</p>
                  </section>
                </section>
              )}
            </section>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default UserOrderPage;
