import React from "react";

const ProductLoader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10">
      <div className="animate-pulse col-span-6 p-10 ">
        <div className="flex justify-center items-center">
          <div className="block h-72 w-full bg-gray-300 rounded-lg"></div>
        </div>
      </div>
      <div className="animate-pulse col-span-6 p-10 ">
        <div className="h-12 w-4/12 bg-gray-300 rounded-lg mb-3"></div>
        <div className="h-8 w-4/12 bg-gray-300 rounded-lg mb-3"></div>
        <div className="h-4 w-5/12 bg-gray-300 rounded-lg mb-3"></div>
        <div className="h-10 w-full bg-gray-300 rounded-lg mb-3"></div>
        <div className="h-10 w-full bg-gray-300 rounded-lg mb-3"></div>
        <div className="h-10 w-full bg-gray-300 rounded-lg mb-3"></div>
      </div>
    </div>
  );
};

export default ProductLoader;
