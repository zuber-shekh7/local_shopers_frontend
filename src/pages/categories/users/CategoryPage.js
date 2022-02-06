import React, { useEffect } from "react";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { getCategory } from "../../../actions/categoryActions";
import ProductList from "../../../components/products/ProductList";

import Loader from "../../../components/shared/Loader";
import Message from "../../../components/shared/Message";

const UserCategoryPage = ({ match }) => {
  const { category_id } = match.params;

  const dispatch = useDispatch();

  const { loading, category, error } = useSelector(
    (state) => state.getCategoryDetails
  );

  useEffect(() => {
    dispatch(getCategory(category_id));
  }, []);

  return (
    <main>
      <Container>
        <Row>
          <Col className="mx-auto" md={8}>
            {loading && <Loader />}
            {error && <Message>{error}</Message>}
            {category && (
              <section className="my-3">
                <Row>
                  <Col className="text-center">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fluid
                      rounded
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className="my-4">
                    <h2 className="text-center">{category.name}</h2>
                    <hr />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <section className="d-flex justify-content-between">
                      <h3>Products</h3>
                    </section>

                    {category.products && category.products.length > 0 ? (
                      <section className="my-3">
                        {category.products.map((product) => {
                          return (
                            <Card key={product._id} className="my-3">
                              <Card.Body>
                                <Row>
                                  <Col md={3}>
                                    <Image
                                      rounded
                                      fluid
                                      src={product.image}
                                      alt={product.name}
                                    />
                                  </Col>
                                  <Col className="my-auto">
                                    <Card.Title as="h3">
                                      {product.name}
                                    </Card.Title>
                                  </Col>
                                  <Col className="my-auto" md={2}>
                                    <LinkContainer
                                      to={`/business/products/${product._id}`}
                                    >
                                      <Button>View more</Button>
                                    </LinkContainer>
                                  </Col>
                                </Row>
                              </Card.Body>
                            </Card>
                          );
                        })}
                      </section>
                    ) : (
                      <section className="text-center">
                        <h2 className="text-muted my-4">
                          No products available
                        </h2>
                      </section>
                    )}
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

export default UserCategoryPage;
