import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  FormControl,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getAddresses } from "../../actions/addressActions";
import { saveShippingAddress } from "../../actions/cartActions";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";

const ShippingPage = ({ history }) => {
  const [address, setAddresss] = useState(null);

  const { userInfo } = useSelector((state) => state.userLogin);
  const { user } = userInfo;

  const { loading, addresses, error } = useSelector(
    (state) => state.getAddresses
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAddresses(user._id));
  }, []);

  useEffect(() => {
    if (addresses && addresses.length > 0) {
      setAddresss(JSON.stringify(addresses[0]));
    }
  }, [addresses]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress(address));
    history.push("/checkout/payment");
  };

  return (
    <main className="mt-4">
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            <h2>Select Shipping Address</h2>
            <hr />
            <section>
              {loading && <Loader />}
              {error && <Message variant="danger">{error}</Message>}
              <section>
                {addresses && addresses.length === 0 && (
                  <Message>No Address Available</Message>
                )}

                {addresses && addresses.length > 0 && (
                  <Form onSubmit={handleSubmit}>
                    <FormGroup className="mb-3">
                      <FormControl
                        as="select"
                        value={address}
                        onChange={(e) => setAddresss(e.target.value)}
                      >
                        {addresses.map((address) => {
                          return (
                            <option value={JSON.stringify(address)}>
                              {address.fullName}, {address.city} ,
                              {address.pincode}, {address.state}
                            </option>
                          );
                        })}
                      </FormControl>
                    </FormGroup>
                    <FormGroup className="mb-3">
                      <Button type="submit" className="w-100">
                        Next
                      </Button>
                    </FormGroup>
                  </Form>
                )}
              </section>
            </section>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default ShippingPage;
