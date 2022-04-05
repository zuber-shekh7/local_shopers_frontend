import React from "react";

const AddressListLoader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3">
      {[...Array(6).fill(1, 6)].map((value, index) => {
        return (
          <div
            key={index + 1}
            className="border shadow-lg rounded-lg p-4 md:max-w-sm w-full mx-auto"
          >
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-3 py-1">
                <div className="h-6 w-8/12 bg-gray-300 rounded-lg"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-1 gap-5">
                    <div className="h-3 w-6/12 bg-gray-300 rounded-lg col-span-1"></div>
                    <div className="h-3 w-5/12 bg-gray-300 rounded-lg col-span-1"></div>
                    <div className="h-3 w-4/12 bg-gray-300 rounded-lg col-span-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AddressListLoader;
