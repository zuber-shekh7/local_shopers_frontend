import React, { useEffect } from "react";

import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
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
              <>
                <Image
                  src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt={business.name}
                  fluid
                  rounded
                />
                <h1 className="text-center my-3">{business.name}</h1>
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
              </>
            )}
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default BusinessDetailPage;
