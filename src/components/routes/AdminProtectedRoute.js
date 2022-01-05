import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const AdminProtectedRoute = ({ children, ...rest }) => {
  const { adminInfo } = useSelector((state) => state.adminLogin);

  if (!adminInfo) {
    return <Redirect to="/admin/login" />;
  }

  return <Route {...rest}>{children}</Route>;
};

export default AdminProtectedRoute;
