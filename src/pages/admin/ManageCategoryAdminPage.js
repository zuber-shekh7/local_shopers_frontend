import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getManageCategory } from "../../actions/adminActions";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";
import AdminCategoryList from "./AdminCategoryList";

const ManageCategoryAdminPage = () => {
  const dispatch = useDispatch();
  const { error, loading, categoryDetails } = useSelector(
    (state) => state.getManageCategory
  );

  useEffect(() => {
    dispatch(getManageCategory());
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <section className="mt-5">
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader />}
            <h2>Manage Category</h2>
            {categoryDetails && (
              <AdminCategoryList categories={categoryDetails.categoryDetail} />
            )}
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default ManageCategoryAdminPage;
