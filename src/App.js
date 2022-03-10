import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, NotFoundPage } from "./pages/core";
import {
  LoginPage,
  SignupPage,
  DashboardPage,
  ProfilePage,
} from "./pages/users";
import UserOrdersPage from "./pages/orders/UserOrdersPage";
import UserOrderPage from "./pages/orders/UserOrderPage";
import routes from "./utils/routes";
import LoginContainer from "./components/containers/LoginContainer";
import DefaultContainer from "./components/containers/DefaultContainer";
import PrivateRoute from "./components/routes/PrivateRoute";
import CartPage from "./pages/cart/CartPage";
import WishListPage from "./pages/wishlist/WishListPage";
import {
  AddressesPage,
  AddressPage,
  AddAddressPage,
  EditAddressPage,
} from "./pages/addresses";
import EditUserProfilePage from "./pages/users/EditProfilePage";
import { BusinessPage } from "./pages/business";

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
            <Route exact path={routes.business} element={<BusinessPage />} />
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
              path={routes.profile}
              element={
                <PrivateRoute>
                  <ProfilePage />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path={routes.editProfile}
              element={
                <PrivateRoute>
                  <EditUserProfilePage />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path={routes.getOrders}
              element={
                <PrivateRoute>
                  <UserOrdersPage />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.getOrder}
              element={
                <PrivateRoute>
                  <UserOrderPage />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path={routes.wishList}
              element={
                <PrivateRoute>
                  <WishListPage />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path={routes.getAddresses}
              element={
                <PrivateRoute>
                  <AddressesPage />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.getAddress}
              element={
                <PrivateRoute>
                  <AddressPage />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path={routes.addAddress}
              element={
                <PrivateRoute>
                  <AddAddressPage />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.editAddress}
              element={
                <PrivateRoute>
                  <EditAddressPage />
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
