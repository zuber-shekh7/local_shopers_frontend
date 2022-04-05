import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAddresses } from "../../actions/addressActions";
import Breadcrumb from "../../components/shared/Breadcrumb";
import routes from "../../utils/routes";
import {
  AddressList,
  AddressListLoader,
} from "../../components/pages/addresses";
import { Error } from "../../components/messages";

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
              name: "home",
              to: routes.dashboard,
            },
            {
              name: "addresses",
              to: routes.getAddresses,
            },
          ]}
        />
        {error && <Error />}
        {loading && <AddressListLoader />}
        <AddressList addresses={addresses} />
      </section>
    </main>
  );
};

export default AddressesPage;
