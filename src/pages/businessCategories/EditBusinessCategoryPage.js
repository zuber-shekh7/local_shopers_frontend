import React, { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Button,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  editBusinessCategory,
  getBusinessCategory,
} from "../../actions/businessCategoryActions";
import FormContainer from "../../components/shared/FormContainer";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";

const EditBusinessCategoryPage = ({ match, history }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const { loading, businessCategory, error } = useSelector(
    (state) => state.getBusinessCategory
  );

  const {
    updateLoading,
    businessCategory: updatedBusinessCategory,
    updateError,
  } = useSelector((state) => state.editBusinessCategory);

  const category_id = match.params.category_id;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBusinessCategory(category_id));
  }, []);

  useEffect(() => {
    if (businessCategory) {
      setName(businessCategory.name);
      setDescription(businessCategory.description);
    }
  }, [businessCategory]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name && !description) {
      return;
    }

    if (
      name === businessCategory.name &&
      description === businessCategory.description
    ) {
      return history.goBack();
    }

    dispatch(editBusinessCategory(name, description, category_id));
  };

  if (updatedBusinessCategory) {
    return (
      <Redirect
        to={`/admin/manage/categories/${updatedBusinessCategory._id}`}
      />
    );
  }

  return (
    <main className="mt-4">
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            <section>
              <h2 className="text-center my-3">Add a new category</h2>
              <FormContainer>
                {updateLoading || (loading && <Loader />)}
                {updateError ||
                  (error && (
                    <Message variant="danger">{updateError || error}</Message>
                  ))}
                <Form onSubmit={handleSubmit}>
                  <FormGroup className="mb-3">
                    <FormLabel>Name</FormLabel>
                    <FormControl
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Category name"
                      required
                    />
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <FormLabel>Description</FormLabel>
                    <FormControl
                      as="textarea"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Add description here"
                      required
                    />
                  </FormGroup>
                  <Button className="w-100 mb-3" type="submit">
                    Save
                  </Button>
                </Form>
              </FormContainer>
            </section>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default EditBusinessCategoryPage;
