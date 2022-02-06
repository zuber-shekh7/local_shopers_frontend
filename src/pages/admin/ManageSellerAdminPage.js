import React, { useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSellerDetails } from "../../actions/adminActions";
import AdminSharedLayout from "../../components/shared/AdminSharedLayout";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";
import AdminSellerList from "./AdminSellerList";

const ManageSellerAdminPage = () => {
  const dispatch = useDispatch();
  const { error, loading, sellerList } = useSelector(
    (state) => state.getSellerDetails
  );
  useEffect(() => {
    dispatch(getSellerDetails());
  }, []);

  return (
    <AdminSharedLayout>
      <main className="mt-4">
        <Row>
          <Col md={10} className="mx-auto">
            <h2>Manage Sellers</h2>
            <hr />
            {loading && <Loader />}
            {error && <Message variant="danger">{error}</Message>}
            {sellerList && (
              <section>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sellerList &&
                      sellerList.length > 0 &&
                      sellerList.map((seller, index) => {
                        return (
                          <tr key={seller._id}>
                            <td>{index + 1}</td>
                            <td>{seller.firstName}</td>
                            <td>{seller.lastName}</td>
                            <td>{seller.email}</td>
                            <td>{seller.mobile}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </Table>
              </section>
            )}
          </Col>
        </Row>
      </main>
    </AdminSharedLayout>
  );
};

export default ManageSellerAdminPage;
