const routes = {
  home: "/",
  about: "/about",
  login: "/login",
  signup: "/signup",
  cart: "/cart",
  notFound: "*",
  dashboard: "/users/account",
  profile: "/users/profile",
  editProfile: "/users/profile/edit",
  getAddresses: "/users/addresses",
  getAddress: "/users/addresses/:addressId",
  addAddress: "/users/addresses/new",
  editAddress: "/users/addresses/:addressId/edit",
  getOrders: "/users/orders/",
  getOrder: "/users/orders/:orderId",
  wishList: "/users/wishlist",
};

export default routes;
