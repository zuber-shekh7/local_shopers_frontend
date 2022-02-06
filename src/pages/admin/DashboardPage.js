import React, { useEffect } from "react";
import { Container, Row, Col, ListGroup, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { getCummulativeStats } from "../../actions/adminActions";
import AdminSharedLayout from "../../components/shared/AdminSharedLayout";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";
import AdminRenderLineChart from "./AdminRenderLineChart";

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
      <Row>
        <Col md={10} className="mx-auto">
          <section className="mt-3">
            <h1>Welcome {adminInfo.user.firstName}</h1>
            <h5 className="text-muted">{adminInfo.user.email}</h5>
          </section>
          <section className="mt-5">
            <h2>Statistics</h2>
            {loading && <Loader />}
            {error && <Message variant="dange">{error}</Message>}
            <Row>
              <Col>
                <h5>Total Orders</h5>
              </Col>
              <Col>
                <h5>Total Customers</h5>
              </Col>
              <Col>
                <h5>Total Sellers</h5>
              </Col>
              <Col>
                <h5>Total Products</h5>
              </Col>
            </Row>
            <Row>
              {stats && (
                <>
                  <Col>
                    <h5>{stats.totalItems.totalCustomers}</h5>
                  </Col>
                  <Col>
                    <h5>{stats.totalItems.totalCustomers}</h5>
                  </Col>
                  <Col>
                    <h5> {stats.totalItems.totalProducts}</h5>
                  </Col>
                  <Col>
                    <h5>{stats.totalItems.totalSellers}</h5>
                  </Col>
                </>
              )}
            </Row>
          </section>
        </Col>
      </Row>
    </AdminSharedLayout>
  );
};

export default AdminDashboardPage;
