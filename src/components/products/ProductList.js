import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ProductItem from "./ProductItem";

const ProductList = ({ category, products }) => {
  if (products.length === 0) {
    return (
      <section className="text-center">
        <h2 className="text-muted my-4">No products added yet</h2>
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
