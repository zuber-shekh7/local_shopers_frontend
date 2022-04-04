import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { createAddress } from "../../actions/addressActions";
import routes from "../../utils/routes";
import Breadcrumb from "../../components/shared/Breadcrumb";
import { Input, Label } from "../../components/forms/inputs";
import { FormGroup } from "../../components/forms/containers";
import { Loader } from "../../components/loaders";
import { Error } from "../../components/messages";
import { Button } from "../../components/buttons";

const AddAddressPage = () => {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [landmark, setLandmark] = useState("");
  const [flatNo, setFlatNo] = useState("");
  const [street, setStreet] = useState("");

  const { user } = useSelector((state) => state.userLogin);

  const { loading, address, error } = useSelector(
    (state) => state.createAddress
  );

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
    return <Navigate to={routes.getAddresses} />;
  }

  return (
    <main>
      <section className="bg-indigo-600 text-white p-5">
        <div className="container">
          <h1>
            Add new address<address></address>
          </h1>
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
              name: "new address",
              to: routes.addAddress,
            },
          ]}
        />

        <div className="card border shadow-lg rounded-lg">
          <form className="flex-1 px-5 py-5" onSubmit={handleSubmit}>
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
              <Label className="block" htmlFor="street">
                Landmark
              </Label>
              <Input
                id="street"
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
                placeholder="Area"
                required
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

export default AddAddressPage;
