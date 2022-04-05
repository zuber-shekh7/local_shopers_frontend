import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAddress } from "../../actions/addressActions";
import routes from "../../utils/routes";
import Breadcrumb from "../../components/shared/Breadcrumb";
import { Address, AddressLoader } from "../../components/pages/addresses";

const AddressPage = () => {
  const dispatch = useDispatch();

  const { loading, address, error } = useSelector((state) => state.getAddress);

  const { addressId } = useParams();

  useEffect(() => {
    dispatch(getAddress(addressId));
  }, [addressId, dispatch]);

  return (
    <main>
      <section className="bg-indigo-600 text-white p-5">
        <div className="container">
          <h1>Address details</h1>
        </div>
      </section>
      <section className="container max-w-lg">
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
            {
              name: "details",
              to: `${routes.getAddresses}/${addressId}`,
            },
          ]}
        />

        {error && <h5 className="text-center text-red-500">{error}</h5>}
        {loading && <AddressLoader />}
        <Address address={address} addressId={addressId} />
      </section>
    </main>
  );
};

export default AddressPage;
