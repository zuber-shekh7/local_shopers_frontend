import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  FormControl,
  Image,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import Message from "../../components/shared/Message";

const CartPage = ({ match, location, history }) => {
  const { product_id } = match.params;

  const quantity = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    if (product_id) {
      dispatch(addToCart(product_id, quantity));
    }
  }, [dispatch, product_id, quantity]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/checkout/shipping");
  };

  return (
    <main className="mt-4">
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            <h2>Your Cart</h2>
            <Row>
              <Col md={8}>
                {cartItems.length === 0 ? (
                  <Message>Your Cart is Empty</Message>
                ) : (
                  <ListGroup variant="flush">
                    {cartItems.map((item) => {
                      return (
                        <ListGroup.Item>
                          <Row>
                            <Col>
                              <Image
                                className="rounded"
                                fluid
                                src={item.image}
                                alt={item.name}
                              />
                            </Col>
                            <Col>{item.name}</Col>
                            <Col>₹ {item.price}/-</Col>
                            <Col>
                              <FormControl
                                as="select"
                                value={item.qty}
                                onChange={(e) => {
                                  dispatch(
                                    addToCart(
                                      item.product._id,
                                      Number(e.target.value)
                                    )
                                  );
                                }}
                              >
                                {[...Array(item.product.quantity).keys()].map(
                                  (i, index) => {
                                    return (
                                      <option key={index} value={i + 1}>
                                        {i + 1}
                                      </option>
                                    );
                                  }
                                )}
                              </FormControl>
                            </Col>
                            <Col>
                              <Button
                                onClick={() => removeFromCartHandler(item._id)}
                                variant="danger"
                                size="sm"
                              >
                                Remove
                              </Button>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      );
                    })}
                  </ListGroup>
                )}
              </Col>
              <Col md={4}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h6>
                      Sub Total of{" "}
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)} items
                    </h6>
                    <h4>
                      ₹{" "}
                      {cartItems
                        .reduce((acc, item) => acc + item.price * item.qty, 0)
                        .toFixed(2)}
                    </h4>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      onClick={checkoutHandler}
                      disabled={cartItems.length === 0}
                      className="w-100"
                    >
                      Proceed To Checkout
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

export default CartPage;
