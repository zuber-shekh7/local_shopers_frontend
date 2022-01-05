import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import LinkCard from "../../components/shared/LinkCard";

const UserDashboardPage = ({ history }) => {
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (!userInfo) {
      history.push("/users/login");
    }
  }, [userInfo, history]);

  return (
    <main className="mt-4">
      <Container>
        {userInfo && (
          <Row>
            <Col md={8} className="mx-auto">
              <h1>Your Account</h1>
              <section className="mt-3">
                <Row>
                  <Col md={6}>
                    <LinkCard
                      title="Your Orders"
                      text="Track or buy things again"
                      link="/users/orders"
                    />
                  </Col>
                  <Col md={6}>
                    <LinkCard
                      title="Your Profile"
                      text="Edit name, email or mobile number"
                      link="/users/profile/"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <LinkCard
                      title="Your Addresses"
                      text="Edit addresses for orders"
                      link="/users/addresses"
                    />
                  </Col>
                  <Col md={6}>
                    <LinkCard
                      title="Your Wishlist"
                      text="Explore wishlist or buy things"
                      link="/users/wishlist"
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

export default UserDashboardPage;
