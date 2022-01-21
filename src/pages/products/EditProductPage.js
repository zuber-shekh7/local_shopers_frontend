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
import { editProduct, getProduct } from "../../actions/productActions";
import FormContainer from "../../components/shared/FormContainer";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";

const EditProductPage = ({ history, match }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(0);

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
      quantity === product.quantity
    ) {
      return history.goBack();
    }

    dispatch(editProduct(name, description, price, quantity, product_id));
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
              <h2 className="text-center my-3">Edit Product</h2>

              <FormContainer>
                {loading && <Loader />}
                {error && <Message variant="danger">{error}</Message>}
                <Form onSubmit={handleSubmit}>
                  <FormGroup className="mb-3">
                    <FormLabel>Product Name</FormLabel>
                    <FormControl
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="iPhone 13"
                      required
                    />
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <FormLabel>Product Description</FormLabel>
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
                    <FormLabel>Product Price</FormLabel>
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
                    <FormLabel>Product Quantity</FormLabel>
                    <FormControl
                      min={0}
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="5"
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

export default EditProductPage;
