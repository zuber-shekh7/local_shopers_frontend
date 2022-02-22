import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import routes from "../../utils/routes";

const UserProtectedRoute = ({ children, ...rest }) => {
  const { user } = useSelector((state) => state.userLogin);

  if (!user) {
    return <Redirect to={routes.login} />;
  }

  return <Route {...rest}>{children}</Route>;
};

export default UserProtectedRoute;
