import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../../cards";
import routes from "../../../utils/routes";

const AddressListItem = (props) => {
  const { address } = props;

  return (
    <Card className="hover:bg-indigo-50">
      <Link to={`${routes.getAddresses}/${address._id}`} key={address._id}>
        <h2 className="text-2xl font-medium">{address.fullName}</h2>
        <p>
          {address.flatNo} {address.street} {address.landmark}
        </p>
        <p>
          {address.city}, {address.state}, {address.pincode}
        </p>
        <p>Phone Number: {address.mobileNumber}</p>
      </Link>
    </Card>
  );
};

export default AddressListItem;
