import React from "react";
import { Outlet } from "react-router-dom";
import { Offline, Online } from "react-detect-offline";
import Footer from "../shared/Footer";
import OfflineContainer from "./OfflineContainer";
import { Navigation } from "../navigation";
import { ToastContainer } from "react-toastify";

const DefaultContainer = () => {
  return (
    <>
      <Navigation />

      <Online>
        <Outlet />
        <ToastContainer
          position="bottom-center"
          hideProgressBar
          theme="colored"
        />
      </Online>
      <Offline>
        <OfflineContainer />
      </Offline>
      <Footer />
    </>
  );
};

export default DefaultContainer;
