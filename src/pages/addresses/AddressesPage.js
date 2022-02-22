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
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold mb-4">Your Addresses</h1>
            <Link
              className="bg-indigo-500 text-white rounded-lg px-3 py-2"
              to={routes.addAddress}
            >
              Add address
            </Link>
          </div>

          {addresses && addresses.length && addresses.length > 0 ? (
            <div className="grid grid-cols-3 gap-3">
              {addresses.map((address) => {
                return (
                  <div
                    key={address._id}
                    className="bg-gray-50 border-2 rounded-lg px-4 py-4 shadow-lg"
                  >
                    <h2 className="text-2xl font-medium">{address.fullName}</h2>
                    <p>
                      {address.flatNo} {address.street} {address.landmark}
                    </p>
                    <p>
                      {address.city}, {address.state}, {address.pincode}
                    </p>
                    <p>Phone Number: {address.mobileNumber}</p>

                    <div className="inline-block py-2 px-4 bg-indigo-500 rounded-lg text-white mt-3">
                      <Link to={`/users/addresses/${address._id}`}>View</Link>
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
        </div>
      </section>
    </main>
  );
};

export default AddressesPage;
