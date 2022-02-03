import React, { useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";
import { getAdminProductList } from "../../actions/adminActions.js";
import AdminProductList from "./AdminProductList";

const ManageProductAdminPage = ({ match }) => {
  const { category_id } = match.params;
  const dispatch = useDispatch();
  const { error, loading, productList } = useSelector(
    (state) => state.getAdminProductList
  );

  useEffect(() => {
    dispatch(getAdminProductList(category_id));
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          <section className="mt-5">
            {loading && <Loader />}
            {error && <Message variant="danger">{error}</Message>}
            <h3>Manage Products</h3>

            {productList && (
              <AdminProductList
                products={productList.productDetails.products}
              />
            )}
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default ManageProductAdminPage;
