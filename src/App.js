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
import CategoryListPage from "./pages/categories/CategoryListPage";
import CategoryDetailPage from "./pages/categories/CategoryDetailPage";
import AddCategoryPage from "./pages/categories/AddCategoryPage";
import EditCategoryPage from "./pages/categories/EditCategoryPage";
import AddProductPage from "./pages/products/AddProductPage";
import ProductDetailPage from "./pages/products/ProductDetailPage";
import EditProductPage from "./pages/products/EditProductPage";
import EditBusinessPage from "./pages/business/EditBusinessPage";
import BusinessPage from "./pages/business/BusinessPage";
import WishListPage from "./pages/wishlist/WishListPage";
import AddressesPage from "./pages/addresses/AddressesPage";
import AddAddressPage from "./pages/addresses/AddAddressPage";
import EditAddressPage from "./pages/addresses/EditAddressPage";
import AddressPage from "./pages/addresses/AddressPage";
import ManageCategoryAdminPage from "./pages/admin/ManageCategoryAdminPage";
import ManageProductAdminPage from "./pages/admin/ManageProductAdminPage";
import ManageSellerAdminPage from "./pages/admin/ManageSellerAdminPage";
import ManageUsersAdminPage from "./pages/admin/ManageUsersAdminPage";
import ManageAdminListPage from "./pages/admin/ManageAdminListPage";
import ManageBusinessCategoryPage from "./pages/admin/ManageBusinessCategoryPage";

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          {/* core */}
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutUsPage} exact />
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
            path="/users/profile/edit"
            component={EditUserProfilePage}
            exact
          />
          <UserProtectedRoute
            path="/users/wishlist"
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
            component={CategoryListPage}
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
            component={CategoryDetailPage}
          />
          <SellerProtectedRoute
            path="/sellers/manage/products/:product_id/edit"
            component={EditProductPage}
          />
          <SellerProtectedRoute
            path="/sellers/manage/products/:product_id"
            component={ProductDetailPage}
          />

          {/* admin */}
          <Route path="/admin/login" component={AdminLoginPage} exact />
          <AdminProtectedRoute
            path="/admin/account"
            component={AdminDashboardPage}
            exact
          />
          <AdminProtectedRoute
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
            path="/admin/business/category"
            component={ManageBusinessCategoryPage}
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
