import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createOrder } from "../../actions/orderActions";

const OrderSummaryPage = ({ history }) => {
  const { cartItems, shippingAddress, paymentMethod, business } = useSelector(
    (state) => state.cart
  );

  const { user } = useSelector((state) => state.userLogin);
  const { loading, order, error } = useSelector((state) => state.createOrder);

  useEffect(() => {
    if (!paymentMethod) {
      history.push("/checkout/payment");
    }
  }, [paymentMethod, history]);

  useEffect(() => {
    if (order) {
      history.push(`/users/orders/${order._id}`);
    }
  }, [order, history]);

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
        user_id: user._id,
        business_id: business,
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
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="m-10 px-10">
            <h1 className="text-4xl font-semibold mb-3">Order summary</h1>
            <hr className="mb-3" />
            <section>
              <h2 className="text-2xl font-semibold mb-3">Shipping</h2>
              <hr className="mb-3" />
              <p className="text-lg mb-3">
                {shippingAddress.fullName}, {shippingAddress.city},{" "}
                {shippingAddress.state}, {shippingAddress.pincode}
              </p>
              <p className="text-lg mb-3">{shippingAddress.mobileNumber}</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-3">Payment</h2>
              <hr className="mb-3" />
              <p className="text-lg mb-3">{paymentMethod}</p>
            </section>
            <hr className="mb-3" />
            <div>
              <button
                onClick={handlePlaceOrder}
                disabled={cartItems.length === 0}
                className="text-lg px-3 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
              >
                Place Order
              </button>
            </div>
          </div>
          <div className="py-10 px-20 bg-indigo-50 h-screen border-t-2 md:border-l-2 border-indigo-300">
            <section>
              <h4 className="text-indigo-500 text-center text-4xl font-bold mb-10">
                Local Shoppers
              </h4>
              {cartItems.length > 0 && (
                <div>
                  {cartItems.map((item) => {
                    return (
                      <div key={item._id} className="mb-3">
                        <div>
                          <div className="grid grid-cols-12 items-center">
                            <img
                              className="col-span-2 h-12 rounded-lg"
                              src={item.image}
                              alt={item.name}
                            />
                            <div className="col-span-10 flex justify-between">
                              <h3>{item.name}</h3>
                              <h3>₹ {item.qty * item.price}/-</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <hr className="mb-3" />
                  <div>
                    <div className="flex justify-between mb-3">
                      <p>Total items</p>
                      <p>
                        {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                      </p>
                    </div>

                    <div className="flex justify-between mb-3">
                      <p>Subtotal</p>
                      <p>₹ {subTotal}/-</p>
                    </div>

                    <div className="flex justify-between mb-3">
                      <p>Shipping Charges</p>
                      <p>₹ {shippingCharges}/-</p>
                    </div>
                    <hr className="mb-3" />
                    <div className="flex justify-between">
                      <p className="text-3xl font-semibold">Total</p>
                      <p className="text-3xl font-semibold">₹ {totalPrice}/-</p>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OrderSummaryPage;
