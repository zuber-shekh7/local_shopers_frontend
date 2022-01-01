import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const UserProtectedRoute = ({ children, ...rest }) => {
  const { userInfo } = useSelector((state) => state.userLogin);

  if (!userInfo) {
    return <Redirect to="/users/login" />;
  }

  return <Route {...rest}>{children}</Route>;
};

export default UserProtectedRoute;
