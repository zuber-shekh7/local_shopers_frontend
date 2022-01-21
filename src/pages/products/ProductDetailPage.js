import React, { useState } from "react";
import { useEffect } from "react";

import { Container, Row, Col, Button, Image, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { getProduct } from "../../actions/productActions";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";
import ModalForm from "../../components/shared/ModalForm";

const ProductDetailPage = ({ match }) => {
  const [modalShow, setModalShow] = useState(false);

  const { product_id } = match.params;

  const { error, loading, product } = useSelector((state) => state.getProduct);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(product_id));
  }, []);

  const onDelete = () => {};

  return (
    <main>
      <Container>
        <Row>
          <Col className="mx-auto" md={8}>
            {loading && <Loader />}
            {error && <Message>{error}</Message>}
            {product && (
              <section className="my-3">
                <ModalForm
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  title={"Are you sure?"}
                  subject={`Do you really want to delete ${product.name} ???`}
                  message={"Once you delete you won't be able to access it."}
                  onAccept={() => onDelete(product._id)}
                />
                <Row>
                  <Col className="text-center">
                    <Image
                      src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                      fluid
                      rounded
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className="mt-4">
                    <h2 className="text-center">{product.name}</h2>
                    <hr />
                  </Col>
                </Row>
                <Row>
                  <Col md={8} className="mb-3 mx-auto">
                    <ListGroup>
                      <ListGroup.Item>
                        <Row>
                          <Col>Name</Col>
                          <Col className="text-end">{product.name}</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Description</Col>
                          <Col className="text-end">{product.description}</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Price</Col>
                          <Col className="text-end">₹ {product.price}/-</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Quantity</Col>
                          <Col className="text-end">{product.quantity}</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Last Modified</Col>
                          <Col className="text-end">{product.updatedAt}</Col>
                        </Row>
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="mx-auto">
                    <LinkContainer
                      to={`/sellers/manage/products/${product._id}/edit`}
                    >
                      <Button className="w-100">Edit</Button>
                    </LinkContainer>
                  </Col>
                  <Col className="mx-auto">
                    <Button
                      variant="danger"
                      className="w-100"
                      onClick={() => setModalShow(true)}
                    >
                      Delete
                    </Button>
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

export default ProductDetailPage;
