import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HiOutlineArrowSmLeft, HiOutlineX } from "react-icons/hi";
import { Link, Redirect } from "react-router-dom";
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
    error,
    address: updatedAddress,
  } = useSelector((state) => state.editAddress);

  const { address_id } = match.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAddress(address_id));
  }, [address_id, dispatch]);

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
    <main>
      <section className="m-10 px-10 max-w-xl mx-auto">
        <Breadcrumb
          links={[
            {
              name: "your account",
              to: "/users/account",
            },
            {
              name: "your addresses",
              to: "/users/addresses",
            },
            {
              name: "edit address",
              to: address
                ? `/users/addresses/${address._id}`
                : "/users/addresses",
            },
          ]}
        />
        <div className="flex justify-center bg-gray-50 border-2 border-gray-50 py-5 rounded-lg shadow-lg px-10">
          <div>
            <h2 className="text-center text-4xl font-semibold mb-4">
              Edit Address
            </h2>
            <form className="flex-1" onSubmit={handleSubmit}>
              <div className="flex justify-between">
                <Link
                  className="inline-block p-2 bg-white-100 border-2 border-gray-500 rounded-full text-gray-500 mb-5"
                  to={routes.getAddresses}
                >
                  <span>
                    <HiOutlineArrowSmLeft className="h-6 w-6" />
                  </span>
                </Link>
                <div className="flex items-center space-x-2">
                  <Link
                    className="inline-block p-2 bg-white-100 border-2 border-gray-500 rounded-full text-gray-500 mb-5"
                    to={`${routes.getAddresses}/${address_id}`}
                  >
                    <span>
                      <HiOutlineX className="h-6 w-6" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="mb-3">
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
              <div className="mb-3">
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
              <div className="mb-3">
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
              <div className="mb-3">
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
              <div className="mb-3">
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
              <div className="mb-3">
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
              <div className="mb-3">
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
              <div className="mb-3">
                <button className="w-full bg-indigo-500 text-white rounded-lg py-2 text-lg hover:bg-indigo-400">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EditAddressPage;
