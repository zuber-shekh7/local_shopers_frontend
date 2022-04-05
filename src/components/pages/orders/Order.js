import React from "react";
import OrderItem from "./OrderItem";

const Order = (props) => {
  const { order } = props;

  return (
    <div>
      {order ? (
        <OrderItem order={order} />
      ) : (
        <div className="flex justify-center">
          <p>No order available</p>
        </div>
      )}
    </div>
  );
};

export default Order;
