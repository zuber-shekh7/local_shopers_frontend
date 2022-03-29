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
import { getCategoryReducer } from "./categoryReducers";
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
  sendPasswordResetEmailReducer,
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
  getUser: { user: null },
  updateUser: { user: null },
  getCategory: { category: null },
  getProduct: { product: null },
  getBusiness: { business: null },
  getWishlist: { wishlist: null },
  addToWishlist: { wishlist: null },
  removeFromWishlist: { wishlist: null },
  getAddresses: { addresses: null },
  getAddress: { address: null },
  createAddress: { address: null },
  editAddress: { address: null },
  deleteAddress: { success: null },
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
  getOrder: { order: null },
  getOrders: { orders: null },
  changePassword: { success: null },
  sendPasswordResetEmail: { success: null },
  resetPassword: { success: null },
};

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userSignup: userSignupReducer,
  getUser: getUserReducer,
  updateUser: updateUserReducer,
  getCategory: getCategoryReducer,
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
  sendPasswordResetEmail: sendPasswordResetEmailReducer,
  resetPassword: resetPasswordReducer,
});

export { initialState };

export default rootReducer;
