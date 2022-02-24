import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  HiOutlineArrowSmLeft,
  HiOutlinePencil,
  HiOutlineTrash,
} from "react-icons/hi";
import { Link, Redirect } from "react-router-dom";
import { deleteAddress, getAddress } from "../../actions/addressActions";
import routes from "../../utils/routes";

const AddressPage = ({ match }) => {
  const [modalShow, setModalShow] = useState(false);

  const dispatch = useDispatch();

  const { loading, address, error } = useSelector((state) => state.getAddress);
  const { success } = useSelector((state) => state.deleteAddress);

  const { address_id } = match.params;

  useEffect(() => {
    dispatch(getAddress(address_id));
  }, []);

  const onDelete = (id) => {
    dispatch(deleteAddress(id));
    setModalShow(false);
  };

  if (success) {
    return <Redirect to="/users/addresses" />;
  }
  return (
    <main>
      <section className="m-10 px-10 max-w-xl mx-auto">
        {address && (
          <div className="flex justify-center bg-gray-50 border-2 border-gray-50 py-5 rounded-lg shadow-lg px-10">
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <Link
                    className="inline-block p-2 bg-white-100 border-2 border-gray-500 rounded-full text-gray-500 mb-5"
                    to={routes.getAddresses}
                  >
                    <span>
                      <HiOutlineArrowSmLeft className="h-6 w-6" />
                    </span>
                  </Link>
                </div>
                <div className="flex items-center space-x-2">
                  <Link
                    className="inline-block p-2 bg-white-100 border-2 border-gray-500 rounded-full text-gray-500 mb-5"
                    to={`${routes.getAddresses}/${address._id}/edit`}
                  >
                    <span>
                      <HiOutlinePencil className="h-6 w-6" />
                    </span>
                  </Link>
                  <Link
                    className="inline-block p-2 bg-white-100 border-2 border-gray-500 rounded-full text-gray-500 mb-5"
                    to={routes.getAddresses}
                  >
                    <span>
                      <HiOutlineTrash className="h-6 w-6" />
                    </span>
                  </Link>
                </div>
              </div>

              <div>
                <ul>
                  <li>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold">Full Name</h4>
                      <p className="">{address.fullName}</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold">Flat No</h4>
                      <p className="">{address.flatNo}</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold">Street</h4>
                      <p className="">{address.street}</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold">City</h4>
                      <p className="">
                        {address.landmark ? address.landmark : "N/A"}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold">City</h4>
                      <p className="">{address.city}</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold">State</h4>
                      <p className="">{address.state}</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold">Pincode</h4>
                      <p className="">{address.pincode}</p>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold">Mobile Number</h4>
                      <p className="">{address.mobileNumber}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default AddressPage;
