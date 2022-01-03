import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { List } from "css-tree";

const SellerDashboardPage = ({ history }) => {
  const { error, sellerInfo, loading } = useSelector(
    (state) => state.sellerLogin
  );

  useEffect(() => {
    if (!sellerInfo) {
      history.push("sellers/login");
    }
  }, []);

  return (
    <main className="mt-4">
      <Container>
        <Row>
          <Col md={8}>
            <h1>Welcome {sellerInfo.seller.firstName}</h1>
          </Col>
          <Col md={4}>
            <section>
              <ListGroup>
                <ListGroup.Item>
                  First Name: {sellerInfo.seller.firstName}
                </ListGroup.Item>
                <ListGroup.Item>
                  Last Name: {sellerInfo.seller.lastName}
                </ListGroup.Item>
                <ListGroup.Item>
                  Email: {sellerInfo.seller.email}
                </ListGroup.Item>
                <ListGroup.Item>
                  Mobile: {sellerInfo.seller.mobile}
                </ListGroup.Item>
              </ListGroup>
            </section>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default SellerDashboardPage;
