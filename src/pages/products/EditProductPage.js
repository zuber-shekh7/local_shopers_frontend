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
import { editProduct, getProduct } from "../../actions/productActions";
import FormContainer from "../../components/shared/FormContainer";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";

const EditProductPage = ({ history, match }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState(null);

  const { product_id } = match.params;

  const dispatch = useDispatch();

  const {
    error,
    loading,
    product: updatedProduct,
  } = useSelector((state) => state.editProduct);

  const { product } = useSelector((state) => state.getProduct);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setQuantity(product.quantity);
    } else {
      dispatch(getProduct(product_id));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !price) {
      return;
    }

    if (
      name === product.name &&
      description === product.description &&
      price === product.price &&
      quantity === product.quantity &&
      !image
    ) {
      return history.goBack();
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("image", image);

    dispatch(editProduct(formData, product_id));
  };

  if (updatedProduct) {
    return <Redirect to={`/sellers/manage/products/${product._id}`} />;
  }

  return (
    <main className="mt-3">
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            <section>
              <h2 className="text-center my-3">Edit product</h2>

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
                      placeholder="iPhone 13"
                      required
                    />
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <FormLabel>Description</FormLabel>
                    <FormControl
                      type="text"
                      as="textarea"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Best iPhone Ever"
                      required
                    />
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <FormLabel>Price</FormLabel>
                    <FormControl
                      min={0}
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="90000"
                      required
                    />
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <FormLabel>Quantity</FormLabel>
                    <FormControl
                      min={0}
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="5"
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
                    {product && <a href={product.image}>Current Image</a>}
                  </FormGroup>
                  <Button className="w-100 mb-3" type="submit">
                    Save
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => history.goBack()}
                    className="w-100 mb-3"
                  >
                    Cancel
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

export default EditProductPage;
