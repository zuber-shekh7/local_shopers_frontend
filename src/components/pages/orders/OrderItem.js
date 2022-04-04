import React from "react";
import { Card } from "../../cards";

const OrderItem = (props) => {
  const { order } = props;

  return (
    <Card>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 sm:px-2">
          <h2 className="uppercase">order | {order._id} </h2>
          <hr />
          <h3>Shipping</h3>
          <p>
            {order.shippingAddress.fullName}, {order.shippingAddress.city},{" "}
            {order.shippingAddress.state}, {order.shippingAddress.pincode}
          </p>
          <p>Mobile: {order.shippingAddress.mobileNumber}</p>
          <hr />
          <h3>Payment</h3>
          <p>{order.paymentMethod}</p>
        </div>
        <div className="col-span-12 md:col-span-6 sm:border-l sm:px-2">
          <h2>Order Items</h2>
          <hr />
          <div className="flex justify-between mb-3">
            <p className="font-semibold">Total items</p>
            <p>{order.orderItems.reduce((acc, item) => acc + item.qty, 0)}</p>
          </div>
          <div>
            {order.orderItems.map((orderItem) => {
              return (
                <div
                  key={orderItem._id}
                  className="grid grid-cols-12 gap-x-2 items-center mb-2 sm:mb-5"
                >
                  <img
                    className="col-span-2 object-cover rounded-lg"
                    src={orderItem.image}
                    alt={orderItem.name}
                  />

                  <div className="col-span-10 flex justify-between">
                    <h3>{orderItem.name}</h3>
                    <h3>₹ {orderItem.qty * orderItem.price}/-</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <hr className="mb-3" />
          <div className="flex justify-between mb-3">
            <p className="font-semibold">Shipping Charges</p>
            <p>₹ {order.shippingCharges}/-</p>
          </div>
          <div>
            <div className="flex justify-between">
              <p className="text-3xl font-semibold">Total</p>
              <p className="text-3xl font-semibold">₹ {order.totalPrice}/-</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default OrderItem;
