import React, { useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { getSellerOrders, getUserOrders } from "../../actions/orderActions";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";

const SellerOrdersPage = () => {
  const {
    sellerInfo: { seller },
  } = useSelector((state) => state.sellerLogin);

  const { loading, orders, error } = useSelector(
    (state) => state.getSellerOrders
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSellerOrders(seller.business));
  }, []);

  return (
    <main className="mt-4">
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            <section>
              <h2>Your orders</h2>
              <hr />
              {loading && <Loader />}
              {error && <Message variant="danger">{error}</Message>}
              {orders && orders.length === 0 && (
                <Message>No Order Available</Message>
              )}
              {orders &&
                orders.length > 0 &&
                orders.map((order) => {
                  return (
                    <Card key={order._id} className="mb-3">
                      <Card.Body>
                        <Row>
                          <Col md={10}>
                            <p className="lead text-uppercase">
                              ORDER | {order._id} | {order.createdAt}
                            </p>
                            {order.orderItems && (
                              <h5>Total {order.orderItems.length} items</h5>
                            )}
                            <h4>₹ {order.totalPrice}/-</h4>
                            <p className="lead">{order.status}</p>
                          </Col>
                          <Col className="my-auto">
                            <LinkContainer to={`/manage/orders/${order._id}`}>
                              <Button>View more</Button>
                            </LinkContainer>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  );
                })}
            </section>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default SellerOrdersPage;
