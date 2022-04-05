import React from "react";
import { Link } from "react-router-dom";
import CategoryListItem from "./CategoryListItem";

const CategoryList = (props) => {
  const { categories, business } = props;

  return (
    <div>
      {categories && (
        <div>
          {categories.length > 0 ? (
            <div>
              {categories.map((category) => {
                return (
                  <CategoryListItem business={business} category={category} />
                );
              })}
            </div>
          ) : (
            <section className="text-center">
              <h2 className="text-muted my-3">No Categories added Yet</h2>
              <Link to="categories/new">Add new category</Link>
            </section>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryList;
