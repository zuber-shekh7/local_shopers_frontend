import React from "react";
import AdminCategoryItem from "./AdminCategoryItem";

const AdminCategoryList = ({ categories }) => {
  if (categories.length === 0) {
    return (
      <section className="text-center">
        <h2 className="text-muted my-3">No Categories added Yet</h2>
      </section>
    );
  }
  return (
    <section className="mt-3">
      {categories.map((category) => {
        return <AdminCategoryItem key={category._id} category={category} />;
      })}
    </section>
  );
};

export default AdminCategoryList;
