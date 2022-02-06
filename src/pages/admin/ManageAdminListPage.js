import React, { useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAdminList } from "../../actions/adminActions";
import AdminSharedLayout from "../../components/shared/AdminSharedLayout";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";
import AdminSellerList from "./AdminSellerList";

const ManageAdminListPage = () => {
  const dispatch = useDispatch();
  const { error, loading, users } = useSelector((state) => state.getAdminList);
  useEffect(() => {
    dispatch(getAdminList());
  }, []);

  return (
    <AdminSharedLayout>
      <main className="mt-4">
        <Row>
          <Col md={10} className="mx-auto">
            <section>
              {loading && <Loader />}
              {error && <Message variant="danger">{error}</Message>}
              <h3>Manage Admin</h3>
              <hr />
              {users && (
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
                      {users &&
                        users.length > 0 &&
                        users.map((user, index) => {
                          return (
                            <tr>
                              <td>{index + 1}</td>
                              <td>{user.firstName}</td>
                              <td>{user.lastName}</td>
                              <td>{user.email}</td>
                              <td>{user.mobile}</td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </Table>
                </section>
              )}
            </section>
          </Col>
        </Row>
      </main>
    </AdminSharedLayout>
  );
};

export default ManageAdminListPage;
