import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Breadcrumb from "../../components/shared/Breadcrumb";
import { getUserOrder } from "../../actions/orderActions";

const UserOrderPage = ({ match }) => {
  const { loading, order, error } = useSelector((state) => state.getUserOrder);

  const { order_id } = match.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOrder(order_id));
  }, [order_id, dispatch]);

  return (
    <main>
      <section className="m-10 px-10 max-w-6xl mx-auto">
        {order && (
          <Breadcrumb
            links={[
              {
                name: "your account",
                to: "/users/account",
              },
              {
                name: "your orders",
                to: "/users/orders",
              },
              {
                name: "order summary",
                to: `/users/orders/${order._id}`,
              },
            ]}
          />
        )}
        <div className="pb-5">
          {order && (
            <>
              <p className="text-lg font-bold uppercase mb-3">
                Order | {order._id} | {order.createdAt}
              </p>
              <section className="mb-3">
                <h2 className="text-3xl font-semibold mb-3">Shipping</h2>
                <hr />
                <p className="text-lg mb-3">
                  {order.shippingAddress.fullName}, {order.shippingAddress.city}
                  , {order.shippingAddress.state},{" "}
                  {order.shippingAddress.pincode}
                </p>
                <p className="text-lg">{order.shippingAddress.mobileNumber}</p>
              </section>
              <section className="mb-3">
                <h2 className="text-3xl font-semibold mb-3">Payment</h2>
                <hr />
                <p className="text-lg">{order.paymentMethod}</p>
              </section>
              <section>
                <h2 className="text-3xl font-semibold mb-3">Order Items</h2>
                <hr />
                {order.orderItems.length > 0 && (
                  <ul>
                    {order.orderItems.map((item, index) => {
                      return (
                        <li key={index}>
                          <div className="flex items-center space-x-4 my-3">
                            <div>
                              {item.image ? (
                                <img
                                  className="h-15 w-20 rounded-lg"
                                  src={item.image}
                                  alt={item.name}
                                />
                              ) : (
                                <div className="h-50 w-50 p-4 bg-gray-500 rounded-lg">
                                  <p className="text-white text-center">
                                    Photo
                                  </p>
                                </div>
                              )}
                            </div>
                            <h3 className="text-lg">{item.name}</h3>
                            <h3 className="text-lg">
                              {item.qty} * {item.price}/-
                            </h3>
                            <h3 className="text-lg font-bold">
                              ₹ {item.price * item.qty}/-
                            </h3>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </section>
              <section className="mb-3">
                <h2 className="text-3xl font-semibold mb-3">Order Status</h2>
                <hr />
                <p className="text-lg uppercase">{order.status}</p>
              </section>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default UserOrderPage;
