import React, { useEffect } from "react";
import { Container, Row, Col, ListGroup, Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { getBusinessCategory } from "../../actions/businessCategoryActions";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";

const BusinessCategoryPage = ({ match }) => {
  const { loading, businessCategory, error } = useSelector(
    (state) => state.getBusinessCategory
  );

  const id = match.params.category_id;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBusinessCategory(id));
  }, []);

  return (
    <main className="mt-4">
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            <section>
              {loading && <Loader />}
              {error && <Message variant="danger">{error}</Message>}
              <h2>Edit business category</h2>
            </section>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default BusinessCategoryPage;
