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
import { createBusines, getSellerDetails } from "../../actions/sellerActions";
import FormContainer from "../../components/shared/FormContainer";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";

const CreateBusinessPage = ({ history }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const { error, loading, success } = useSelector(
    (state) => state.createBusiness
  );

  const { seller } = useSelector((state) => state.sellerDetails);

  useEffect(() => {
    if (seller && seller.business) {
      history.push("/sellers/business");
    }
  }, [seller, history, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name && !description) {
      return;
    }
    console.log("before dispatch");
    dispatch(createBusines(name, description));
    console.log("after dispatch");
    dispatch(getSellerDetails());
    setName("");
    setDescription("");
  };

  return (
    <main className="mt-4">
      <h1 className="text-center">Create Online Store</h1>
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
          <Button className="w-100 mb-3" type="submit">
            Create
          </Button>
        </Form>
      </FormContainer>
    </main>
  );
};

export default CreateBusinessPage;
