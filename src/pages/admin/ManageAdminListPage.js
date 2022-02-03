import React, { useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAdminList } from "../../actions/adminActions";
import AdminSellerList from "./AdminSellerList";

const ManageAdminListPage = () => {
  const dispatch = useDispatch();
  const { error, loading, adminList } = useSelector(
    (state) => state.getAdminList
  );
  useEffect(() => {
    dispatch(getAdminList());
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <section className="mt-5">
            <h3>Manage Admin</h3>
            {adminList && <AdminSellerList sellerList={adminList.usersList} />}
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default ManageAdminListPage;
