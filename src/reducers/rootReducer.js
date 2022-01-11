import { combineReducers } from "redux";
import { adminLoginReducer } from "./adminReducers";
import {
  businessDetailsReducer,
  createBusinessReducer,
  sellerDetailsReducer,
  sellerLoginReducer,
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
  sellerDetails: {
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
  createBusiness: { success: null },
  businessDetails: { business: null },
};

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userSignup: userSignupReducer,
  sellerLogin: sellerLoginReducer,
  sellerDetails: sellerDetailsReducer,
  userDetails: userDetailsReducer,
  updateUserProfile: updateUserProfileReducer,
  adminLogin: adminLoginReducer,
  createBusiness: createBusinessReducer,
  businessDetails: businessDetailsReducer,
});

export { initialState };
export default rootReducer;
