import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../shared/Footer";
import Navigation from "../shared/Navigation";

const DefaultContainer = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultContainer;
