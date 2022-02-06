import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  Image,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { getSellerOrder, updateOrderStatus } from "../../actions/orderActions";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";
import orderStatus from "../../utils/OrderStatus.js";

const SellerOrderPage = ({ match }) => {
  const [status, setStatus] = useState("");

  const {
    loading: updateLoading,
    order: success,
    error: updateError,
  } = useSelector((state) => state.updateOrderStatus);

  const { loading, order, error } = useSelector(
    (state) => state.getSellerOrder
  );

  useEffect(() => {
    dispatch(getSellerOrder(order_id));
  }, [success]);

  useEffect(() => {
    if (order) {
      setStatus(order.status);
    }
  }, [order]);

  const { order_id } = match.params;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateOrderStatus(order_id, status));
  };

  return (
    <main className="mt-4">
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            <section>
              <LinkContainer to="/manage/orders">
                <Button className="mb-3">Back</Button>
              </LinkContainer>

              {loading || (updateLoading && <Loader />)}
              {error ||
                (updateError && (
                  <Message variant="danger">{error || updateError}</Message>
                ))}
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
                            <ListGroup.Item key={item._id}>
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
                  <section className="m">
                    <h4>Status</h4>
                    <hr />
                    <Form onSubmit={handleSubmit}>
                      <FormGroup className="mb-3">
                        <FormLabel>
                          Current Status: <strong>{order.status}</strong>
                        </FormLabel>
                        <FormControl
                          as="select"
                          defaultValue={status}
                          onChange={(e) => setStatus(e.target.value)}
                          required
                        >
                          {orderStatus.map((status, index) => {
                            return (
                              <option key={index} value={status}>
                                {status}
                              </option>
                            );
                          })}
                        </FormControl>
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <Button type="submit" className="w-100">
                          Update
                        </Button>
                      </FormGroup>
                    </Form>
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

export default SellerOrderPage;
