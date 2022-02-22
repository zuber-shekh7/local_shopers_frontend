import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUserOrders } from "../../actions/orderActions";
import routes from "../../utils/routes";

const UserOrdersPage = () => {
  const { user } = useSelector((state) => state.userLogin);

  const { loading, orders, error } = useSelector(
    (state) => state.getUserOrders
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOrders(user._id));
  }, [user, dispatch]);

  return (
    <main>
      <section className="m-10 max-w-6xl mx-auto px-10">
        <h1 className="text-4xl font-semibold mb-4">Your Orders</h1>
        {orders && orders.length && orders.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3">
            {orders.map((order) => {
              return (
                <div
                  key={order._id}
                  className="bg-gray-50 border-2 rounded-lg px-4 py-4 shadow-lg"
                >
                  <div className="mb-3">
                    <p className="text-xs uppercase mb-1">
                      ORDER | {order._id}
                    </p>
                    {order.orderItems && (
                      <h5 className="text-lg font-bold">
                        Total {order.orderItems.length} items
                      </h5>
                    )}
                    <h4 className="font-bold">₹ {order.totalPrice}/-</h4>
                    <p className="">{order.status}</p>
                  </div>
                  <Link
                    className="bg-indigo-500 px-3 py-2 text-white rounded-lg"
                    to={`${routes.getOrder}${order._id}`}
                  >
                    View
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex justify-center">
            <h3 className="text-2xl text-center">No orders available</h3>
          </div>
        )}
      </section>
    </main>
  );
};

export default UserOrdersPage;
