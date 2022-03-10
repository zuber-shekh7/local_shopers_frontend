import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { editAddress, getAddress } from "../../actions/addressActions";
import routes from "../../utils/routes";
import Breadcrumb from "../../components/shared/Breadcrumb";

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
              name: "edit address",
              to: `${routes}/${addressId}`,
            },
          ]}
        />
        <h1>Edit Address</h1>
        <hr />
        <div className="flex justify-center bg-gray-50 border rounded-lg shadow-lg">
          <form className="flex-1 p-5" onSubmit={handleSubmit}>
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
              <label className="block" htmlFor="landmark">
                Landmark
              </label>
              <input
                id="landmark"
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
                placeholder=""
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
              <button className="w-full bg-indigo-600 text-white rounded-lg py-2 text-lg hover:bg-indigo-700">
                Save
              </button>
            </div>
            <div className="text-center">
              {loading && <p>Updating address...</p>}
              {error && !loading && <p className="text-red-500">{error}</p>}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default EditAddressPage;
