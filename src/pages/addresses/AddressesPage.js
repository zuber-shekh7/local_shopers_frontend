import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAddresses } from "../../actions/addressActions";

const AddressesPage = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, error, addresses } = useSelector(
    (state) => state.getAddresses
  );

  const { user } = userInfo;

  useEffect(() => {
    dispatch(getAddresses(user._id));
  }, []);

  return (
    <main className="mt-10">
      <section className="px-10">
        <div className="flex justify-between mb-5">
          <h2 className="text-4xl font-bold">Your Addresses</h2>
          <div className="px-2 py-3 bg-indigo-500 rounded-lg text-white">
            <Link to="/users/addresses/new">Add new address</Link>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-3 gap-3">
            {addresses && addresses.length && addresses.length > 0 ? (
              <>
                {addresses.map((address) => {
                  return (
                    <div
                      key={address._id}
                      className="bg-gray-100 rounded-lg px-3 py-4 shadow-lg"
                    >
                      <h2 className="text-2xl font-medium">
                        {address.fullName}
                      </h2>
                      <p>
                        {address.flatNo} {address.street}
                        {address.landmark}
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
              </>
            ) : (
              <h3 className="text-center text-muted">No address available</h3>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AddressesPage;
