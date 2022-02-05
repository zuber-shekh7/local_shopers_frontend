import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import LinkCard from "../../components/shared/LinkCard";
import { LinkContainer } from "react-router-bootstrap";
import { getSeller } from "../../actions/sellerActions";

const SellerDashboardPage = ({ history }) => {
  const dispatch = useDispatch();

  const { sellerInfo } = useSelector((state) => state.sellerLogin);
  const { seller } = useSelector((state) => state.getSeller);

  useEffect(() => {
    if (!sellerInfo) {
      history.push("/sellers/login");
    } else {
      dispatch(getSeller());
    }
  }, [sellerInfo, dispatch, history]);

  return (
    <main className="mt-4">
      <Container>
        {seller && (
          <Row>
            <Col md={8} className="mx-auto">
              <h1>Your Account</h1>
              <section className="mt-3">
                <Row>
                  {seller.business ? (
                    <>
                      <Row>
                        <Col md={6}>
                          <LinkCard
                            title="Manage Orders"
                            text="Track or buy things again"
                            link="/manage/orders"
                          />
                        </Col>
                        <Col md={6}>
                          <LinkCard
                            title="Manage Business"
                            text="Edit name, email or mobile number"
                            link="/sellers/business/"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <LinkCard
                            title="Manage Categories"
                            text="Edit addresses for orders"
                            link="/sellers/manage/categories"
                          />
                        </Col>
                        <Col md={6}>
                          <LinkCard
                            title="Manage Products"
                            text="Explore wishlist or buy things"
                            link="/sellers/products"
                          />
                        </Col>
                      </Row>
                    </>
                  ) : (
                    <Col md={12}>
                      <Card>
                        <Card.Body>
                          <Card.Title as="h2">Start selling online</Card.Title>
                          <Card.Text as="h4" className="text-muted my-3">
                            What are you waiting for ? You can setup your online
                            store within 10 minutes
                          </Card.Text>
                          <LinkContainer to="/sellers/business/new">
                            <Button className="btn-lg">
                              Create your online store
                            </Button>
                          </LinkContainer>
                        </Card.Body>
                      </Card>
                    </Col>
                  )}
                </Row>
              </section>
            </Col>
          </Row>
        )}
      </Container>
    </main>
  );
};

export default SellerDashboardPage;
