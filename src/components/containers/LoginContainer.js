import React from "react";
import { Offline, Online } from "react-detect-offline";
import { Outlet } from "react-router-dom";
import OfflineContainer from "./OfflineContainer";

const LoginContainer = () => {
  return (
    <main>
      <Online>
        <Outlet />
      </Online>
      <Offline>
        <OfflineContainer />
      </Offline>
    </main>
  );
};

export default LoginContainer;
