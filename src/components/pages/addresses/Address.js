import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import { Navigate } from "react-router-dom";

import { deleteAddress } from "../../../actions/addressActions";
import routes from "../../../utils/routes";
import { Button, LinkButton } from "../../buttons";
import Modal from "../../shared/Modal";
import AddressItem from "./AddressItem";

const Address = (props) => {
  const [open, setOpen] = useState(false);

  const { success } = useSelector((state) => state.deleteAddress);

  const { address, addressId } = props;

  const dispatch = useDispatch();

  if (success) {
    return <Navigate to={routes.getAddresses} />;
  }

  const onDelete = (id) => {
    dispatch(deleteAddress(id));
    setOpen(false);
  };

  return (
    <div>
      {address ? (
        <div className="flex justify-center border rounded-lg shadow-lg p-5">
          <Modal
            show={open}
            onClick={() => setOpen(false)}
            onSubmit={() => onDelete(address._id)}
            title={`Are you sure you want to delete?`}
            description="Once you delete, you won't be able to access it further"
            cta="Confirm Delete"
          />
          <div className="flex-1">
            <AddressItem address={address} />
            <div className="grid grid-cols-12 gap-x-2">
              <LinkButton
                className="col-span-6 flex flex-1 justify-center items-center space-x-2"
                to={`${routes.getAddresses}/${addressId}/edit`}
              >
                <span>
                  <HiOutlinePencil />
                </span>
                <span>Edit</span>
              </LinkButton>
              <Button
                className="col-span-6 flex flex-1 justify-center items-center space-x-2 bg-red-500"
                onClick={() => setOpen(true)}
              >
                <span>
                  <HiOutlineTrash />
                </span>
                <span>Delete</span>
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <h1>Address not available</h1>
      )}
    </div>
  );
};

export default Address;
