import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { adminLogout } from "../../actions/adminActions";
import { sellerLogout } from "../../actions/sellerActions";
import { userLogout } from "../../actions/userActions";
import routes from "../../utils/routes";
import { HiOutlineShoppingCart, HiOutlineUserCircle } from "react-icons/hi";

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
            className="flex items-center space-x-1 py-4 px-2 font-bold text-lg hover:text-indigo-500 transition duration-30"
            to="/users/account"
          >
            <HiOutlineUserCircle className="h-6 w-6" />
            <p>Account</p>
          </Link>
          <Link
            className="flex items-center space-x-1 py-4 px-2 font-bold text-lg hover:text-indigo-500 transition duration-30"
            to="/users/cart"
          >
            <HiOutlineShoppingCart className="h-6 w-6" />
            <p>Cart</p>
          </Link>
          <button
            className="py-2 px-3 font-bold text-lg bg-indigo-500 rounded-lg text-white hover:text-indigo-400 transition duration-30"
            onClick={handleUserLogout}
          >
            Log Out
          </button>
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
            to={routes.login}
          >
            Log In
          </Link>
          <Link
            className="py-2 px-4  bg-indigo-500 text-white rounded-lg font-bold text-lg hover:text-indigo-400 transition duration-300"
            to={routes.signup}
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
          <Link
            to={userInfo ? "/users/account" : "/"}
            className="flex items-center space-x-1"
          >
            <HiOutlineShoppingCart className="h-8 w-8" />
            <span className="text-2xl font-bold ">Local Shoppers</span>
          </Link>
        </div>
        <div className="hidden lg:flex space-x-2 items-center">
          {renderNavigationLinks()}
        </div>
      </section>
    </nav>
  );
};

export default Navigation;
