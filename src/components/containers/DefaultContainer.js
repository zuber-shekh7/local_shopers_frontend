import React from "react";
import { Outlet } from "react-router-dom";
import { Offline, Online } from "react-detect-offline";
import Footer from "../shared/Footer";
import OfflineContainer from "./OfflineContainer";
import { Navigation } from "../navigation";

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
