import React, { useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getBusinessCategoryList } from "../../actions/adminActions";
import AdminCategoryList from "./AdminCategoryList";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";

const ManageBusinessCategoryPage = () => {
  const dispatch = useDispatch();

  const { error, loading, businessCategoryList } = useSelector(
    (state) => state.getBusinessCategoryList
  );

  useEffect(() => {
    dispatch(getBusinessCategoryList());
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <section className="mt-5">
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader />}
            <h3>Manage Business Category</h3>
            {businessCategoryList && (
              <AdminCategoryList
                categories={businessCategoryList.businessCategory}
              />
            )}
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default ManageBusinessCategoryPage;
