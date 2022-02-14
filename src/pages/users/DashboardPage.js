import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserDashboardPage = ({ history }) => {
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (!userInfo) {
      history.push("/users/login");
    }
  }, [userInfo, history]);

  return (
    <main className="mt-10">
      <section className="px-10">
        <h1 className="text-4xl font-bold mb-3">Your Account</h1>
        {userInfo && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-2">
            <div className="px-3 py-4 border-2 rounded-lg span-col-1 mb-3 hover:bg-gray-100">
              <Link to="/users/orders">
                <h4 className="text-2xl font-medium">Your Orders</h4>
                <h6>Track or buy things again</h6>
              </Link>
            </div>
            <div className="px-3 py-4 border-2 rounded-lg span-col-1 mb-3 hover:bg-gray-100">
              <Link to="/users/profile/">
                <h4 className="text-2xl font-medium">Your Profile</h4>
                <h6>Edit name, email or mobile number</h6>
              </Link>
            </div>

            <div className="px-3 py-4 border-2 rounded-lg span-col-1 mb-3 hover:bg-gray-100">
              <Link to="/users/addresses">
                <h4 className="text-2xl font-medium">Your Addresses</h4>
                <h6>Edit addresses for orders</h6>
              </Link>
            </div>

            <div className="px-3 py-4 border-2 rounded-lg span-col-1 mb-3 hover:bg-gray-100">
              <Link to="/users/wishlist">
                <h4 className="text-2xl font-medium">Your Wishlist</h4>
                <h6>Explore wishlist or buy things</h6>
              </Link>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default UserDashboardPage;
