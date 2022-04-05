import React from "react";

const AddressLoader = () => {
  return (
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
  );
};

export default AddressLoader;
