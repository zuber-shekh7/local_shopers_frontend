import React from "react";
import { Card } from "react-bootstrap";
import { HiOutlinePlus } from "react-icons/hi";
import { Link } from "react-router-dom";
import routes from "../../../utils/routes";
import AddressListItem from "./AddressListItem";

const AddressList = (props) => {
  const { addresses } = props;

  return (
    <div className="grid grid-cols-1">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5">
        <Card className="hover:bg-indigo-50 rounded-lg border overflow-hidden">
          <Link
            className="flex justify-center items-center md:h-full h-48"
            to={routes.addAddress}
          >
            <h2 className="flex justify-center items-center space-x-5">
              <HiOutlinePlus /> Add Address
            </h2>
          </Link>
        </Card>
        {addresses && (
          <>
            {addresses.length > 0 && (
              <>
                {addresses.map((address) => {
                  return (
                    <AddressListItem key={address._id} address={address} />
                  );
                })}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AddressList;
