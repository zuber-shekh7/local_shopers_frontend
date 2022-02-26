import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAddresses } from "../../actions/addressActions";
import routes from "../../utils/routes";

const AddressesPage = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userLogin);
  const { loading, addresses, error } = useSelector(
    (state) => state.getAddresses
  );

  useEffect(() => {
    dispatch(getAddresses(user._id));
  }, [dispatch, user]);

  return (
    <main>
      <section className="m-10 max-w-6xl mx-auto px-10">
        <div className="grid grid-cols-1">
          <div className="flex justify-between items-center mb-3">
            <h1 className="text-4xl font-bold mb-4">Your Addresses</h1>
            <Link
              className="bg-indigo-500 text-white rounded-lg px-3 py-2"
              to={routes.addAddress}
            >
              Add address
            </Link>
          </div>
          {!addresses && loading && (
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3">
              {[...Array(6).fill(1, 6)].map((value, index) => {
                return (
                  <div
                    key={index + 1}
                    className="border border-gray-300 shadow-lg rounded-lg p-4 md:max-w-sm w-full mx-auto"
                  >
                    <div className="animate-pulse flex space-x-4">
                      <div className="flex-1 space-y-3 py-1">
                        <div className="h-2 bg-gray-500 rounded"></div>
                        <div className="space-y-3">
                          <div className="grid grid-cols-1 gap-3">
                            <div className="h-3 w-6/12 bg-gray-500 rounded col-span-1"></div>
                            <div className="h-3 w-5/12 bg-gray-500 rounded col-span-1"></div>
                            <div className="h-3 w-4/12 bg-gray-500 rounded col-span-1"></div>
                          </div>
                          <div className="h-8 w-3/12 bg-gray-500 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
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
                        key={address._id}
                        className="bg-gray-50 border-2 rounded-lg px-4 py-4 shadow-lg"
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

                        <div className="inline-block py-2 px-4 bg-indigo-500 rounded-lg text-white mt-3">
                          <Link to={`/users/addresses/${address._id}`}>
                            View
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="flex justify-center">
                  <h3 className="text-2xl text-center">No address available</h3>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default AddressesPage;
