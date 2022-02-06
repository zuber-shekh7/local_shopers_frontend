import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Image,
  Button,
  Table,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Redirect } from "react-router-dom";
import {
  deleteBusinessCategory,
  getBusinessCategory,
} from "../../actions/businessCategoryActions";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";
import ModalForm from "../../components/shared/ModalForm";

const BusinessCategoryPage = ({ match }) => {
  const [modalShow, setModalShow] = useState(false);

  const { loading, businessCategory, error } = useSelector(
    (state) => state.getBusinessCategory
  );

  const { success } = useSelector((state) => state.deleteBusinessCategory);

  const id = match.params.category_id;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBusinessCategory(id));
  }, []);

  const onDelete = (id) => {
    dispatch(deleteBusinessCategory(id));
    setModalShow(false);
  };

  if (success) {
    return <Redirect to={`/manage/business-categories/`} />;
  }

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
                  <ModalForm
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    title={"Are you sure?"}
                    subject={`Do you really want to delete ${businessCategory.name} ???`}
                    message={"Once you delete you won't be able to access it."}
                    onAccept={() => onDelete(businessCategory._id)}
                  />
                  <LinkContainer to="/manage/business-categories">
                    <Button className="mb-3">Back</Button>
                  </LinkContainer>
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
                        <td>Image</td>
                        <td>
                          <Image
                            fluid
                            style={{ height: 50 }}
                            src={businessCategory.image}
                          />
                        </td>
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
                      to={`/manage/business-categories/${businessCategory._id}/edit`}
                    >
                      <Button>Edit</Button>
                    </LinkContainer>
                    <LinkContainer
                      to={`/manage/business-categories/${businessCategory._id}/delete`}
                    >
                      <Button
                        variant="danger"
                        onClick={() => setModalShow(true)}
                      >
                        Delete
                      </Button>
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
