import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Look like you are lost, let me help to go home</h1>
      <Link to="/">Way To Home</Link>
    </div>
  );
};

export default NotFoundPage;
