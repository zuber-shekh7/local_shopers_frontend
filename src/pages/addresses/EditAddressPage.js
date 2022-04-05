import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { editAddress, getAddress } from "../../actions/addressActions";
import routes from "../../utils/routes";
import Breadcrumb from "../../components/shared/Breadcrumb";
import { Input, Label } from "../../components/forms/inputs";
import { FormGroup } from "../../components/forms/containers";
import { Loader } from "../../components/loaders";
import { Error } from "../../components/messages";
import { Button } from "../../components/buttons";

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
    address: updatedAddress,
    error,
  } = useSelector((state) => state.editAddress);

  const { addressId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAddress(addressId));
  }, [addressId, dispatch]);

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
      return navigate(-1);
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
    return <Navigate to={`${routes.getAddresses}/${addressId}`} />;
  }

  return (
    <main>
      <section className="bg-indigo-600 text-white p-5">
        <div className="container">
          <h1>Edit address</h1>
        </div>
      </section>
      <section className="container max-w-lg">
        <Breadcrumb
          links={[
            {
              name: "your account",
              to: routes.dashboard,
            },
            {
              name: "your addresses",
              to: routes.getAddresses,
            },
            {
              name: "edit address",
              to: `${routes}/${addressId}`,
            },
          ]}
        />

        <div className="card border rounded-lg shadow-lg">
          <form className="flex-1 p-5" onSubmit={handleSubmit}>
            <FormGroup>
              <Label className="block" htmlFor="fullName">
                Full Name
              </Label>
              <Input
                id="fullName"
                className="w-full"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Steve Jobs"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label className="block" htmlFor="mobile">
                Mobile Number
              </Label>
              <Input
                id="mobile"
                className="w-full"
                pattern={"[0-9]{10}"}
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="9876543210"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label className="block" htmlFor="pincode">
                Pincode
              </Label>
              <Input
                id="pincode"
                className="w-full"
                pattern={"[0-9]{6}"}
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                placeholder="123456"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label className="block" htmlFor="flatNo">
                Flat, House no., Building, Company, Apartment
              </Label>
              <Input
                id="flatNo"
                className="w-full"
                type="text"
                value={flatNo}
                onChange={(e) => setFlatNo(e.target.value)}
                placeholder="123, Gokuldham"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label className="block" htmlFor="landmark">
                Landmark
              </Label>
              <Input
                id="landmark"
                className="w-full"
                type="text"
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
                placeholder="Landmark"
              />
            </FormGroup>
            <FormGroup>
              <Label className="block" htmlFor="street">
                Area, Colony, Street, Sector, Village
              </Label>
              <Input
                id="street"
                className="w-full"
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder=""
              />
            </FormGroup>
            <FormGroup>
              <Label className="block" htmlFor="city">
                Town/City
              </Label>
              <Input
                id="city"
                className="w-full"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Valsad"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label className="block" htmlFor="city">
                State / Province / Region
              </Label>
              <Input
                id="city"
                className="w-full"
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="Gujarat"
                required
              />
            </FormGroup>
            <FormGroup>
              <Button className="w-full">Save</Button>
            </FormGroup>
            <FormGroup className="flex justify-center mb-0">
              {loading && <Loader />}
              {error && <Error />}
            </FormGroup>
          </form>
        </div>
      </section>
    </main>
  );
};

export default EditAddressPage;
