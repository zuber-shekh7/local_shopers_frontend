import React from "react";
import { Outlet } from "react-router-dom";
import { Offline, Online } from "react-detect-offline";
import Footer from "../shared/Footer";
import Navigation from "../shared/Navigation";
import OfflineContainer from "./OfflineContainer";

const DefaultContainer = () => {
  return (
    <>
      <Navigation />
      <Online>
        <Outlet />
      </Online>
      <Offline>
        <OfflineContainer />
      </Offline>
      <Footer />
    </>
  );
};

export default DefaultContainer;
