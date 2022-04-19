import React from "react";
import routes, { generateRoute } from "../../../utils/routes";
import { LinkButton } from "../../buttons";
import { Card } from "../../cards";
import OrderStatusButton from "./OrderStatusButton";

const OrderItem = (props) => {
  const { order } = props;

  return (
    <Card className="shadow-lg">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 sm:px-2">
          <h2 className="uppercase">order | {order._id} </h2>
          <hr />
          <h2>Shipping</h2>
          <p>
            {order.shippingInfo.fullName}, {order.shippingInfo.city},{" "}
            {order.shippingInfo.state}, {order.shippingInfo.pincode}
          </p>
          <p>Mobile: {order.shippingInfo.mobileNumber}</p>
          <hr />
          <div className="flex  items-center gap-x-2 mb-2">
            <h2 className="mb-0">Payment</h2>
            <div>
              <LinkButton
                className="px-1 py-1 text-xs"
                to={generateRoute(routes.orderPayment, {
                  ":orderId": order._id,
                })}
              >
                {order.paymentInfo.status === "Pending"
                  ? "Pay Now"
                  : "View Details"}
              </LinkButton>
            </div>
          </div>

          <div>
            <div>
              <p>Method: {order.paymentMethod}</p>
              <p>Status: {order.paymentInfo.status}</p>
            </div>
          </div>
          <hr />
          <h2>Order Status</h2>
          <OrderStatusButton status={order.status} />
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
                    src={orderItem.photo}
                    alt={orderItem.name}
                  />

                  <div className="col-span-10 flex justify-between">
                    <h3>{orderItem.name}</h3>
                    <h3>₹ {orderItem.qty * orderItem.discountPrice}/-</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <hr className="mb-3" />
          <div className="flex justify-between mb-3">
            <p className="font-semibold">Shipping Charges</p>
            <p>₹ {order.shippingAmount}/-</p>
          </div>
          <div>
            <div className="flex justify-between">
              <p className="text-3xl font-semibold">Total</p>
              <p className="text-3xl font-semibold">₹ {order.totalAmount}/-</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default OrderItem;
