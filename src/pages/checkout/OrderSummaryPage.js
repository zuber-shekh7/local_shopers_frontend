import React, { useEffect } from "react";
import { Container, Row, Col, Button, ListGroup, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { createOrder } from "../../actions/orderActions";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";

const OrderSummaryPage = ({ history }) => {
  const { cartItems, shippingAddress, paymentMethod, business } = useSelector(
    (state) => state.cart
  );

  const {
    userInfo: { user },
  } = useSelector((state) => state.userLogin);
  const { loading, order, error } = useSelector((state) => state.createOrder);

  useEffect(() => {
    if (!paymentMethod) {
      history.push("/checkout/payment");
    }
  }, [paymentMethod]);

  useEffect(() => {
    if (order) {
      history.push(`/users/orders/${order._id}`);
    }
  }, [order, history]);

  const subTotal = Number(
    cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  const tax = 100;
  const shippingCharges = 100;
  const totalPrice = Number(subTotal + tax + shippingCharges).toFixed(2);

  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    dispatch(
      createOrder({
        user_id: user._id,
        business_id: business,
        orderItems: cartItems,
        paymentMethod,
        shippingAddress,
        totalPrice,
        tax,
        shippingCharges,
      })
    );
  };

  return (
    <main className="mt-4">
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            {loading && <Loader />}
            {error && <Message variant="danger">{error}</Message>}
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
                    <h4 className="text-center">₹ {totalPrice}/-</h4>
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
