import React from "react";

const AddressItem = (props) => {
  const { address } = props;
  return (
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
            <p className="">{address.landmark ? address.landmark : "N/A"}</p>
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
  );
};

export default AddressItem;
