import React, { useEffect } from "react";

import { Container, Row, Col, ListGroup, Image, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import {
  getBusinessDetails,
  getSellerDetails,
} from "../../actions/sellerActions";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";

const BusinessDetailPage = ({ history }) => {
  const dispatch = useDispatch();

  const { seller } = useSelector((state) => state.sellerDetails);

  const { business, loading, error } = useSelector(
    (state) => state.businessDetails
  );

  useEffect(() => {
    if (!seller.business) {
      history.push("/sellers/dashboard");
    } else {
      dispatch(getBusinessDetails());
    }
  }, []);

  return (
    <main className="mt-4">
      <Container>
        <Row>
          <Col md={6} className="mx-auto mb-3">
            {loading && <Loader />}
            {error && <Message variant="danger">{error}</Message>}
            {business && (
              <section>
                <Row>
                  <Col>
                    <Image
                      src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt={business.name}
                      fluid
                      rounded
                    />
                    <h1 className="text-center my-3">{business.name}</h1>
                  </Col>
                </Row>
                <Row>
                  <Col>
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
                          <Col className="text-end">{business.category}</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Last Modified</Col>
                          <Col className="text-end">{business.updatedAt}</Col>
                        </Row>
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
                <section className="d-flex justify-content-between my-3">
                  <LinkContainer
                    to={`/sellers/manage/business/${business._id}/edit`}
                  >
                    <Button className="w-100">Edit</Button>
                  </LinkContainer>
                </section>
              </section>
            )}
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default BusinessDetailPage;
