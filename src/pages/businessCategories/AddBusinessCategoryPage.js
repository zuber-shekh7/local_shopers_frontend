import React, { useState } from "react";
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
import FormData from "form-data";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Redirect } from "react-router-dom";
import { createBusinessCategory } from "../../actions/businessCategoryActions";
import FormContainer from "../../components/shared/FormContainer";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";

const AddBusinessCategoryPage = () => {
  const formData = new FormData();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const { loading, businessCategory, error } = useSelector(
    (state) => state.createBusinessCategory
  );

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name && !description) {
      return;
    }
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);
    dispatch(createBusinessCategory(formData));
  };

  if (businessCategory) {
    return (
      <Redirect to={`/manage/business-categories/${businessCategory._id}`} />
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
                {loading && <Loader />}
                {error && <Message variant="danger">{error}</Message>}
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
                  <FormGroup className="mb-3">
                    <FormLabel>Image</FormLabel>
                    <FormControl
                      type="file"
                      accept="image/jpeg"
                      placeholder="Upload image"
                      onChange={(e) => setImage(e.target.files[0])}
                      required
                    />
                  </FormGroup>
                  <Button className="w-100 mb-3" type="submit">
                    Save
                  </Button>
                  <LinkContainer to="/manage/business-categories">
                    <Button variant="danger" className="w-100 mb-3">
                      Cancel
                    </Button>
                  </LinkContainer>
                </Form>
              </FormContainer>
            </section>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default AddBusinessCategoryPage;
