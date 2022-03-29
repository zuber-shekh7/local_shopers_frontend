import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { savePaymentMethod } from "../../actions/cartActions";

const PaymentMethodPage = ({ history }) => {
  const [paymentMethod, setPaymentMethod] = useState("COD");

  const { shippingAddress } = useSelector((state) => state.cart);

  useEffect(() => {
    if (!shippingAddress) {
      history.push("/checkout/shipping");
    }
  }, []);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/checkout/order-summary");
  };

  return (
    <main>
      <section className="m-10 px-10 max-w-6xl mx-auto">
        <section>
          <h2 className="text-4xl font-semibold mb-3">Select payment method</h2>
          <hr className="mb-3" />
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                id="cod"
                type="radio"
                name="COD"
                value="COD"
                checked={paymentMethod === "COD"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />{" "}
              <label htmlFor="cod">COD (Cash on Delivery)</label>
            </div>
            <div className="mb-3">
              <input
                id="upi"
                type="radio"
                name="UPI"
                value="UPI"
                checked={paymentMethod === "UPI"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />{" "}
              <label htmlFor="upi">UPI</label>
            </div>
            <div className="mb-3">
              <input
                id="debit"
                type="radio"
                name="DebitCard"
                value="DebitCard"
                checked={paymentMethod === "DebitCard"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />{" "}
              <label htmlFor="debit">Debit Card</label>
            </div>
            <div className="mb-3">
              <input
                id="credit"
                type="radio"
                name="CreditCard"
                value="CreditCard"
                checked={paymentMethod === "CreditCard"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />{" "}
              <label htmlFor="credit">Credit Card</label>
            </div>
            <div className="mb-3">
              <button
                type="submit"
                className="px-3 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
              >
                Next
              </button>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
};

export default PaymentMethodPage;
