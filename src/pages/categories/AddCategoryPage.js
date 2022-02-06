import React, { useEffect, useState } from "react";
import FormData from "form-data";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Form,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createCategory } from "../../actions/categoryActions";
import FormContainer from "../../components/shared/FormContainer";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";
import { LinkContainer } from "react-router-bootstrap";

const AddCategoryPage = ({ history }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();

  const { error, loading, category } = useSelector(
    (state) => state.createCategory
  );

  useEffect(() => {
    if (category) {
      history.push(`/sellers/manage/categories`);
    }
  }, [category, history]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || name === "") {
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    dispatch(createCategory(formData));
  };

  return (
    <main className="mt-3">
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            <section>
              <h2 className="text-center my-3">Add new category</h2>
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
                      placeholder="Upload Image"
                      required
                    />
                  </FormGroup>
                  <Button className="w-100 mb-3" type="submit">
                    Save
                  </Button>
                  <LinkContainer to="/sellers/manage/categories">
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

export default AddCategoryPage;
