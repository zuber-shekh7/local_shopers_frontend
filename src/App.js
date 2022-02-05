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
import SellerHomePage from "./pages/sellers/HomePage";
import UserProtectedRoute from "./components/routes/UserProtectedRoute";
import SellerLoginPage from "./pages/sellers/LoginPage";
import SellerSignupPage from "./pages/sellers/SignupPage";
import AdminLoginPage from "./pages/admin/LoginPage";
import SellerDashboardPage from "./pages/sellers/DashboardPage";
import UserProfilePage from "./pages/users/ProfilePage";
import EditUserProfilePage from "./pages/users/EditProfilePage";
import AdminDashboardPage from "./pages/admin/DashboardPage";
import SellerProtectedRoute from "./components/routes/SellerProtectedRoute";
import AdminProtectedRoute from "./components/routes/AdminProtectedRoute";
import CreateBusinessPage from "./pages/sellers/CreateBusinessPage";
import BusinessDetailPage from "./pages/sellers/BusinessDetailPage";
import CategoriesPage from "./pages/categories/CategoriesPage";
import CategoryPage from "./pages/categories/CategoryPage";
import AddCategoryPage from "./pages/categories/AddCategoryPage";
import EditCategoryPage from "./pages/categories/EditCategoryPage";
import AddProductPage from "./pages/products/AddProductPage";
import ProductPage from "./pages/products/ProductPage";
import EditProductPage from "./pages/products/EditProductPage";
import EditBusinessPage from "./pages/business/EditBusinessPage";
import BusinessPage from "./pages/business/BusinessPage";
import WishListPage from "./pages/wishlist/WishListPage";
import AddressesPage from "./pages/addresses/AddressesPage";
import AddAddressPage from "./pages/addresses/AddAddressPage";
import EditAddressPage from "./pages/addresses/EditAddressPage";
import AddressPage from "./pages/addresses/AddressPage";

import BusinessCategoriesPage from "./pages/businessCategories/BusinessCategoriesPage";
import BusinessCategoryPage from "./pages/businessCategories/BusinessCategoryPage";
import EditBusinessCategoryPage from "./pages/businessCategories/EditBusinessCategoryPage";
import AddBusinessCategoryPage from "./pages/businessCategories/AddBusinessCategoryPage";

import ManageCategoryAdminPage from "./pages/admin/ManageCategoryAdminPage";
import ManageProductAdminPage from "./pages/admin/ManageProductAdminPage";
import ManageSellerAdminPage from "./pages/admin/ManageSellerAdminPage";
import ManageUsersAdminPage from "./pages/admin/ManageUsersAdminPage";
import ManageAdminListPage from "./pages/admin/ManageAdminListPage";
import UserCategoryPage from "./pages/categories/users/CategoryPage";
import UserProductPage from "./pages/products/users/ProductPage";
import CartPage from "./pages/cart/CartPage";
import ShippingPage from "./pages/checkout/ShippingPage";
import PaymentMethodPage from "./pages/checkout/PaymentMethodPage";
import OrderSummaryPage from "./pages/checkout/OrderSummaryPage";
import UserOrdersPage from "./pages/orders/UserOrdersPage";
import UserOrderPage from "./pages/orders/UserOrderPage";
import SellerOrdersPage from "./pages/orders/SellerOrdersPage";
import SellerOrderPage from "./pages/orders/SellerOrderPage";

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          {/* core */}
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutUsPage} exact />
          <Route path="/users/cart/:product_id?" component={CartPage} />
          <Route
            path="/business/:business_id/categories/:category_id"
            component={UserCategoryPage}
          />
          <Route
            path="/business/products/:product_id"
            component={UserProductPage}
          />
          <Route path="/business/:business_id" component={BusinessPage} />
          {/* users */}
          <Route path="/users/login" component={LoginPage} exact />
          <Route path="/users/signup" component={SignupPage} exact />
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
          {/* sellers */}
          <Route path="/sellers/" component={SellerHomePage} exact />
          <Route path="/sellers/login" component={SellerLoginPage} exact />
          <Route path="/sellers/signup" component={SellerSignupPage} exact />
          <SellerProtectedRoute
            path="/sellers/dashboard"
            component={SellerDashboardPage}
            exact
          />
          <SellerProtectedRoute
            path="/sellers/business/new"
            component={CreateBusinessPage}
            exact
          />
          <SellerProtectedRoute
            path="/sellers/business"
            component={BusinessDetailPage}
            exact
          />
          <SellerProtectedRoute
            path="/sellers/manage/business/:business_id/edit"
            component={EditBusinessPage}
          />
          <SellerProtectedRoute
            path="/sellers/manage/categories"
            component={CategoriesPage}
            exact
          />
          <SellerProtectedRoute
            path="/sellers/manage/categories/new"
            component={AddCategoryPage}
            exact
          />
          <SellerProtectedRoute
            path="/sellers/manage/categories/:category_id/edit"
            component={EditCategoryPage}
            exact
          />
          <SellerProtectedRoute
            path="/sellers/manage/categories/:category_id/products/new"
            component={AddProductPage}
            exact
          />
          <SellerProtectedRoute
            path="/sellers/manage/categories/:category_id"
            component={CategoryPage}
          />
          <SellerProtectedRoute
            path="/sellers/manage/products/:product_id/edit"
            component={EditProductPage}
          />
          <SellerProtectedRoute
            path="/sellers/manage/products/:product_id"
            component={ProductPage}
          />
          <SellerProtectedRoute
            path="/manage/orders/"
            component={SellerOrdersPage}
            exact
          />
          <SellerProtectedRoute
            path="/manage/orders/:order_id"
            component={SellerOrderPage}
          />
          {/* admin */}
          <Route path="/admin/login" component={AdminLoginPage} exact />
          <AdminProtectedRoute
            path="/admin/account"
            component={AdminDashboardPage}
            exact
          />
          <Route
            path="/admin/category"
            component={ManageCategoryAdminPage}
            exact
          />
          <AdminProtectedRoute
            path="/admin/categories/:category_id"
            component={ManageProductAdminPage}
            exact
          />
          <AdminProtectedRoute
            path="/admin/sellers"
            component={ManageSellerAdminPage}
            exact
          />
          <AdminProtectedRoute
            path="/admin/users"
            component={ManageUsersAdminPage}
            exact
          />
          <AdminProtectedRoute
            path="/admin/admin"
            component={ManageAdminListPage}
            exact
          />
          <AdminProtectedRoute
            path="/manage/business-categories"
            component={BusinessCategoriesPage}
            exact
          />
          <AdminProtectedRoute
            path="/manage/business-categories/new"
            component={AddBusinessCategoryPage}
            exact
          />
          <AdminProtectedRoute
            path="/manage/business-categories/:category_id/edit"
            component={EditBusinessCategoryPage}
          />
          <AdminProtectedRoute
            path="/manage/business-categories/:category_id"
            component={BusinessCategoryPage}
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
