import React, { useEffect } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { getBusinessCategories } from "../../actions/businessCategoryActions";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";

const BusinessCategoriesPage = () => {
  const { loading, businessCategories, error } = useSelector(
    (state) => state.getBusinessCategories
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBusinessCategories());
  }, []);

  return (
    <main className="mt-4">
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            <section>
              <h2>Manage Categories</h2>
              <hr />
              {loading && <Loader />}
              {error && <Message variant="danger">{error}</Message>}
              {businessCategories && businessCategories.length > 0 && (
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {businessCategories.map((category, index) => {
                      return (
                        <tr key={category._id}>
                          <td>{index + 1}</td>
                          <td>{category.name}</td>
                          <td>{category.description}</td>
                          <td>
                            <LinkContainer
                              size="sm"
                              className="me-2"
                              to={`/admin/manage/categories/${category._id}`}
                            >
                              <Button>View</Button>
                            </LinkContainer>
                            <LinkContainer
                              size="sm"
                              className="me-2"
                              to={`/admin/manage/categories/${category._id}/edit`}
                            >
                              <Button variant="success">Edit</Button>
                            </LinkContainer>
                            <LinkContainer
                              size="sm"
                              className="me-2"
                              to={`/admin/manage/categories/${category._id}/delete`}
                            >
                              <Button variant="danger">Delete</Button>
                            </LinkContainer>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              )}
            </section>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default BusinessCategoriesPage;
