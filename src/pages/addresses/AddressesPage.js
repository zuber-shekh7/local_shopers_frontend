import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAddresses } from "../../actions/addressActions";
import Breadcrumb from "../../components/shared/Breadcrumb";
import routes, { generateRoute } from "../../utils/routes";
import {
  AddressList,
  AddressListLoader,
} from "../../components/pages/addresses";
import { Error } from "../../components/messages";
import { CircleLink } from "../../components/buttons";
import { HiOutlinePlus } from "react-icons/hi";

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
        <div className="flex justify-between items-center mb-5">
          <Breadcrumb
            className="mb-0"
            links={[
              {
                name: "home",
                to: routes.dashboard,
              },
              {
                name: "addresses",
                to: routes.getAddresses,
              },
            ]}
          />
          <CircleLink
            className="flex justify-center items-center space-x-2 bg-indigo-600 text-white hover:bg-indigo-700"
            to={generateRoute(routes.addAddress)}
          >
            <HiOutlinePlus />
          </CircleLink>
        </div>
        {error && <Error />}
        {loading && <AddressListLoader />}
        {addresses && <AddressList addresses={addresses} />}
      </section>
    </main>
  );
};

export default AddressesPage;
