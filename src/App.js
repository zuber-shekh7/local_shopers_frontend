import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/core/HomePage";
import AboutUsPage from "./pages/core/AboutUsPage";
import NotFoundPage from "./pages/core/NotFoundPage";
import Navigation from "./components/shared/Navigation";
import Footer from "./components/shared/Footer";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import UserProfilePage from "./pages/users/UserProfilePage";
import UserProtectedRoute from "./components/routes/UserProtectedRoute";

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          {/* core */}
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutUsPage} exact />

          {/* auth */}
          <Route path="/auth/login" component={LoginPage} exact />
          <Route path="/auth/signup" component={SignupPage} exact />
          <UserProtectedRoute
            path="/auth/profile"
            component={UserProfilePage}
            exact
          />

          {/* 404 */}
          <Route path="*" component={NotFoundPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
