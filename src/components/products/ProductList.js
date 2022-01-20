import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return (
      <section className="text-center">
        <h2 className="text-muted my-3">No products added Yet</h2>
        <LinkContainer to="categories/new">
          <Button>Add new product</Button>
        </LinkContainer>
      </section>
    );
  }

  return (
    <section className="my-3">
      {products.map((product) => {
        return <ProductItem key={product._id} product={product} />;
      })}
    </section>
  );
};

export default ProductList;
