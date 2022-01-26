import React, { useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSellerDetails } from "../../actions/adminActions";
import AdminSellerList from "./AdminSellerList";

const ManageSellerAdminPage = () => {
  const dispatch = useDispatch();
  const { error, loading, sellersList } = useSelector(
    (state) => state.getSellerDetails
  );
  useEffect(() => {
    dispatch(getSellerDetails());
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <section className="mt-5">
            <h3>Manage Sellers</h3>

            {sellersList && (
              <AdminSellerList sellerList={sellersList.sellerList} />
            )}
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default ManageSellerAdminPage;
