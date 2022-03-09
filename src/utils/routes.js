const routes = {
  home: "/",
  about: "/about",
  login: "/login",
  signup: "/signup",
  cart: "/cart",
  notFound: "*",
  dashboard: "/users/account",
  userProfile: "/users/profile",
  editUserProfile: "/users/profile/edit",
  getAddresses: "/users/addresses",
  addAddress: "/users/addresses/new",
  getOrders: "/users/orders/",
  getOrder: "/users/orders/:orderId",
};

export default routes;
