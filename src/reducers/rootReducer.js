import { combineReducers } from "redux";
import {
  createAddressReducer,
  deleteAddressReducer,
  editAddressReducer,
  getAddressesReducer,
  getAddressReducer,
} from "./addressReducers";
import {
  adminLoginReducer,
  adminManageCategoryStatisticsReducer,
  adminManageProductStatisticsReducer,
  adminGetSellerListReducer,
  adminGetUsersListReducer,
  adminGetAdminListReducer,
  adminGetBusinessCategoryListReducer,
  adminCummulativeStatisticsReducer,
} from "./adminReducers";
import {
  createBusinessCategoryReducer,
  deleteBusinessCategoryReducer,
  editBusinessCategoryReducer,
  getBusinessCategoriesReducer,
  getBusinessCategoryReducer,
} from "./businessCategoryReducers";
import {
  createBusinessReducer,
  editBusinessReducer,
  getBusinessReducer,
} from "./businessReducers";
import { cartReducer } from "./cartReducers";
import {
  createCategoryReducer,
  deleteCategoryReducer,
  editCategoryReducer,
  getCategoriesReducer,
  getCategoryDetailsReducer,
} from "./categoryReducers";
import {
  createOrderReducer,
  getSellerOrderReducer,
  getSellerOrdersReducer,
  getUserOrderReducer,
  getUserOrdersReducer,
  updateOrderStatusReducer,
} from "./orderReducers";
import {
  createProductReducer,
  deleteProductReducer,
  editProductReducer,
  getProductReducer,
} from "./productReducers";
import {
  getSellerReducer,
  sellerLoginReducer,
  sellerSignupReducer,
} from "./sellerReducers";
import {
  updateUserReducer,
  getUserReducer,
  userLoginReducer,
  userSignupReducer,
} from "./userReducers";
import { wishListReducer } from "./wishListReducers";

const initialState = {
  userLogin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo", null))
      : null,
  },
  userSignup: {
    success: null,
  },
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
  wishList: { wishList: null },
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
};

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userSignup: userSignupReducer,
  sellerLogin: sellerLoginReducer,
  sellerSignup: sellerSignupReducer,
  getSeller: getSellerReducer,
  getUser: getUserReducer,
  updateUser: updateUserReducer,
  adminLogin: adminLoginReducer,
  getCategories: getCategoriesReducer,
  getCategoryDetails: getCategoryDetailsReducer,
  createCategory: createCategoryReducer,
  editCategory: editCategoryReducer,
  deleteCategory: deleteCategoryReducer,
  createProduct: createProductReducer,
  getProduct: getProductReducer,
  editProduct: editProductReducer,
  deleteProduct: deleteProductReducer,
  createBusiness: createBusinessReducer,
  getBusiness: getBusinessReducer,
  editBusiness: editBusinessReducer,
  wishList: wishListReducer,
  getAddresses: getAddressesReducer,
  getAddress: getAddressReducer,
  createAddress: createAddressReducer,
  editAddress: editAddressReducer,
  deleteAddress: deleteAddressReducer,
  getBusinessCategories: getBusinessCategoriesReducer,
  createBusinessCategory: createBusinessCategoryReducer,
  getBusinessCategory: getBusinessCategoryReducer,
  editBusinessCategory: editBusinessCategoryReducer,
  deleteBusinessCategory: deleteBusinessCategoryReducer,
  getCummulativeStats: adminCummulativeStatisticsReducer,
  getManageCategory: adminManageCategoryStatisticsReducer,
  getAdminProductList: adminManageProductStatisticsReducer,
  getSellerDetails: adminGetSellerListReducer,
  getUsersDetails: adminGetUsersListReducer,
  getAdminList: adminGetAdminListReducer,
  getBusinessCategoryList: adminGetBusinessCategoryListReducer,
  cart: cartReducer,
  createOrder: createOrderReducer,
  getUserOrder: getUserOrderReducer,
  getUserOrders: getUserOrdersReducer,
  getSellerOrders: getSellerOrdersReducer,
  getSellerOrder: getSellerOrderReducer,
  updateOrderStatus: updateOrderStatusReducer,
});

export { initialState };

export default rootReducer;
