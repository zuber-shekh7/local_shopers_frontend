import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/core/HomePage";
import Navigation from "./components/shared/Navigation";
import Footer from "./components/shared/Footer";

import routes from "./utils/routes";

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path={routes.home} element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
