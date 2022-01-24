import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { createAddress } from "../../actions/addressActions";
import FormContainer from "../../components/shared/FormContainer";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";

const AddAddressPage = () => {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [landmark, setLandmark] = useState("");
  const [flatNo, setFlatNo] = useState("");
  const [street, setStreet] = useState("");

  const { userInfo } = useSelector((state) => state.userLogin);

  const { loading, error, address } = useSelector(
    (state) => state.createAddress
  );

  const { user } = userInfo;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !fullName &&
      !pincode &&
      !mobileNumber &&
      !city &&
      !state &&
      !landmark &&
      !flatNo &&
      !street
    ) {
      return;
    }
    dispatch(
      createAddress(
        fullName,
        mobileNumber,
        pincode,
        city,
        state,
        flatNo,
        landmark,
        street,
        user._id
      )
    );
  };

  if (address) {
    return <Redirect to="/users/addresses" />;
  }

  return (
    <main className="mt-4">
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            <section>
              <h2 className="text-center my-3">Add a new address</h2>
              <FormContainer>
                {loading && <Loader />}
                {error && <Message variant="danger">{error}</Message>}
                <Form onSubmit={handleSubmit}>
                  <FormGroup className="mb-3">
                    <FormLabel>Full Name</FormLabel>
                    <FormControl
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Steve Jobs"
                      required
                    />
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <FormLabel>Mobile Number</FormLabel>
                    <FormControl
                      pattern={"[0-9]{10}"}
                      type="text"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      placeholder="9876543210"
                      required
                    />
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <FormLabel>Pincode</FormLabel>
                    <FormControl
                      pattern={"[0-9]{6}"}
                      type="text"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      placeholder="123456"
                      required
                    />
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <FormLabel>
                      Flat, House no., Building, Company, Apartment
                    </FormLabel>
                    <FormControl
                      type="text"
                      value={flatNo}
                      onChange={(e) => setFlatNo(e.target.value)}
                      placeholder="123, Gokuldham"
                      required
                    />
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <FormLabel>Area, Colony, Street, Sector, Village</FormLabel>
                    <FormControl
                      type="text"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      placeholder=""
                    />
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <FormLabel>Landmark</FormLabel>
                    <FormControl
                      type="text"
                      value={landmark}
                      onChange={(e) => setLandmark(e.target.value)}
                      placeholder="Near city bridge"
                    />
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <FormLabel>Town/City</FormLabel>
                    <FormControl
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Valsad"
                      required
                    />
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <FormLabel>State / Province / Region</FormLabel>
                    <FormControl
                      type="text"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      placeholder="Gujarat"
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

export default AddAddressPage;
