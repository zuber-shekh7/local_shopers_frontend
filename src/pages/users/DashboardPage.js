import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import routes from "../../utils/routes";
import {
  HiOutlineFolderOpen,
  HiOutlineUserCircle,
  HiOutlineLocationMarker,
  HiOutlineStar,
} from "react-icons/hi";

const UserDashboardPage = ({ history }) => {
  const { user } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (!user) {
      history.push(routes.login);
    }
  }, [user, history]);

  return (
    <main className="mt-10">
      <section className="max-w-6xl mx-auto px-10">
        <h1 className="text-4xl font-semibold mb-3">Your Account</h1>
        {user && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-2">
            <div className="px-3 py-4 border-2 rounded-lg span-col-1 mb-3 hover:bg-gray-100">
              <Link className="flex space-x-2" to="/users/orders">
                <div className="hidden md:block">
                  <HiOutlineFolderOpen className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-medium">Your Orders</h4>
                  <h6>Track or buy things again</h6>
                </div>
              </Link>
            </div>
            <div className="px-3 py-4 border-2 rounded-lg span-col-1 mb-3 hover:bg-gray-100">
              <Link className="flex space-x-2" to="/users/profile/">
                <div className="hidden md:block">
                  <HiOutlineUserCircle className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-medium">Your Profile</h4>
                  <h6>Edit name, email or mobile number</h6>
                </div>
              </Link>
            </div>

            <div className="px-3 py-4 border-2 rounded-lg span-col-1 mb-3 hover:bg-gray-100">
              <Link className="flex space-x-2" to="/users/addresses">
                <div className="hidden md:block">
                  <HiOutlineLocationMarker className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-medium">Your Addresses</h4>
                  <h6>Edit addresses for orders</h6>
                </div>
              </Link>
            </div>

            <div className="px-3 py-4 border-2 rounded-lg span-col-1 mb-3 hover:bg-gray-100">
              <Link className="flex space-x-2" to="/users/wishlist">
                <div className="hidden md:block">
                  <HiOutlineStar className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-medium">Your Wishlist</h4>
                  <h6>Explore wishlist or buy things</h6>
                </div>
              </Link>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default UserDashboardPage;
