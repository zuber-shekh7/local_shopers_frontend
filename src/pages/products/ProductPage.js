import React, { useState } from "react";
import { useEffect } from "react";

import { Container, Row, Col, Button, Image, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Redirect } from "react-router-dom";
import { deleteProduct, getProduct } from "../../actions/productActions";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";
import ModalForm from "../../components/shared/ModalForm";

const ProductPage = ({ match, history }) => {
  const [modalShow, setModalShow] = useState(false);

  const { product_id } = match.params;

  const {
    error: productError,
    loading: productLoading,
    product,
  } = useSelector((state) => state.getProduct);
  const { error, loading, success } = useSelector(
    (state) => state.deleteProduct
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(product_id));
  }, []);

  const onDelete = (id) => {
    dispatch(deleteProduct(id));
    setModalShow(false);
  };

  if (success) {
    return <Redirect to="/sellers/manage/categories/" />;
  }

  return (
    <main>
      <Container>
        <Row>
          <Col className="mx-auto" md={8}>
            {(loading || productLoading) && <Loader />}
            {(error || productError) && <Message>{error}</Message>}
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

                <Button onClick={() => history.goBack()} className="mb-3">
                  Back
                </Button>

                <Row>
                  <Col className="text-center">
                    <Image src={product.image} fluid rounded />
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

export default ProductPage;
