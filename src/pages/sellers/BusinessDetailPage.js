import React, { useEffect } from "react";

import { Container, Row, Col, Card } from "react-bootstrap";
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
          <Col md={6} className="mx-auto">
            {loading && <Loader />}
            {error && <Message variant="danger">{error}</Message>}
            {business && (
              <Card>
                <h1>{business.name}</h1>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default BusinessDetailPage;
