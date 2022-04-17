import React, { useEffect } from "react";
import {
  HiOutlineChevronRight,
  HiOutlineCash,
  HiOutlineCreditCard,
  HiOutlineDeviceMobile,
} from "react-icons/hi";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../../actions/cartActions";
import { Card } from "../../components/cards";
import Breadcrumb from "../../components/shared/Breadcrumb";
import HeaderContainer from "../../components/shared/HeaderContainer";
import routes from "../../utils/routes";

const PaymentsPage = () => {
  const { shippingAddress } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!shippingAddress) {
      navigate(routes.shipping);
    }
  }, [navigate, shippingAddress]);

  const handleClick = (paymentMethod) => {
    dispatch(savePaymentMethod(paymentMethod));
    navigate(routes.orderSummary);
  };

  return (
    <main>
      <HeaderContainer>
        <h1>Select Payment Method</h1>
      </HeaderContainer>
      <section className="container max-w-2xl">
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
              to: "",
            },
          ]}
        />
        <Card className="border shadow-lg py-0 px-0">
          <div className="flex flex-col">
            <div
              onClick={() => handleClick("Credit Card")}
              className="flex justify-between items-center hover:bg-indigo-50 hover:cursor-pointer p-5"
            >
              <h4 className="flex justify-center items-center space-x-2 mb-0">
                <HiOutlineCreditCard className="h-12 w-12" />
                <span>Credit Card</span>
              </h4>

              <div>
                <HiOutlineChevronRight className="h-6 w-6" />
              </div>
            </div>

            <div
              onClick={() => handleClick("Debit Card")}
              className="flex justify-between items-center hover:bg-indigo-50 hover:cursor-pointer p-5"
            >
              <h4 className="flex justify-center items-center space-x-2 mb-0">
                <HiOutlineCreditCard className="h-12 w-12" />
                <span>Debit Card</span>
              </h4>

              <div>
                <HiOutlineChevronRight className="h-6 w-6" />
              </div>
            </div>
            <div
              onClick={() => handleClick("UPI")}
              className="flex justify-between items-center hover:bg-indigo-50 hover:cursor-pointer p-5"
            >
              <h4 className="flex justify-center items-center space-x-2 mb-0">
                <HiOutlineDeviceMobile className="h-12 w-12" />
                <span>UPI</span>
              </h4>

              <div>
                <HiOutlineChevronRight className="h-6 w-6" />
              </div>
            </div>
            <div
              onClick={() => handleClick("Cash on delivery")}
              className="flex justify-between items-center hover:bg-indigo-50 hover:cursor-pointer p-5"
            >
              <h4 className="flex justify-center items-center space-x-2 mb-0">
                <HiOutlineCash className="h-12 w-12" />
                <span>Cash on delivery</span>
              </h4>

              <div>
                <HiOutlineChevronRight className="h-6 w-6" />
              </div>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
};

export default PaymentsPage;
