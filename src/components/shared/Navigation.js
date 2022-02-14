import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { adminLogout } from "../../actions/adminActions";
import { sellerLogout } from "../../actions/sellerActions";
import { userLogout } from "../../actions/userActions";

const Navigation = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);
  const { sellerInfo } = useSelector((state) => state.sellerLogin);
  const { adminInfo } = useSelector((state) => state.adminLogin);

  const handleUserLogout = () => {
    dispatch(userLogout());
  };

  const handleSellerLogout = () => {
    dispatch(sellerLogout());
  };

  const handleAdminLogout = () => {
    dispatch(adminLogout());
  };

  const renderNavigationLinks = () => {
    if (userInfo) {
      return (
        <>
          <Link
            className="py-4 px-2 font-bold text-lg hover:text-indigo-500 transition duration-30"
            to="/users/account"
          >
            Your Account
          </Link>
          <Link
            className="py-4 px-2 font-bold text-lg hover:text-indigo-500 transition duration-30"
            to="/users/cart"
          >
            Cart
          </Link>
          <Link
            className="py-4 px-2 font-bold text-lg hover:text-indigo-500 transition duration-30"
            onClick={handleUserLogout}
          >
            Log Out
          </Link>
        </>
      );
    } else if (sellerInfo) {
      return (
        <>
          <Link
            className="py-4 px-2 font-bold text-lg hover:text-indigo-500 transition duration-30"
            to="/sellers/dashboard"
          >
            Your Account
          </Link>

          <Link
            className="py-4 px-2 font-bold text-lg hover:text-indigo-500 transition duration-30"
            onClick={handleSellerLogout}
          >
            Log Out
          </Link>
        </>
      );
    } else if (adminInfo) {
      return (
        <>
          <Link
            className="py-4 px-2 font-bold text-lg hover:text-indigo-500 transition duration-30"
            to="/admin/account"
          >
            Your Account
          </Link>

          <Link
            className="py-4 px-2 font-bold text-lg hover:text-indigo-500 transition duration-30"
            onClick={handleAdminLogout}
          >
            Log Out
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link
            className="py-2 px-4  bg-indigo-500 text-white rounded-lg font-bold text-lg hover:text-indigo-400 transition duration-300"
            to="/users/login"
          >
            Log In
          </Link>
          <Link
            className="py-2 px-4  bg-indigo-500 text-white rounded-lg font-bold text-lg hover:text-indigo-400 transition duration-300"
            to="/users/signup"
          >
            Sign Up
          </Link>
          <Link
            className="py-4 px-2 font-bold text-lg hover:text-indigo-500 transition duration-30"
            to="/users/cart"
          >
            Cart
          </Link>
        </>
      );
    }
  };
  return (
    <nav className="bg-white shadow-lg">
      <section className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* logo and brand name */}
        <div>
          <Link to="/" className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span className="text-2xl font-bold ">Local Shoppers</span>
          </Link>
        </div>
        {/* links */}
        {/* <div className="hidden lg:flex space-x-2 items-center">
          <Link
            to="/"
            className="py-4 px-2 font-bold text-lg hover:text-indigo-500 transition duration-30"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="py-4 px-2 font-bold text-lg hover:text-indigo-500 transition duration-30"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="py-4 px-2 font-bold text-lg hover:text-indigo-500 transition duration-30"
          >
            Contact Us
          </Link>
          <Link
            to="/users/login"
            className="py-2 px-4  bg-indigo-500 text-white rounded-lg font-bold text-lg hover:text-indigo-400 transition duration-300"
          >
            Log In
          </Link>
          <Link
            to="/users/signup"
            className="py-2 px-4 bg-indigo-500 text-white rounded-lg font-bold text-lg hover:text-indigo-400 transition duration-300"
          >
            Sign Up
          </Link>
        </div> */}
        <div className="hidden lg:flex space-x-2 items-center">
          {renderNavigationLinks()}
        </div>
      </section>
    </nav>
  );
};

export default Navigation;
