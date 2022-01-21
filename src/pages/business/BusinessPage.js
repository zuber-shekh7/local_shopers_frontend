import React, { useEffect } from "react";

import { Container, Row, Col, ListGroup, Image, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { getBusiness } from "../../actions/businessActions";
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
                      src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
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
                    <CategoryList categories={business.categories} />
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
