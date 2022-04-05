import React from "react";

const ProductListLoader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[...Array(6).fill(1)].map((value, index) => {
        return (
          <div
            key={index}
            className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
          >
            <div className="h-48 bg-gray-300"></div>

            <div className="flex justify-center items-center flex-col mt-5 pb-5  space-y-3">
              <div className="h-10 w-8/12 bg-gray-300 rounded-lg"></div>
              <div className="h-6 w-8/12 bg-gray-300 rounded-lg"></div>
              <div className="h-8 w-4/12 bg-gray-300 rounded-lg"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductListLoader;
