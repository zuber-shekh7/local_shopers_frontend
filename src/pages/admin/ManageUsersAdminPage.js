import React, { useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUsersDetails } from "../../actions/adminActions";
import AdminSellerList from "./AdminSellerList";

const ManageUsersAdminPage = () => {
  const dispatch = useDispatch();
  const { error, loading, usersList } = useSelector(
    (state) => state.getUsersDetails
  );
  useEffect(() => {
    dispatch(getUsersDetails());
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <section className="mt-5">
            <h3>Manage Users</h3>
            {usersList && <AdminSellerList sellerList={usersList.usersList} />}
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default ManageUsersAdminPage;
