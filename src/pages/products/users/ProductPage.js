import React, { useState } from "react";
import { useEffect } from "react";

import {
  Container,
  Row,
  Col,
  Button,
  Image,
  ListGroup,
  FormControl,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../../actions/productActions";
import Loader from "../../../components/shared/Loader";
import Message from "../../../components/shared/Message";

const UserProductPage = ({ match, history }) => {
  const [quantity, setQuantity] = useState(1);

  const { product_id } = match.params;

  const { loading, product, error } = useSelector((state) => state.getProduct);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(product_id));
  }, []);

  const addToCartHandler = () => {
    history.push(`/users/cart/${product_id}?quantity=${quantity}`);
  };

  const addToWishListHandler = (id) => {
    history.push(`/users/wishlist/${id}`);
  };

  return (
    <main>
      <Container>
        <Row>
          <Col className="mx-auto" md={8}>
            {loading && <Loader />}
            {error && <Message>{error}</Message>}
            {product && (
              <section className="my-3">
                <Button className="my-3" onClick={() => history.goBack()}>
                  Back
                </Button>
                <h2 className="text-start">{product.name}</h2>
                <Row>
                  <Col md={4} className="text-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fluid
                      rounded
                    />
                  </Col>
                  <Col md={4}>
                    <h4>{product.name}</h4>
                    <p className="lead">{product.description}</p>
                    <h4>₹ {product.price}/-</h4>
                  </Col>
                  <Col md={4}>
                    <ListGroup.Item>
                      <Row>
                        <Col>Price</Col>
                        <Col>₹ {product.price}/-</Col>
                      </Row>
                    </ListGroup.Item>
                    {product.quantity > 0 && (
                      <ListGroup.Item>
                        <Row>
                          <Col>Quantity</Col>
                          <Col>
                            <FormControl
                              as="select"
                              value={quantity}
                              onChange={(e) => setQuantity(e.target.value)}
                            >
                              {[...Array(product.quantity).keys()].map((i) => {
                                return <option value={i + 1}>{i + 1}</option>;
                              })}
                            </FormControl>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    )}

                    <ListGroup>
                      <ListGroup.Item>
                        <Button
                          onClick={() => addToWishListHandler(product._id)}
                          className="w-100"
                          variant="warning"
                        >
                          Add to Wishlist
                        </Button>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {product.quantity > 0 ? (
                          <Button onClick={addToCartHandler} className="w-100">
                            Add to Cart
                          </Button>
                        ) : (
                          <Button variant="danger" className="w-100">
                            Out of Stock
                          </Button>
                        )}
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </section>
            )}
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default UserProductPage;
