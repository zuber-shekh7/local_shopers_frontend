import React, { useState } from "react";
import { useEffect } from "react";

import { Container, Row, Col, Button, Image, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { getProduct } from "../../../actions/productActions";
import Loader from "../../../components/shared/Loader";
import Message from "../../../components/shared/Message";

const UserProductPage = ({ match, history }) => {
  const { product_id } = match.params;

  const { loading, product, error } = useSelector((state) => state.getProduct);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(product_id));
  }, []);

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
                      src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
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
                    <ListGroup>
                      <ListGroup.Item>
                        <Button className="w-100" variant="warning">
                          Add to Wishlist
                        </Button>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {product.quantity > 0 ? (
                          <Button className="w-100">Add to Cart</Button>
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
