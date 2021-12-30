import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main className="mt-4 text-center">
      <h1>Look like you are lost, let me help to go home</h1>
      <Link className="btn btn-primary" to="/">
        Way To Home
      </Link>
    </main>
  );
};

export default NotFoundPage;
