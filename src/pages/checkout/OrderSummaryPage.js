import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createOrder } from "../../actions/orderActions";
import { Button } from "../../components/buttons";
import { Card } from "../../components/cards";
import { Loader } from "../../components/loaders";
import { Error } from "../../components/messages";
import Breadcrumb from "../../components/shared/Breadcrumb";
import HeaderContainer from "../../components/shared/HeaderContainer";
import routes, { generateRoute } from "../../utils/routes";

const OrderSummaryPage = () => {
  const { cartItems, shippingAddress, paymentMethod, businessId } = useSelector(
    (state) => state.cart
  );

  const { user } = useSelector((state) => state.userLogin);
  const { loading, order, error } = useSelector((state) => state.createOrder);

  const navigate = useNavigate();

  useEffect(() => {
    if (!paymentMethod) {
      navigate.push(routes.payments);
    }
  }, [paymentMethod, navigate]);

  useEffect(() => {
    if (order) {
      navigate(generateRoute(routes.getOrder, { ":orderId": order._id }));
    }
  }, [order, navigate]);

  const subTotal = Number(
    cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  const tax = 0;
  const shippingCharges = 100;
  const totalPrice = Number(subTotal + tax + shippingCharges).toFixed(2);

  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    dispatch(
      createOrder({
        userId: user._id,
        businessId: businessId,
        orderItems: cartItems,
        paymentMethod,
        shippingAddress,
        totalPrice,
        tax,
        shippingCharges,
      })
    );
  };

  return (
    <main>
      <HeaderContainer>
        <h1>Order Summary</h1>
      </HeaderContainer>
      <section className="container">
        <Breadcrumb
          links={[
            {
              name: "Back to cart",
              to: routes.cart,
            },
            {
              name: "shipping",
              to: routes.checkout,
            },
            {
              name: "payments",
              to: routes.payments,
            },
            {
              name: "order summary",
              to: routes.orderSummary,
            },
          ]}
        />
        <div className="flex justify-center">
          {loading && <Loader />}
          {error && <Error />}
        </div>
        <Card className="border shadow-lg">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-4">
              <h2>
                Shipping Address{" "}
                <sub>
                  <Link
                    className="text-indigo-600 text-xs"
                    to={routes.checkout}
                  >
                    <span>Change</span>
                  </Link>
                </sub>
              </h2>
              <hr />
              <p>
                {shippingAddress.fullName}, {shippingAddress.city},{" "}
                {shippingAddress.state}, {shippingAddress.pincode}
              </p>
              <p>{shippingAddress.mobileNumber}</p>
            </div>
            <div className="col-span-12 md:col-span-4">
              <h2>
                Payment Method{" "}
                <sub>
                  <Link
                    className="text-indigo-600 text-xs"
                    to={routes.payments}
                  >
                    <span>Change</span>
                  </Link>
                </sub>
              </h2>
              <hr />
              <p>{paymentMethod}</p>
            </div>

            {/* <div>
                
              </div> */}

            <div className="col-span-12 md:col-span-4">
              <h2>Order Summary</h2>
              <hr />
              {cartItems.length > 0 && (
                <div>
                  <div>
                    <div className="flex justify-between">
                      <strong>Total items</strong>
                      <p>
                        {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <strong>Subtotal</strong>
                      <p>₹ {subTotal}/-</p>
                    </div>

                    <div className="flex justify-between">
                      <strong>Shipping Charges</strong>
                      <p>₹ {shippingCharges}/-</p>
                    </div>
                    <hr />
                    <div className="flex justify-between">
                      <p className="text-3xl font-semibold">Total</p>
                      <p className="text-3xl font-semibold text-indigo-600">
                        ₹ {totalPrice}/-
                      </p>
                    </div>
                    <Button
                      onClick={handlePlaceOrder}
                      disabled={cartItems.length === 0}
                      className="w-full"
                    >
                      Place your order
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
};

export default OrderSummaryPage;
