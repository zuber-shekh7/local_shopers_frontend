import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { HiOutlineShoppingCart, HiOutlineUserCircle } from "react-icons/hi";
import { userLogout } from "../../actions/userActions";
import routes from "../../utils/routes";

const Navigation = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userLogin);

  const handleUserLogout = () => {
    dispatch(userLogout());
  };

  return (
    <nav className="bg-white shadow-lg">
      <section className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* logo and brand name */}
        <div>
          <Link
            to={user ? "/users/account" : "/"}
            className="flex items-center space-x-1"
          >
            <HiOutlineShoppingCart className="h-8 w-8" />
            <span className="text-2xl font-bold ">Local Shoppers</span>
          </Link>
        </div>
        <div className="hidden lg:flex space-x-2 items-center">
          {user ? (
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
          ) : (
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
                className="flex items-center space-x-1 py-4 px-2 font-bold text-lg hover:text-indigo-500 transition duration-30"
                to="/users/cart"
              >
                <HiOutlineShoppingCart className="h-6 w-6" />
                <p>Cart</p>
              </Link>
            </>
          )}
        </div>
      </section>
    </nav>
  );
};

export default Navigation;
