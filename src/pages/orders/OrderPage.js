import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Breadcrumb from "../../components/shared/Breadcrumb";
import { getOrder } from "../../actions/orderActions";
import { useParams } from "react-router-dom";
import routes from "../../utils/routes";
import { Order, OrderLoader } from "../../components/pages/orders";
import { Error } from "../../components/messages";

const OrderPage = () => {
  const { loading, order, error } = useSelector((state) => state.getOrder);

  const { orderId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder(orderId));
  }, [orderId, dispatch]);

  return (
    <main>
      <section className="bg-indigo-600 text-white p-5">
        <div className="container">
          <h1>Order Summary</h1>
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
            {
              name: "summary",
              to: `${routes.getOrders}${orderId}`,
            },
          ]}
        />
        {error && <Error />}
        {loading && <OrderLoader />}
        {order && <Order order={order} />}
      </section>
    </main>
  );
};

export default OrderPage;
