import React from "react";
import { Table } from "react-bootstrap";
import AdminSellerItem from "./AdminSellerItem";

const AdminSellerList = ({ sellerList }) => {
  if (sellerList.length === 0) {
    return (
      <section className="text-center">
        <h2 className="text-muted my-3">No Categories added Yet</h2>
      </section>
    );
  }
  return (
    <section className="mt-3">
      {sellerList.map((seller) => {
        return <AdminSellerItem key={seller._id} seller={seller} />;
      })}
    </section>
  );
};

export default AdminSellerList;
