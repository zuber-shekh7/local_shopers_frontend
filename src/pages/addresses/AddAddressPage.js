import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { createAddress } from "../../actions/addressActions";
import routes from "../../utils/routes";
import Breadcrumb from "../../components/shared/Breadcrumb";

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
    <main className="container max-w-lg">
      <section>
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
        <h1>Add new address</h1>
        <hr />
        <div className="flex justify-center bg-gray-50 border rounded-lg shadow-lg">
          <form className="flex-1 px-5 py-5" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block" htmlFor="fullName">
                Full Name
              </label>
              <input
                id="fullName"
                className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Steve Jobs"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block" htmlFor="mobile">
                Mobile Number
              </label>
              <input
                id="mobile"
                className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
                pattern={"[0-9]{10}"}
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="9876543210"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block" htmlFor="pincode">
                Pincode
              </label>
              <input
                id="pincode"
                className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
                pattern={"[0-9]{6}"}
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                placeholder="123456"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block" htmlFor="flatNo">
                Flat, House no., Building, Company, Apartment
              </label>
              <input
                id="flatNo"
                className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
                type="text"
                value={flatNo}
                onChange={(e) => setFlatNo(e.target.value)}
                placeholder="123, Gokuldham"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block" htmlFor="street">
                Landmark
              </label>
              <input
                id="street"
                className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
                type="text"
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
                placeholder="Landmark"
              />
            </div>
            <div className="mb-5">
              <label className="block" htmlFor="street">
                Area, Colony, Street, Sector, Village
              </label>
              <input
                id="street"
                className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder="Area"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block" htmlFor="city">
                Town/City
              </label>
              <input
                id="city"
                className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Valsad"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block" htmlFor="city">
                State / Province / Region
              </label>
              <input
                id="city"
                className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="Gujarat"
                required
              />
            </div>
            <div className="mb-5">
              <button className="w-full bg-indigo-500 text-white rounded-lg py-2 text-lg hover:bg-indigo-400">
                Save
              </button>
            </div>
            <div className="text-center">
              {loading && <p>Creating address...</p>}
              {!loading && error && <p className="text-red-500">{error}</p>}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default AddAddressPage;
