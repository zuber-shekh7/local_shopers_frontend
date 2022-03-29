import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Breadcrumb from "../../components/shared/Breadcrumb";
import { getOrder } from "../../actions/orderActions";
import { useParams } from "react-router-dom";
import routes from "../../utils/routes";

const OrderPage = () => {
  const { loading, order, error } = useSelector((state) => state.getOrder);

  const { orderId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder(orderId));
  }, [orderId, dispatch]);

  return (
    <main className="container">
      <section>
        <Breadcrumb
          links={[
            {
              name: "your account",
              to: routes.dashboard,
            },
            {
              name: "your orders",
              to: routes.getOrders,
            },
            {
              name: "order summary",
              to: `${routes.getOrders}${orderId}`,
            },
          ]}
        />
        <h1>Order Summary</h1>
        <hr />
        {error && <h5 className="text-center text-red-500">{error}</h5>}
        {loading && !order && (
          <div className="bg-gray-50 border-2 rounded-lg px-4 py-4 shadow-lg hover:bg-gray-100">
            <div className="animate-pulse grid grid-cols-12">
              <div className="col-span-12 md:col-span-6 sm:px-2">
                <div className="h-4 sm:h-12 bg-gray-300 rounded-lg mb-3"></div>
                <hr />
                <div className="h-8 w-5/12 bg-gray-300 rounded-lg mb-3"></div>
                <div className="h-4 w-5/12 bg-gray-300 rounded-lg mb-3"></div>
                <div className="h-4 w-5/12 bg-gray-300 rounded-lg mb-3"></div>
                <hr />
                <div className="h-8 w-5/12 bg-gray-300 rounded-lg mb-3"></div>
                <div className="h-4 w-5/12 bg-gray-300 rounded-lg mb-3"></div>
              </div>
              <div className="col-span-12 md:col-span-6 border-l sm:px-2">
                <div className="h-8 w-5/12 bg-gray-300 rounded-lg mb-3"></div>
                <hr />
                <div className="flex justify-between mb-3">
                  <div className="h-4 w-5/12 bg-gray-300 rounded-lg mb-3"></div>
                  <div className="h-4 w-1/12 bg-gray-300 rounded-lg mb-3"></div>
                </div>
                <div>
                  {[...Array(3).fill(1)].map((orderItem, index) => {
                    return (
                      <div
                        key={index}
                        className="grid grid-cols-12 items-center mb-3 gap-x-2"
                      >
                        <div
                          className="col-span-2 bg-gray-300 h-12 rounded-lg"
                          src={orderItem.image}
                          alt={orderItem.name}
                        ></div>
                        <div className="col-span-10 flex justify-between">
                          <div className="h-6 w-4/12 bg-gray-300 rounded-lg mb-3"></div>
                          <div className="h-6 w-4/12 bg-gray-300 rounded-lg mb-3"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <hr className="mb-3" />
                <div className="flex justify-between mb-3">
                  <div className="h-4 w-4/12 bg-gray-300 rounded-lg mb-3"></div>
                  <div className="h-4 w-1/12 bg-gray-300 rounded-lg mb-3"></div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <div className="h-8 w-2/12 bg-gray-300 rounded-lg mb-3"></div>
                    <div className="h-8 w-4/12 bg-gray-300 rounded-lg mb-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {order && (
          <div className="bg-gray-50 border rounded-xl px-4 py-3 shadow-md">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-6 sm:px-2">
                <h2 className="uppercase">order | {order._id} </h2>
                <hr />
                <h3>Shipping</h3>
                <p>
                  {order.shippingAddress.fullName}, {order.shippingAddress.city}
                  , {order.shippingAddress.state},{" "}
                  {order.shippingAddress.pincode}
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
                  <p>
                    {order.orderItems.reduce((acc, item) => acc + item.qty, 0)}
                  </p>
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
                    <p className="text-3xl font-semibold">
                      ₹ {order.totalPrice}/-
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default OrderPage;
