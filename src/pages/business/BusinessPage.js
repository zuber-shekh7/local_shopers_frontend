import React, { useEffect } from "react";

import {
  Container,
  Row,
  Col,
  ListGroup,
  Image,
  Button,
  Card,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { getBusiness } from "../../actions/businessActions";
import { saveBusiness } from "../../actions/cartActions";
import CategoryList from "../../components/categories/CategoryList";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";

const BusinessPage = ({ match }) => {
  const dispatch = useDispatch();

  const { business, loading, error } = useSelector(
    (state) => state.getBusiness
  );

  const { business_id } = match.params;

  useEffect(() => {
    dispatch(getBusiness(business_id));
    dispatch(saveBusiness(business_id));
  }, []);

  return (
    <main className="mt-4">
      <Container>
        <Row>
          <Col md={8} className="mx-auto mb-3">
            {loading && <Loader />}
            {error && <Message variant="danger">{error}</Message>}
            {business && (
              <section>
                <Row>
                  <Col className="text-center">
                    <Image
                      src={business.image}
                      alt={business.name}
                      fluid
                      rounded
                    />
                    <h1 className="my-3">{business.name}</h1>
                    <p className="my-3 lead">{business.description}</p>
                    <hr />
                  </Col>
                </Row>
                <Row>
                  <Col md={10} className="mx-auto">
                    <ListGroup>
                      <ListGroup.Item>
                        <Row>
                          <Col>Business Name</Col>
                          <Col className="text-end">{business.name}</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Description</Col>
                          <Col className="text-end">{business.description}</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Business Category</Col>
                          <Col className="text-end">
                            {business.category.name}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col>
                    <section className="text-center">
                      <hr />
                      <h2 className="text-start">Categories</h2>
                      <hr />
                    </section>{" "}
                    {business.categories && business.categories.length > 0 ? (
                      <section className="my-3">
                        {business.categories.map((category) => {
                          return (
                            <Card key={category._id} className="my-3">
                              <Card.Body>
                                <Row>
                                  <Col md={3}>
                                    <Image
                                      rounded
                                      fluid
                                      src={category.image}
                                      alt={category.name}
                                    />
                                  </Col>
                                  <Col className="my-auto">
                                    <Card.Title as="h3">
                                      {category.name}
                                    </Card.Title>
                                  </Col>
                                  <Col className="my-auto" md={2}>
                                    <LinkContainer
                                      to={`/business/${business._id}/categories/${category._id}`}
                                    >
                                      <Button>Explore</Button>
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
                        <h2 className="text-muted my-3">
                          No Categories added Yet
                        </h2>
                        <LinkContainer to="categories/new">
                          <Button>Add new category</Button>
                        </LinkContainer>
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

export default BusinessPage;
