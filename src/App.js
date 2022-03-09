import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, NotFoundPage } from "./pages/core";
import { LoginPage, SignupPage, DashboardPage } from "./pages/users";
import UserOrdersPage from "./pages/orders/UserOrdersPage";
import routes from "./utils/routes";
import LoginContainer from "./components/containers/LoginContainer";
import DefaultContainer from "./components/containers/DefaultContainer";
import PrivateRoute from "./components/routes/PrivateRoute";
import CartPage from "./pages/cart/CartPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<LoginContainer />}>
            <Route exact path={routes.login} element={<LoginPage />} />
            <Route exact path={routes.signup} element={<SignupPage />} />
          </Route>
          <Route element={<DefaultContainer />}>
            <Route exact path={routes.home} element={<HomePage />} />
            <Route
              exact
              path={routes.dashboard}
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path={routes.getOrder}
              element={
                <PrivateRoute>
                  <UserOrdersPage />
                </PrivateRoute>
              }
            />
            <Route exact path={routes.cart} element={<CartPage />} />
            <Route exact path={routes.notFound} element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
