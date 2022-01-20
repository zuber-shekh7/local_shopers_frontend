import React from "react";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../actions/categoryActions";
import CategoryList from "../../components/categories/CategoryList";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";

const CategoryListPage = () => {
  const dispatch = useDispatch();

  const { categories, error, loading } = useSelector(
    (state) => state.getCategories
  );

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <main className="my-3">
      <Container>
        <Row>
          <Col className="mx-auto" md={8}>
            <h1 className="text-center">Manage Categories</h1>
            {loading && <Loader />}
            {error && <Message variant="danger">{error}</Message>}

            {categories && <CategoryList categories={categories} />}
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default CategoryListPage;
