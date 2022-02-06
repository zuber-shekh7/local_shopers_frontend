import React, { useState, useEffect } from "react";
import FormData from "form-data";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { editCategory, getCategory } from "../../actions/categoryActions";
import FormContainer from "../../components/shared/FormContainer";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";
import { LinkContainer } from "react-router-bootstrap";

const EditCategoryPage = ({ history, match }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const { category_id } = match.params;

  const dispatch = useDispatch();

  const {
    error,
    loading,
    category: updatedCategory,
  } = useSelector((state) => state.editCategory);

  const { category } = useSelector((state) => state.getCategoryDetails);

  useEffect(() => {
    if (category) {
      setName(category.name);
    } else {
      dispatch(getCategory(category_id));
    }
  }, []);

  if (updatedCategory) {
    return <Redirect to={`/sellers/manage/categories/${category._id}`} />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || name === "") {
      return;
    }

    if (name === category.name && !image) {
      return history.goBack();
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);

    dispatch(editCategory(formData, category._id));
  };

  return (
    <main className="mt-3">
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            <section>
              <h2 className="text-center my-3">Edit Category</h2>

              <FormContainer>
                {loading && <Loader />}
                {error && <Message variant="danger">{error}</Message>}
                <Form onSubmit={handleSubmit}>
                  <FormGroup className="mb-3">
                    <FormLabel>Category Name</FormLabel>
                    <FormControl
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g Apple iPhones"
                      required
                    />
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <FormLabel>Image</FormLabel>
                    <FormControl
                      type="file"
                      onChange={(e) => setImage(e.target.files[0])}
                      placeholder="Upload image"
                      accept="image/jpeg"
                    />
                    {category && <a href={category.image}>Current Image</a>}
                  </FormGroup>
                  <Button className="w-100 mb-3" type="submit">
                    Save
                  </Button>
                  <LinkContainer
                    to={`/sellers/manage/categories/${category_id}`}
                  >
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

export default EditCategoryPage;
