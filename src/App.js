import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/core/HomePage";
import AboutUsPage from "./pages/core/AboutUsPage";
import NotFoundPage from "./pages/core/NotFoundPage";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutUsPage} exact />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
