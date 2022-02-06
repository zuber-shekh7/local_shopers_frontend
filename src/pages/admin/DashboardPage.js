import React, { useEffect } from "react";
import { Container, Row, Col, ListGroup, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { getCummulativeStats } from "../../actions/adminActions";
import AdminSharedLayout from "../../components/shared/AdminSharedLayout";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";

const AdminDashboardPage = ({ history }) => {
  const { adminInfo } = useSelector((state) => state.adminLogin);
  const { error, loading, stats } = useSelector(
    (state) => state.getCummulativeStats
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCummulativeStats());
  }, []);

  return (
    <AdminSharedLayout>
      <main className="mt-4">
        <Row>
          <Col md={10} className="mx-auto">
            <section>
              <h1>Welcome {adminInfo.user.firstName}</h1>
              <h5 className="text-muted">{adminInfo.user.email}</h5>
            </section>
            <section className="mt-4">
              <h2>Statistics</h2>
              <hr />
              {loading && <Loader />}
              {error && <Message variant="danger">{error}</Message>}
              {stats && (
                <section>
                  <Row>
                    <Col>
                      <section className="text-center">
                        <h1 className="text-primary">
                          {stats.totalItems.totalCustomers}
                        </h1>
                        <h5>Total Orders</h5>
                      </section>
                    </Col>
                    <Col>
                      <section className="text-center">
                        <h1 className="text-success">
                          {stats.totalItems.totalCustomers}
                        </h1>
                        <h5>Total Customers</h5>
                      </section>
                    </Col>
                    <Col>
                      <section className="text-center">
                        <h1 className="text-warning">
                          {stats.totalItems.totalSellers}
                        </h1>
                        <h5>Total Sellers</h5>
                      </section>
                    </Col>
                    <Col>
                      <section className="text-center">
                        <h1 className="text-info">
                          {stats.totalItems.totalProducts}
                        </h1>
                        <h5>Total Sellers</h5>
                      </section>
                    </Col>
                  </Row>
                </section>
              )}
            </section>
          </Col>
        </Row>
      </main>
    </AdminSharedLayout>
  );
};

export default AdminDashboardPage;
