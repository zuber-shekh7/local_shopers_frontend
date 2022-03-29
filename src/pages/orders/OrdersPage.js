import moment from "moment";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getOrders } from "../../actions/orderActions";
import Breadcrumb from "../../components/shared/Breadcrumb";
import routes from "../../utils/routes";

const OrdersPage = () => {
  const { user } = useSelector((state) => state.userLogin);

  const { loading, orders, error } = useSelector((state) => state.getOrders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders(user._id));
  }, [user, dispatch]);

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
          ]}
        />
        <h1>Your Orders</h1>
        <hr />
        {error && <h5 className="text-center text-red-500">{error}</h5>}
        {!orders && loading && (
          <div className="grid grid-cols-1 gap-y-5">
            {[...Array(6).fill(1, 6)].map((value, index) => {
              return (
                <div
                  key={index + 1}
                  className="border rounded-lg w-full mx-auto overflow-hidden"
                >
                  <div className="animate-pulse flex flex-col">
                    <div className="h-24 bg-gray-300"></div>
                    <div className="h-32"></div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {orders && (
          <>
            {orders.length > 0 ? (
              <div className="grid grid-cols-1 gap-y-5">
                {orders.map((order) => {
                  return (
                    <div
                      key={order._id}
                      className="flex flex-col border rounded-lg overflow-hidden"
                    >
                      <div className="bg-lightBlue px-5 py-3">
                        <div className="flex justify-between">
                          <div>
                            <p className="uppercase">order placed</p>
                            <p>
                              {moment(order.createdAt).format("Do MMMM YYYY")}
                            </p>
                          </div>
                          <div>
                            <p className="uppercase">total</p>
                            <p>&#8377; {order.totalPrice}</p>
                          </div>
                          <div>
                            <p className="uppercase">ship to</p>
                            <p>{order.shippingAddress.fullName}</p>
                          </div>

                          <div className="flex flex-col gap-y-3">
                            <p className="uppercase mb-1">
                              ORDER # {order._id}
                            </p>
                            <Link
                              className="text-darkBlue hover:text-indigo-600 hover:underline"
                              to={`${routes.getOrders}${order._id}`}
                            >
                              View order details
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="px-5 py-3">
                        <div className="flex justify-between">
                          <Link to="" className="flex gap-x-5">
                            <img
                              className="h-24 rounded-lg"
                              src={order.orderItems[0].image}
                              alt={order.orderItems[0].name}
                            />
                            <h4>{order.orderItems[0].name}</h4>
                          </Link>
                          <div className="flex flex-col gap-y-3">
                            <Link
                              className="text-center px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                              to=""
                            >
                              Track package
                            </Link>
                            <Link
                              className="text-center px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                              to=""
                            >
                              Write a product review
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex justify-center">
                <h3 className="text-2xl text-center">No orders available</h3>
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
};

export default OrdersPage;
