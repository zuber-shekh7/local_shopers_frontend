import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import routes from "../../utils/routes";

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.userLogin);

  return user ? children : <Navigate to={routes.login} />;
};

export default PrivateRoute;
