import React, { useEffect } from "react";
import { Container, Row, Col, ListGroup, Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import {
  getBusinessCategories,
  getBusinessCategory,
} from "../../actions/businessCategoryActions";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";

const BusinessCategoryPage = ({ match }) => {
  const { loading, businessCategory, error } = useSelector(
    (state) => state.getBusinessCategory
  );

  const id = match.params.category_id;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBusinessCategory(id));
  }, []);

  return (
    <main className="mt-4">
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            <section>
              {loading && <Loader />}
              {error && <Message variant="danger">{error}</Message>}
              {businessCategory && (
                <>
                  <h2>{businessCategory.name}</h2>
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>{businessCategory.name}</td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td>{businessCategory.description}</td>
                      </tr>
                      <tr>
                        <td>Created at</td>
                        <td>{businessCategory.createdAt}</td>
                      </tr>
                      <tr>
                        <td>Updated at</td>
                        <td>{businessCategory.updatedAt}</td>
                      </tr>
                    </tbody>
                  </Table>
                  <section className="d-flex justify-content-center">
                    <LinkContainer
                      className="me-2"
                      to={`/admin/manage/categories/${businessCategory._id}/edit`}
                    >
                      <Button>Edit</Button>
                    </LinkContainer>
                    <LinkContainer
                      to={`/admin/manage/categories/${businessCategory._id}/delete`}
                    >
                      <Button variant="danger">Delete</Button>
                    </LinkContainer>
                  </section>
                </>
              )}
            </section>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default BusinessCategoryPage;
