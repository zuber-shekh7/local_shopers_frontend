import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Redirect } from "react-router-dom";
import { deleteCategory, getCategory } from "../../actions/categoryActions";
import ProductList from "../../components/products/ProductList";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";
import ModalForm from "../../components/shared/ModalForm";

const CategoryDetailPage = ({ match }) => {
  const [modalShow, setModalShow] = useState(false);

  const { category_id } = match.params;

  const dispatch = useDispatch();

  const { category } = useSelector((state) => state.getCategoryDetails);

  const { error, loading, success } = useSelector(
    (state) => state.deleteCategory
  );

  useEffect(() => {
    dispatch(getCategory(category_id));
  }, []);

  const onDelete = (id) => {
    dispatch(deleteCategory(id));
    setModalShow(false);
  };

  if (success) {
    return <Redirect to="/sellers/manage/categories" />;
  }

  return (
    <main>
      <Container>
        <Row>
          <Col className="mx-auto" md={8}>
            {loading && <Loader />}
            {error && <Message>{error}</Message>}
            {category && (
              <section className="my-3">
                <ModalForm
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  title={"Are you sure?"}
                  subject={`Do you really want to delete ${category.name} ???`}
                  message={"Once you delete you won't be able to access it."}
                  onAccept={() => onDelete(category._id)}
                />
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
                      <LinkContainer
                        to={`/sellers/manage/categories/${category._id}/products/new`}
                      >
                        <Button>Add product</Button>
                      </LinkContainer>
                    </section>

                    {category.products && (
                      <ProductList
                        category={category._id}
                        products={category.products}
                      />
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col className="mx-auto">
                    <LinkContainer
                      to={`/sellers/manage/categories/${category._id}/edit`}
                    >
                      <Button className="w-100">Edit</Button>
                    </LinkContainer>
                  </Col>
                  <Col className="mx-auto">
                    <Button
                      variant="danger"
                      className="w-100"
                      onClick={() => setModalShow(true)}
                    >
                      Delete
                    </Button>
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

export default CategoryDetailPage;
