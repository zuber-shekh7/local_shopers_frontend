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
import { editBusiness } from "../../actions/businessActions";
import { getBusinessDetails } from "../../actions/sellerActions";
import FormContainer from "../../components/shared/FormContainer";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";
import fetchBusinessCategories from "../../utils/fetchBusinessCategories";

const EditBusinessPage = ({ history }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  const { loading, error, success } = {};

  const { business } = useSelector((state) => state.businessDetails);

  const { business: updatedBusiness } = useSelector(
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
      dispatch(getBusinessDetails());
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name && !description) {
      return;
    }

    if (
      name === business.name &&
      description === business.description &&
      category === business.category
    ) {
      return history.goBack();
    }

    dispatch(editBusiness(name, description, category, business._id));
  };

  if (updatedBusiness) {
    return <Redirect to="/sellers/business" />;
  }

  return (
    <main className="mt-4">
      <h1 className="text-center">Edit Business</h1>
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
