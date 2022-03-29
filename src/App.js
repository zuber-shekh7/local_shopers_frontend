import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  AboutUsPage,
  ContactUsPage,
  HomePage,
  NotFoundPage,
  PrivacyPolicyPage,
  TermsOfServicePage,
  FAQPage,
} from "./pages/core";
import {
  LoginPage,
  SignupPage,
  DashboardPage,
  ProfilePage,
  ChangePasswordPage,
  ForgotPasswordPage,
  ResetPasswordPage,
} from "./pages/users";
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
import { CategoryPage } from "./pages/categories";
import { OrderPage, OrdersPage } from "./pages/orders";
import ProductPage from "./pages/products/ProductPage";

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
            <Route exact path={routes.contact} element={<ContactUsPage />} />
            <Route exact path={routes.about} element={<AboutUsPage />} />
            <Route exact path={routes.faq} element={<FAQPage />} />
            <Route
              exact
              path={routes.termsOfService}
              element={<TermsOfServicePage />}
            />
            <Route
              exact
              path={routes.privacyPolicy}
              element={<PrivacyPolicyPage />}
            />
            <Route
              exact
              path={routes.forgotPassword}
              element={<ForgotPasswordPage />}
            />
            <Route
              exact
              path={routes.resetPassword}
              element={<ResetPasswordPage />}
            />
            <Route exact path={routes.getProduct} element={<ProductPage />} />
            <Route exact path={routes.categories} element={<CategoryPage />} />
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
              path={routes.changePassword}
              element={
                <PrivateRoute>
                  <ChangePasswordPage />
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
                  <OrdersPage />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.getOrder}
              element={
                <PrivateRoute>
                  <OrderPage />
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
              path={`${routes.wishList}/:productId`}
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
            <Route path={routes.cart} element={<CartPage />} />
            <Route path={`${routes.cart}/:productId`} element={<CartPage />} />
            <Route exact path={routes.notFound} element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
