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
import { editAddress, getAddress } from "../../actions/addressActions";
import FormContainer from "../../components/shared/FormContainer";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";

const EditAddressPage = ({ match, history }) => {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [landmark, setLandmark] = useState("");
  const [flatNo, setFlatNo] = useState("");
  const [street, setStreet] = useState("");

  const { address } = useSelector((state) => state.getAddress);
  const {
    loading,
    error,
    address: updatedAddress,
  } = useSelector((state) => state.editAddress);

  const { address_id } = match.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAddress(address_id));
  }, []);

  useEffect(() => {
    if (address) {
      setFullName(address.fullName);
      setMobileNumber(address.mobileNumber);
      setPincode(address.pincode);
      setCity(address.city);
      setState(address.state);
      setLandmark(address.landmark);
      setFlatNo(address.flatNo);
      setStreet(address.street);
    }
  }, [address]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      fullName === address.fullName &&
      pincode === address.pincode &&
      mobileNumber === address.mobileNumber &&
      city === address.city &&
      state === address.state &&
      landmark === address.landmark &&
      flatNo === address.landmark &&
      street === address.street
    ) {
      return history.goBack();
    }

    dispatch(
      editAddress(
        fullName,
        mobileNumber,
        pincode,
        city,
        state,
        flatNo,
        landmark,
        street,
        address._id
      )
    );
  };

  if (updatedAddress) {
    return <Redirect to={`/users/addresses/${address_id}`} />;
  }

  return (
    <main className="mt-4">
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            <section>
              <h2 className="text-center my-3">Edit address</h2>
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

export default EditAddressPage;
