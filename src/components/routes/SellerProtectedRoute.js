import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const SellerProtectedRoute = ({ children, ...rest }) => {
  const { sellerInfo } = useSelector((state) => state.sellerLogin);

  if (!sellerInfo) {
    return <Redirect to="/sellers/login" />;
  }
  return <Route {...rest}>{children}</Route>;
};

export default SellerProtectedRoute;
