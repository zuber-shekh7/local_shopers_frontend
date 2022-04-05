import React from "react";

const BusinessLoader = () => {
  return (
    <div className="flex justify-center ">
      <div className="animate-pulse flex-1 space-y-5">
        <div className="h-96 w-full bg-gray-300 rounded-lg"></div>
        <div className="flex flex-col justify-center items-center space-y-3">
          <div className="h-10 w-3/12 bg-gray-300 rounded-lg"></div>
          <div className="h-5 w-4/12 bg-gray-300 rounded-lg"></div>
          <div className="h-5  w-4/12 bg-gray-300 rounded-lg"></div>
        </div>
        <div>
          <div className="h-8 w-4/12 bg-gray-300 rounded-lg mb-3"></div>
          <hr className="mb-3" />
          {[...Array(3).fill(1)].map((value, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-1 bg-gray-50  rounded-lg gap-3 mb-3 overflow-hidden shadow-md"
              >
                <div className="h-64 md:h-48 w-full bg-gray-300"></div>
              </div>
            );
          })}
          ;
        </div>
      </div>
    </div>
  );
};

export default BusinessLoader;
