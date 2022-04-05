import React from "react";
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
                  <CategoryListItem
                    key={category._id}
                    business={business}
                    category={category}
                  />
                );
              })}
            </div>
          ) : (
            <section className="flex justify-center">
              <h4>Categories not available</h4>
            </section>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryList;
