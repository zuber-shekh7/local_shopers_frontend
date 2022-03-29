import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAddresses } from "../../actions/addressActions";
import { saveShippingAddress } from "../../actions/cartActions";
import routes from "../../utils/routes";

const ShippingPage = ({ history }) => {
  const [address, setAddresss] = useState(null);

  const { user } = useSelector((state) => state.userLogin);

  const { loading, addresses, error } = useSelector(
    (state) => state.getAddresses
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAddresses(user._id));
  }, [user, dispatch]);

  const handleOnClick = (selectedAddress) => {
    setAddresss(JSON.stringify(selectedAddress));

    if (!address) {
      return;
    }

    dispatch(saveShippingAddress(address));
    history.push("/checkout/payment");
  };

  return (
    <main>
      <section className="m-10 px-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold mb-3">Select Shipping Address</h2>
        <hr className="mb-3" />
        <div className="grid grid-cols-1">
          {loading && !addresses && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[...Array(6).fill(1)].map((value, index) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-50 border-2 rounded-lg px-4 py-4 shadow-lg hover:cursor-pointer hover:bg-gray-100 space-y-3"
                  >
                    <div className="h-8 w-4/12 bg-gray-300 rounded-lg"></div>
                    <div className="h-4 w-5/12 bg-gray-300 rounded-lg"></div>
                    <div className="h-4 w-6/12 bg-gray-300 rounded-lg"></div>
                    <div className="h-4 w-7/12 bg-gray-300 rounded-lg"></div>
                  </div>
                );
              })}
            </div>
          )}
          {addresses && (
            <>
              {addresses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {addresses.map((address) => {
                    return (
                      <div
                        onClick={() => handleOnClick(address)}
                        key={address._id}
                        className="bg-gray-50 border-2 rounded-lg px-4 py-4 shadow-lg hover:cursor-pointer hover:bg-gray-100 space-y-3"
                      >
                        <h2 className="text-2xl font-medium">
                          {address.fullName}
                        </h2>
                        <p>
                          {address.flatNo} {address.street} {address.landmark}
                        </p>
                        <p>
                          {address.city}, {address.state}, {address.pincode}
                        </p>
                        <p>Phone Number: {address.mobileNumber}</p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center gap-y-5">
                  <h2 className="text-3xl text-center">No Address Available</h2>
                  <Link
                    className="px-3 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
                    to={routes.addAddress}
                  >
                    Add new address
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default ShippingPage;
