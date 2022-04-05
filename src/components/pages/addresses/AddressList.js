import React from "react";
import AddressListItem from "./AddressListItem";

const AddressList = (props) => {
  const { addresses } = props;

  return (
    <div className="grid grid-cols-1">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5">
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
