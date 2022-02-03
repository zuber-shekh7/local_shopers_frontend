import React from "react";
import { Table } from "react-bootstrap";
import AdminProductItems from "./AdminProductItem";

const AdminProductList = ({ products }) => {
  if (products.length === 0) {
    return (
      <section className="text-center">
        <h2 className="text-muted my-3">No Products added Yet</h2>
      </section>
    );
  }
  return (
    <section className="mt-3">
      <Table>
        <tbody>
          {products.map((product) => {
            return <AdminProductItems key={product._id} product={product} />;
          })}
        </tbody>
      </Table>
    </section>
  );
};

export default AdminProductList;
