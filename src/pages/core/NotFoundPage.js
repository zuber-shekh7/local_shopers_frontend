import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "../../assets/images/404.png";

const NotFoundPage = () => {
  return (
    <main className="mt-10 flex flex-col items-center">
      <h1 className="text-2xl lg:text-4xl">
        Look like you are lost, let me help to go home
      </h1>

      <img className="w-80" src={NotFoundImage} alt="404 Not Found" />

      <div className="mt-5">
        <Link
          className="py-3 px-3 bg-indigo-500 text-white rounded-lg text-bold text-lg hover:text-indigo-400 transition duration-300"
          to="/"
        >
          Way to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
