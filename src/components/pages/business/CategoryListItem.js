import React from "react";
import { Link, useParams } from "react-router-dom";
import routes, { generateRoute } from "../../../utils/routes";

const CategoryListItem = (props) => {
  const { category } = props;

  const { businessId } = useParams();

  return (
    <Link
      key={category._id}
      to={generateRoute(routes.getCategory, {
        ":businessId": businessId,
        ":categoryId": category._id,
      })}
    >
      <div
        className="grid h-64 grid-cols-1 rounded-lg mb-3 overflow-hidden shadow-md hover:opacity-90 hover:text-indigo-700 transition duration-500"
        style={{
          backgroundImage: `url(${category.photo.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center items-center">
          <h3 className="text-indigo-600 px-3 py-2 bg-white  rounded-lg text-2xl sm:text-4xl md:text-6xl font-semibold">
            {category.name}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryListItem;
