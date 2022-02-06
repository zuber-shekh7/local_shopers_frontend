import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { savePaymentMethod } from "../../actions/cartActions";

const PaymentMethodPage = ({ history }) => {
  const [paymentMethod, setPaymentMethod] = useState("COD");

  const { shippingAddress } = useSelector((state) => state.cart);

  useEffect(() => {
    if (!shippingAddress) {
      history.push("/checkout/shipping");
    }
  }, []);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/checkout/order-summary");
  };

  return (
    <main className="mt-4">
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            <section>
              <h2>Select payment method</h2>
              <hr />
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <input
                    id="cod"
                    type="radio"
                    name="payment"
                    value="COD"
                    checked
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />{" "}
                  <FormLabel htmlFor="cod">COD (Cash on Delivery)</FormLabel>
                </FormGroup>
                {/* <FormGroup>
                  <input
                    id="upi"
                    type="radio"
                    name="payment"
                    value="UPI"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />{" "}
                  <FormLabel htmlFor="upi">UPI</FormLabel>
                </FormGroup>
                <FormGroup>
                  <input
                    id="debit"
                    type="radio"
                    name="payment"
                    value="DebitCard"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />{" "}
                  <FormLabel htmlFor="debit">Debit Card</FormLabel>
                </FormGroup>
                <FormGroup>
                  <input
                    id="credit"
                    type="radio"
                    name="payment"
                    value="CreditCard"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />{" "}
                  <FormLabel htmlFor="credit">Credit Card</FormLabel>
                </FormGroup> */}
                <FormGroup>
                  <Button type="submit" className="w-100">
                    Next
                  </Button>
                </FormGroup>
              </Form>
            </section>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default PaymentMethodPage;
