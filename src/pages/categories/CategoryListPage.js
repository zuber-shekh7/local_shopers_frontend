import React from "react";
import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
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
            <section className="d-flex justify-content-between">
              <LinkContainer to="/sellers/dashboard">
                <Button>Back</Button>
              </LinkContainer>
              <LinkContainer to="categories/new">
                <Button>Add new category</Button>
              </LinkContainer>
            </section>
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
