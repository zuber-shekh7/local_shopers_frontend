import React, { useEffect } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getCategory } from "../../../actions/categoryActions";
import ProductList from "../../../components/products/ProductList";
import Loader from "../../../components/shared/Loader";
import Message from "../../../components/shared/Message";

const UserCategoryPage = ({ match }) => {
  const { category_id } = match.params;

  const dispatch = useDispatch();

  const { loading, category, error } = useSelector(
    (state) => state.getCategoryDetails
  );

  useEffect(() => {
    dispatch(getCategory(category_id));
  }, []);

  return (
    <main>
      <Container>
        <Row>
          <Col className="mx-auto" md={8}>
            {loading && <Loader />}
            {error && <Message>{error}</Message>}
            {category && (
              <section className="my-3">
                <Row>
                  <Col className="text-center">
                    <Image
                      src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                      fluid
                      rounded
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className="my-4">
                    <h2 className="text-center">{category.name}</h2>
                    <hr />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <section className="d-flex justify-content-between">
                      <h3>Products</h3>
                    </section>

                    {category.products && (
                      <ProductList
                        category={category._id}
                        products={category.products}
                      />
                    )}
                  </Col>
                </Row>
              </section>
            )}
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default UserCategoryPage;
