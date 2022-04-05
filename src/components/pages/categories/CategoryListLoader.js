import React from "react";

const CategoryListLoader = () => {
  return (
    <div className="flex flex-col">
      {[...Array(3).fill(1)].map((value, index) => {
        return (
          <div
            key={index}
            className="grid grid-cols-1 bg-gray-50  rounded-lg gap-3 mb-3 overflow-hidden shadow-md"
          >
            <div className="animate-pulse h-64 w-full bg-gray-300"></div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryListLoader;
