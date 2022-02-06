import React, { useState } from "react";
import { useEffect } from "react";
import {
  Button,
  Form,
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { editBusiness, getBusiness } from "../../actions/businessActions";
import FormContainer from "../../components/shared/FormContainer";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";
import fetchBusinessCategories from "../../utils/fetchBusinessCategories";

const EditBusinessPage = ({ history }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  const { loading, error, business } = useSelector(
    (state) => state.getBusiness
  );

  const { loading: updateLoading, business: updatedBusiness } = useSelector(
    (state) => state.editBusiness
  );

  useEffect(() => {
    const fetchData = async () => {
      const { categories } = await fetchBusinessCategories();
      setCategories(categories);
      setCategory(categories[0]._id);
    };

    fetchData();

    if (business) {
      setName(business.name);
      setDescription(business.description);
      setCategory(business.category);
    } else {
      dispatch(getBusiness());
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name && !description) {
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("business_category_id", category);

    dispatch(editBusiness(formData, business._id));
  };

  if (updatedBusiness) {
    return <Redirect to="/sellers/business" />;
  }

  return (
    <main className="mt-4">
      <h1 className="text-center">Edit Business</h1>
      <FormContainer>
        {(loading || updateLoading) && <Loader />}
        {error && <Message variant="danger">{error}</Message>}
        <Form onSubmit={handleSubmit}>
          <FormGroup className="mb-3">
            <FormLabel>Name</FormLabel>
            <FormControl
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="My Online Store"
              required
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>Description</FormLabel>
            <FormControl
              as="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="The Best online store ever"
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
            {business && <a href={business.image}>Current Image</a>}
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>Category</FormLabel>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option disabled>Select Business Category</option>

              {categories &&
                categories.length > 0 &&
                categories.map((category) => {
                  return (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  );
                })}
            </Form.Select>
          </FormGroup>
          <Button className="w-100 mb-3" type="submit">
            Save
          </Button>
        </Form>
      </FormContainer>
    </main>
  );
};

export default EditBusinessPage;
