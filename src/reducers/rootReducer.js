import { combineReducers } from "redux";
import { adminLoginReducer } from "./adminReducers";
import {
  createBusinessReducer,
  editBusinessReducer,
  getBusinessReducer,
} from "./businessReducers";
import {
  createCategoryReducer,
  deleteCategoryReducer,
  editCategoryReducer,
  getCategoriesReducer,
  getCategoryDetailsReducer,
} from "./categoryReducers";
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
  updateUserProfileReducer,
  userDetailsReducer,
  userLoginReducer,
  userSignupReducer,
} from "./userReducers";

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
  userDetails: { user: null },
  updateUserProfile: { user: null },
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
};

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userSignup: userSignupReducer,
  sellerLogin: sellerLoginReducer,
  sellerSignup: sellerSignupReducer,
  getSeller: getSellerReducer,
  userDetails: userDetailsReducer,
  updateUserProfile: updateUserProfileReducer,
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
});

export { initialState };
export default rootReducer;
