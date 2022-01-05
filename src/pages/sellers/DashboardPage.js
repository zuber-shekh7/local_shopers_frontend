import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import LinkCard from "../../components/shared/LinkCard";

const SellerDashboardPage = ({ history }) => {
  const { sellerInfo } = useSelector((state) => state.sellerLogin);

  useEffect(() => {
    if (!sellerInfo) {
      history.push("/sellers/login");
    }
  }, [sellerInfo, history]);

  return (
    <main className="mt-4">
      <Container>
        {sellerInfo && (
          <Row>
            <Col md={8} className="mx-auto">
              <h1>Your Account</h1>
              <section className="mt-3">
                <Row>
                  <Col md={6}>
                    <LinkCard
                      title="Manage Orders"
                      text="Track or buy things again"
                      link="/sellers/orders"
                    />
                  </Col>
                  <Col md={6}>
                    <LinkCard
                      title="Your Profile"
                      text="Edit name, email or mobile number"
                      link="/sellers/profile/"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <LinkCard
                      title="Manage Categories"
                      text="Edit addresses for orders"
                      link="/sellers/categories"
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
              </section>
            </Col>
          </Row>
        )}
      </Container>
    </main>
  );
};

export default SellerDashboardPage;
