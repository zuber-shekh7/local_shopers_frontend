import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ categories }) => {
  if (categories.length === 0) {
    return (
      <section className="text-center">
        <h2 className="text-muted my-3">No Categories added Yet</h2>
        <LinkContainer to="categories/new">
          <Button>Add new category</Button>
        </LinkContainer>
      </section>
    );
  }

  return (
    <section className="my-3">
      {categories.map((category) => {
        return <CategoryItem key={category._id} category={category} />;
      })}
    </section>
  );
};

export default CategoryList;
