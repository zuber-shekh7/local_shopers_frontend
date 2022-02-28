import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/core/HomePage";
import AboutUsPage from "./pages/core/AboutUsPage";
import NotFoundPage from "./pages/core/NotFoundPage";
import Navigation from "./components/shared/Navigation";
import Footer from "./components/shared/Footer";
import LoginPage from "./pages/users/LoginPage";
import SignupPage from "./pages/users/SignupPage";
import UserDashboardPage from "./pages/users/DashboardPage";
import UserProtectedRoute from "./components/routes/UserProtectedRoute";
import UserProfilePage from "./pages/users/ProfilePage";
import EditUserProfilePage from "./pages/users/EditProfilePage";
import BusinessPage from "./pages/business/BusinessPage";
import WishListPage from "./pages/wishlist/WishListPage";
import AddressesPage from "./pages/addresses/AddressesPage";
import AddAddressPage from "./pages/addresses/AddAddressPage";
import EditAddressPage from "./pages/addresses/EditAddressPage";
import AddressPage from "./pages/addresses/AddressPage";
import UserCategoryPage from "./pages/categories/users/CategoryPage";
import UserProductPage from "./pages/products/users/ProductPage";
import CartPage from "./pages/cart/CartPage";
import ShippingPage from "./pages/checkout/ShippingPage";
import PaymentMethodPage from "./pages/checkout/PaymentMethodPage";
import OrderSummaryPage from "./pages/checkout/OrderSummaryPage";
import UserOrdersPage from "./pages/orders/UserOrdersPage";
import UserOrderPage from "./pages/orders/UserOrderPage";
import routes from "./utils/routes";

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          {/* core */}
          <Route path={routes.home} component={HomePage} exact />
          <Route path={routes.about} component={AboutUsPage} exact />
          <Route path={`${routes.cart}/:product_id?`} component={CartPage} />
          <Route
            path="/business/:business_id/categories/:category_id"
            component={UserCategoryPage}
          />
          <Route
            path="/business/products/:product_id"
            component={UserProductPage}
          />
          <Route path="/business/:business_id" component={BusinessPage} />
          {/* user */}
          <Route path={routes.login} component={LoginPage} exact />
          <Route path={routes.signup} component={SignupPage} exact />
          <UserProtectedRoute
            path="/users/account"
            component={UserDashboardPage}
            exact
          />
          <UserProtectedRoute
            path="/users/profile"
            component={UserProfilePage}
            exact
          />
          <UserProtectedRoute
            path="/checkout/shipping"
            component={ShippingPage}
            exact
          />
          <UserProtectedRoute
            path="/checkout/payment"
            component={PaymentMethodPage}
            exact
          />
          <UserProtectedRoute
            path="/checkout/order-summary"
            component={OrderSummaryPage}
            exact
          />
          <UserProtectedRoute
            path="/users/profile/edit"
            component={EditUserProfilePage}
            exact
          />
          <UserProtectedRoute
            path="/users/wishlist/:product_id?"
            component={WishListPage}
            exact
          />
          <UserProtectedRoute
            path="/users/addresses"
            component={AddressesPage}
            exact
          />
          <UserProtectedRoute
            path="/users/addresses/new"
            component={AddAddressPage}
            exact
          />
          <UserProtectedRoute
            path="/users/addresses/:address_id/edit"
            component={EditAddressPage}
          />
          <UserProtectedRoute
            path="/users/addresses/:address_id"
            component={AddressPage}
          />
          {/* orders */}
          <UserProtectedRoute
            path="/users/orders/"
            component={UserOrdersPage}
            exact
          />
          <UserProtectedRoute
            path="/users/orders/:order_id"
            component={UserOrderPage}
          />
          {/* 404 */}
          <Route path={routes.notFound} component={NotFoundPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
