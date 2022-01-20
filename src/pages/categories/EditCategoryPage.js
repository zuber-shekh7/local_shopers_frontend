import React, { useState, useEffect } from "react";
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

const EditCategoryPage = ({ history, match }) => {
  const [name, setName] = useState("");

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

    if (name === category.name) {
      return history.goBack();
    }

    dispatch(editCategory(name, category._id));
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

export default EditCategoryPage;
