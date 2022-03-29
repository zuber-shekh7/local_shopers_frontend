import { combineReducers } from "redux";
import {
  createAddressReducer,
  deleteAddressReducer,
  editAddressReducer,
  getAddressesReducer,
  getAddressReducer,
} from "./addressReducers";
import { getBusinessReducer } from "./businessReducers";
import { cartReducer } from "./cartReducers";
import { getCategoryDetailsReducer } from "./categoryReducers";
import {
  createOrderReducer,
  getOrdersReducer,
  getOrderReducer,
} from "./orderReducers";
import { getProductReducer } from "./productReducers";
import {
  updateUserReducer,
  getUserReducer,
  userLoginReducer,
  userSignupReducer,
  changePasswordReducer,
  sentPasswordResetEmailReducer,
  resetPasswordReducer,
} from "./userReducers";
import {
  addToWishlistReducer,
  getWishlistReducer,
  removeFromWishlistReducer,
} from "./wishListReducers";

const initialState = {
  userLogin: {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user", null))
      : null,
    token: localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token", null))
      : null,
  },
  userSignup: {},
  sellerLogin: {
    sellerInfo: localStorage.getItem("sellerInfo")
      ? JSON.parse(localStorage.getItem("sellerInfo", null))
      : null,
  },
  sellerSignup: {},
  getSeller: {
    seller: localStorage.getItem("seller")
      ? JSON.parse(localStorage.getItem("seller", null))
      : null,
  },
  getUser: { user: null },
  updateUser: { user: null },
  adminLogin: {
    adminInfo: localStorage.getItem("adminInfo")
      ? JSON.parse(localStorage.getItem("adminInfo", null))
      : null,
  },
  getCategories: { categories: null },
  getCategoryDetails: { category: null },
  createCategory: { category: null },
  editCategory: { category: null },
  deleteCategory: { success: null },
  createProduct: { product: null },
  getProduct: { product: null },
  editProduct: { product: null },
  deleteProduct: { success: null },
  createBusiness: { success: null },
  getBusiness: { business: null },
  editBusiness: { business: null },
  getWishlist: { wishlist: null },
  addToWishlist: { wishlist: null },
  removeFromWishlist: { wishlist: null },
  getAddresses: { addresses: null },
  getAddress: { address: null },
  createAddress: { address: null },
  editAddress: { address: null },
  deleteAddress: { success: null },
  getBusinessCategories: { businessCategories: null },
  createBusinessCategory: { businessCategory: null },
  getBusinessCategory: { businessCategory: null },
  editBusinessCategory: { businessCategory: null },
  deleteBusinessCategory: { success: null },
  getCummulativeStats: { stats: null },
  getManageCategory: { categoryDetails: null },
  getAdminProductList: { productList: null },
  getSellerDetails: { sellersList: null },
  getUsersDetails: { usersList: null },
  getAdminList: { adminList: null },
  getBusinessCategoryList: { businessCategoryList: null },
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems", []))
      : [],
    shippingAddress: localStorage.getItem("shippingAddress")
      ? JSON.parse(localStorage.getItem("shippingAddress", null))
      : null,
    paymentMethod: localStorage.getItem("paymentMethod")
      ? localStorage.getItem("paymentMethod")
      : null,
    business: localStorage.getItem("business")
      ? localStorage.getItem("business")
      : null,
  },
  createOrder: { order: null },
  getUserOrder: { order: null },
  getUserOrders: { orders: null },
  getSellerOrders: { orders: null },
  getSellerOrder: { order: null },
  updateOrderStatus: { order: null },
  changePassword: { success: null },
  sentPasswordResetEmail: { success: null },
  resetPassword: { success: null },
};

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userSignup: userSignupReducer,
  getUser: getUserReducer,
  updateUser: updateUserReducer,
  getCategoryDetails: getCategoryDetailsReducer,
  getProduct: getProductReducer,
  getBusiness: getBusinessReducer,
  getWishlist: getWishlistReducer,
  addToWishlist: addToWishlistReducer,
  removeFromWishlist: removeFromWishlistReducer,
  getAddresses: getAddressesReducer,
  getAddress: getAddressReducer,
  createAddress: createAddressReducer,
  editAddress: editAddressReducer,
  deleteAddress: deleteAddressReducer,
  cart: cartReducer,
  createOrder: createOrderReducer,
  getOrder: getOrderReducer,
  getOrders: getOrdersReducer,
  changePassword: changePasswordReducer,
  sentPasswordResetEmail: sentPasswordResetEmailReducer,
  resetPassword: resetPasswordReducer,
});

export { initialState };

export default rootReducer;
