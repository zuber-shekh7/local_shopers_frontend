import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../utils/routes";

const HomePage = () => {
  const { user } = useSelector((state) => state.userLogin);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(routes.dashboard);
    }
  }, [user, navigate]);

  return (
    <main>
      {/* hero section */}
      <section className="grid grid-cols-1">
        <div className="grid-span-1 p-20 space-y-4 mx-auto text-center">
          <h1 className="text-indigo-500 text-5xl md:text-7xl lg:text-9xl font-extrabold">
            Local Shoppers
          </h1>
          <h4 className="text-xl md:text-3xl lg:text-5xl text-gray-600 mt-5">
            Online Store For Locals, By Locals
          </h4>
          <div className="flex space-x-2 justify-center">
            <Link
              to={routes.login}
              className="inline-block py-3 px-4 text-xl hover:bg-indigo-400 bg-indigo-500 rounded-lg text-white shadow-lg"
            >
              Log In
            </Link>
            <Link
              to={routes.signup}
              className="inline-block py-3 px-4 text-xl hover:bg-indigo-400 bg-indigo-500 rounded-lg text-white shadow-lg"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
