import React, { useEffect } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { editOrder, getOrder } from "../../actions/orderActions";
import { Loader } from "../../components/loaders";
import { Error } from "../../components/messages";
import Breadcrumb from "../../components/shared/Breadcrumb";
import HeaderContainer from "../../components/shared/HeaderContainer";
import routes, { generateRoute } from "../../utils/routes";

import { Card } from "../../components/cards";
import { Button } from "../../components/buttons";

const OrderPaymentPage = () => {
  const loadRazorpay = async (src) => {
    return new Promise((res) => {
      const script = document.createElement("script");
      script.src = src;
      document.body.append(script);
      script.onload = () => {
        res(true);
      };
      script.onerror = () => {
        res(false);
      };
    });
  };

  const { orderId } = useParams();

  const { loading, order, error } = useSelector((state) => state.getOrder);
  const {
    loading: updateLoading,
    order: updateOrder,
    error: updateError,
  } = useSelector((state) => state.editOrder);

  const dispatch = useDispatch();

  useEffect(() => {
    if (orderId) {
      dispatch(getOrder(orderId));
    }
  }, [orderId, dispatch]);

  const displayRazorpay = async (order) => {
    const response = await loadRazorpay(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!response) {
      alert("Failed to load Razorpay SDK. Please try again later.");
      return;
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      amount: order.totalAmount,
      currency: "INR",
      name: "Local Shopers",
      description: "Payment for your order on Local Shoppers",
      image:
        "https://local-shoppers-dev.s3.ap-south-1.amazonaws.com/logo/Local+Shopers.png",
      order_id: order.paymentInfo.paymentId,
      handler: (response) => {
        dispatch(
          editOrder(
            {
              status: order.status,
              paymentInfo: { status: "Paid", paidAt: new Date(Date.now()) },
            },
            order._id
          )
        );
      },
      prefill: {
        name: order.user.name,
        email: order.user.email,
        contact: order.user.mobile,
        method: order.paymentMethod,
      },
      theme: {
        color: "#4E46E5",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  if (updateOrder) {
    return (
      <Navigate
        to={generateRoute(routes.getOrder, { ":orderId": updateOrder._id })}
      />
    );
  }

  return (
    <main>
      <HeaderContainer>
        <h1>Order Payment</h1>
      </HeaderContainer>
      <section className="container max-w-lg">
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
            {
              name: "payment",
              to: "",
            },
          ]}
        />
        <div className="flex justify-center">
          {(updateLoading || loading) && <Loader />}
          {(updateError || error) && <Error />}
        </div>
        <Card className="border shadow-lg">
          {order && (
            <div>
              <div>
                <ul>
                  <li className="flex justify-between items-center border-b mb-5">
                    <p>Order ID:</p> <p className="uppercase">{order._id}</p>
                  </li>
                  <li className="flex justify-between items-center border-b mb-5">
                    <p>Payment Status:</p>{" "}
                    <p
                      className={
                        order.paymentInfo.status === "Paid"
                          ? "text-green-600"
                          : "text-red-500"
                      }
                    >
                      {order.paymentInfo.status}
                    </p>
                  </li>
                  {order.paymentInfo.status === "Paid" ? (
                    <>
                      <li className="flex justify-between items-center">
                        <p>Payment At:</p>{" "}
                        <p> {moment(order.paymentInfo.paidAt).fromNow()}</p>
                      </li>
                    </>
                  ) : (
                    <li>
                      <Button
                        className="w-full"
                        onClick={async () => await displayRazorpay(order)}
                      >
                        Pay ₹ {order.totalAmount}
                      </Button>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          )}
        </Card>
      </section>
    </main>
  );
};

export default OrderPaymentPage;
