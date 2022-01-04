import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import { getSellerDetails } from "../../actions/sellerActions";
import Loader from "../../components/shared/Loader.js";
import Message from "../../components/shared/Message.js";

const SellerDashboardPage = ({ history }) => {
  const dispatch = useDispatch();

  const { sellerInfo } = useSelector((state) => state.sellerLogin);

  const { error, seller, loading } = useSelector(
    (state) => state.sellerDetails
  );

  useEffect(() => {
    if (!sellerInfo) {
      history.push("sellers/login");
    } else {
      dispatch(getSellerDetails());
    }
  }, [sellerInfo, dispatch, history]);

  return (
    <main className="mt-4">
      <Container>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        {seller && (
          <Row>
            <Col md={8}>
              <h1>Welcome {seller.firstName}</h1>

              {seller.business ? (
                <section className="border-top border-bottom rounded p-4">
                  <h2 className="text-muted">Your Business</h2>
                  <h3 className="text-capitalize">{seller.business.name}</h3>
                  <Button variant="primary">Manage</Button>
                </section>
              ) : (
                <Button>Create a business</Button>
              )}
            </Col>
            <Col md={4}>
              <section className="text-center">
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
                  alt={seller.firstName}
                  fluid
                  thumbnail
                  width="200"
                  height="150"
                />
              </section>
              <section>
                <hr />
                <ListGroup className="mt-4">
                  <ListGroup.Item>
                    First Name: {seller.firstName}
                  </ListGroup.Item>
                  <ListGroup.Item>Last Name: {seller.lastName}</ListGroup.Item>
                  <ListGroup.Item>Email: {seller.email}</ListGroup.Item>
                  <ListGroup.Item>Mobile: {seller.mobile}</ListGroup.Item>
                </ListGroup>
              </section>
            </Col>
          </Row>
        )}
      </Container>
    </main>
  );
};

export default SellerDashboardPage;
