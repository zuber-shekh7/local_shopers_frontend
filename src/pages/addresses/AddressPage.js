import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import { Navigate, useParams } from "react-router-dom";
import { deleteAddress, getAddress } from "../../actions/addressActions";
import routes from "../../utils/routes";
import Modal from "../../components/shared/Modal";
import Breadcrumb from "../../components/shared/Breadcrumb";
import { Button, LinkButton } from "../../components/buttons";

const AddressPage = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const { loading, address, error } = useSelector((state) => state.getAddress);
  const { success } = useSelector((state) => state.deleteAddress);

  const { addressId } = useParams();

  useEffect(() => {
    dispatch(getAddress(addressId));
  }, [addressId, dispatch]);

  const onDelete = (id) => {
    dispatch(deleteAddress(id));
    setOpen(false);
  };

  if (success) {
    return <Navigate to={routes.getAddresses} />;
  }

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
              name: "your account",
              to: routes.dashboard,
            },
            {
              name: "your addresses",
              to: routes.getAddresses,
            },
            {
              name: "address details",
              to: `${routes.getAddresses}/${addressId}`,
            },
          ]}
        />

        {error && <h5 className="text-center text-red-500">{error}</h5>}
        {loading && !address && (
          <div className="flex justify-center bg-gray-50 border border-gray-50 py-5 rounded-lg shadow-lg px-10">
            <div className="animate-pulse flex-1">
              <div className="flex justify-end mb-5">
                <div className="flex items-center space-x-2">
                  <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
                  <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
                </div>
              </div>
              <div>
                {[...Array(8).fill(1)].map((value, index) => {
                  return (
                    <div key={index} className="flex justify-between mb-5">
                      <div className="h-8 w-3/12 bg-gray-300 rounded-lg"></div>
                      <div className="h-8 w-4/12 bg-gray-300 rounded-lg"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {address && (
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
              <div>
                <ul>
                  <li className="border-b mb-5">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">Full Name</h4>
                      <p className="">{address.fullName}</p>
                    </div>
                  </li>
                  <li className="border-b mb-5">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">Flat No</h4>
                      <p className="">{address.flatNo}</p>
                    </div>
                  </li>
                  <li className="border-b mb-5">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">Street</h4>
                      <p className="">{address.street}</p>
                    </div>
                  </li>
                  <li className="border-b mb-5">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">Landmark</h4>
                      <p className="">
                        {address.landmark ? address.landmark : "N/A"}
                      </p>
                    </div>
                  </li>
                  <li className="border-b mb-5">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">City</h4>
                      <p className="">{address.city}</p>
                    </div>
                  </li>
                  <li className="border-b mb-5">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">State</h4>
                      <p className="">{address.state}</p>
                    </div>
                  </li>
                  <li className="border-b mb-5">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">Pincode</h4>
                      <p className="">{address.pincode}</p>
                    </div>
                  </li>
                  <li className="border-b mb-5">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">Mobile Number</h4>
                      <p className="">{address.mobileNumber}</p>
                    </div>
                  </li>
                </ul>
              </div>
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
        )}
      </section>
    </main>
  );
};

export default AddressPage;
