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
    <main className="container">
      <section className="flex justify-center">
        <div className="mt-10 text-center">
          <h1 className="display-1 text-darkBlue font-extrabold">
            Local Shoppers
          </h1>
          <h4 className="text-xl text-darkBlue md:text-3xl lg:text-5xl mt-5 font-bold">
            Online Store For Locals, By Locals
          </h4>
          <div className="flex space-x-2 justify-center mt-5">
            <Link
              to={routes.signup}
              className="btn bg-indigo-600 py-3 px-7 text-xl rounded-full hover:bg-indigo-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
