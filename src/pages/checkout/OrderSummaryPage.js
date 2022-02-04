import React, { useEffect } from "react";
import { Container, Row, Col, Button, ListGroup, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Message from "../../components/shared/Message";

const OrderSummaryPage = ({ history }) => {
  const { cartItems, shippingAddress, paymentMethod } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    if (!paymentMethod) {
      history.push("/checkout/payment");
    }
  }, [paymentMethod]);

  const subTotal = Number(
    cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  const tax = 100;
  const shippingCharges = 100;
  const total = Number(subTotal + tax + shippingCharges).toFixed(2);

  const handlePlaceOrder = () => {
    history.push("/checkout/place-order");
  };
  return (
    <main className="mt-4">
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            <Row>
              <Col md={8}>
                <h2>Order summary</h2>
                <hr />
                <section>
                  <h4>Shipping</h4>
                  <hr />
                  <p className="lead">
                    {shippingAddress.fullName}, {shippingAddress.city},{" "}
                    {shippingAddress.state}, {shippingAddress.pincode}
                  </p>
                  <p className="lead">{shippingAddress.mobileNumber}</p>
                </section>
                <section>
                  <h4>Payment</h4>
                  <hr />
                  <p className="lead">{paymentMethod}</p>
                </section>
                <section>
                  <h4>Order Items</h4>
                  <hr />
                  {cartItems.length > 0 ? (
                    <ListGroup variant="flush">
                      {cartItems.map((item) => {
                        return (
                          <ListGroup.Item>
                            <Row>
                              <Col>
                                <Image
                                  className="rounded"
                                  fluid
                                  style={{ height: 50 }}
                                  src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
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
                  ) : (
                    <Message>Your cart is empty</Message>
                  )}
                </section>
              </Col>
              <Col md={4}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h6>
                      Sub Total of{" "}
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)} items
                    </h6>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Sub Total</Col>
                      <Col>
                        <p>₹ {subTotal}</p>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Shipping Charges</Col>
                      <Col>
                        <p>₹ {shippingCharges}</p>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Tax</Col>
                      <Col>
                        <p>₹ {tax}</p>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h4 className="text-center">₹ {total}/-</h4>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      onClick={handlePlaceOrder}
                      disabled={cartItems.length === 0}
                      className="w-100"
                    >
                      Place Order
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default OrderSummaryPage;
