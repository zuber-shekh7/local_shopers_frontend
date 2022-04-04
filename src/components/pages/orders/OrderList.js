import React from "react";
import OrderListItem from "./OrderListItem";

const OrderList = (props) => {
  const { orders } = props;

  return (
    <div>
      {orders && (
        <>
          {orders.length > 0 ? (
            <div className="grid grid-cols-1 gap-y-5">
              {orders.map((order) => {
                return <OrderListItem key={order._id} order={order} />;
              })}
            </div>
          ) : (
            <div className="flex justify-center">
              <h3 className="text-2xl text-center">No orders available</h3>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default OrderList;
