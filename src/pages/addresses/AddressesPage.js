import React, { useEffect } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAddresses } from "../../actions/addressActions";
import Breadcrumb from "../../components/shared/Breadcrumb";
import { Card } from "../../components/cards";
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
      <section className="bg-indigo-600 text-white p-5">
        <div className="container">
          <h1>Your Addresses</h1>
        </div>
      </section>
      <section className="container">
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
          ]}
        />
        <div className="grid grid-cols-1">
          {error && <h5 className="text-center text-red-500">{error}</h5>}
          {!addresses && loading && (
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3">
              {[...Array(6).fill(1, 6)].map((value, index) => {
                return (
                  <div
                    key={index + 1}
                    className="border shadow-lg rounded-lg p-4 md:max-w-sm w-full mx-auto"
                  >
                    <div className="animate-pulse flex space-x-4">
                      <div className="flex-1 space-y-3 py-1">
                        <div className="h-6 w-8/12 bg-gray-300 rounded-lg"></div>
                        <div className="space-y-3">
                          <div className="grid grid-cols-1 gap-5">
                            <div className="h-3 w-6/12 bg-gray-300 rounded-lg col-span-1"></div>
                            <div className="h-3 w-5/12 bg-gray-300 rounded-lg col-span-1"></div>
                            <div className="h-3 w-4/12 bg-gray-300 rounded-lg col-span-1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5">
            {!loading && !error && (
              <Card className="hover:bg-indigo-50">
                <Link
                  to={routes.addAddress}
                  className="py-6 flex flex-1 flex-col space-y-2 justify-center items-center"
                >
                  <HiOutlinePlus className="h-10 w-10" />
                  <h2 className="text-2xl font-semibold">Add address</h2>
                </Link>
              </Card>
            )}
            {addresses && (
              <>
                {addresses.length > 0 && (
                  <>
                    {addresses.map((address) => {
                      return (
                        <Card className="hover:bg-indigo-50">
                          <Link
                            to={`${routes.getAddresses}/${address._id}`}
                            key={address._id}
                          >
                            <h2 className="text-2xl font-medium">
                              {address.fullName}
                            </h2>
                            <p>
                              {address.flatNo} {address.street}{" "}
                              {address.landmark}
                            </p>
                            <p>
                              {address.city}, {address.state}, {address.pincode}
                            </p>
                            <p>Phone Number: {address.mobileNumber}</p>
                          </Link>
                        </Card>
                      );
                    })}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AddressesPage;
