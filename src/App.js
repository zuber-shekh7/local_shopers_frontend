import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/core/HomePage";
import LoginPage from "./pages/users/LoginPage";
import routes from "./utils/routes";
import LoginContainer from "./components/containers/LoginContainer";
import DefaultContainer from "./components/containers/DefaultContainer";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<DefaultContainer />}>
            <Route exact path={routes.home} element={<HomePage />} />
          </Route>
          <Route element={<LoginContainer />}>
            <Route exact path={routes.login} element={<LoginPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
