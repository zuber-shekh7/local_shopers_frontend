import React from "react";
import { useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Card } from "../../components/cards";
import routes, { generateRoute } from "../../utils/routes";

const OrderSuccessPage = () => {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();
  const orderId = searchParams.get("orderId");

  useEffect(() => {
    if (!orderId) {
      navigate(routes.getOrders);
    }
  }, [orderId, navigate]);

  return (
    <main>
      <section className="container shadow-lg">
        <Card className="bg-green-600 border-0 text-white text-center">
          <h1>🎉 Congratulations !!! 🎉</h1>
          <h3>Your order placed successfully</h3>
          <p>
            Click{" "}
            <Link
              className="underline"
              to={generateRoute(routes.getOrder, { ":orderId": orderId })}
            >
              here
            </Link>{" "}
            to track your order
          </p>
        </Card>
      </section>
    </main>
  );
};

export default OrderSuccessPage;
