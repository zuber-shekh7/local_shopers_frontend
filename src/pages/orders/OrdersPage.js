import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrders } from "../../actions/orderActions";
import Breadcrumb from "../../components/shared/Breadcrumb";
import routes from "../../utils/routes";
import { OrderList, OrderListLoader } from "../../components/pages/orders";
import { Error } from "../../components/messages";

const OrdersPage = () => {
  const { user } = useSelector((state) => state.userLogin);

  const { loading, orders, error } = useSelector((state) => state.getOrders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders(user._id));
  }, [user, dispatch]);

  return (
    <main>
      <section className="bg-indigo-600 p-5 text-white">
        <div className="container">
          <h1>Your Orders</h1>
        </div>
      </section>
      <section className="container">
        <Breadcrumb
          links={[
            {
              name: "home",
              to: routes.dashboard,
            },
            {
              name: "orders",
              to: routes.getOrders,
            },
          ]}
        />
        <div className="flex justify-center">{error && <Error />}</div>
        {loading && <OrderListLoader />}
        <OrderList orders={orders} />
      </section>
    </main>
  );
};

export default OrdersPage;
