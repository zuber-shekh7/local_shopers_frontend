const routes = {
  home: "/",
  about: "/about",
  login: "/login",
  signup: "/signup",
  contact: "/contact-us",
  privacyPolicy: "/privacy-policy",
  faq: "/FAQ",
  termsOfService: "/terms-of-service",
  cart: "/users/cart",
  business: "/business/:businessId",
  getCategories: "/business/:businessId/categories/",
  getCategory: "/business/:businessId/categories/:categoryId",
  getProducts: "/business/:businessId/categories/:categoryId/products/",
  getProduct:
    "/business/:businessId/categories/:categoryId/products/:productId",
  notFound: "*",
  dashboard: "/users/account",
  settings: "/users/settings",
  profile: "/users/profile",
  editProfile: "/users/profile/edit",
  getAddresses: "/users/addresses",
  getAddress: "/users/addresses/:addressId",
  addAddress: "/users/addresses/new",
  editAddress: "/users/addresses/:addressId/edit",
  getOrders: "/users/orders/",
  getOrder: "/users/orders/:orderId",
  wishList: "/users/wishlist",
  changePassword: "/users/settings/change-password",
  forgotPassword: "/users/forgot-password",
  resetPassword: "/users/reset-password/:token",
  deactivateAccount: "/users/settings/deactivate-account",
  checkout: "/checkout/shipping",
  payments: "/checkout/payments",
  orderSummary: "/checkout/order-summary",
  orderSuccess: "/checkout/order/success",
};

export const generateRoute = (str, values) => {
  let route = str;
  for (let key in values) {
    route = route.replace(key, values[key]);
  }
  return route;
};

export default routes;
