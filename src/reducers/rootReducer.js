import { combineReducers } from "redux";
import { sellerDetailsReducer, sellerLoginReducer } from "./sellerReducers";
import {
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
  sellerDetails: { seller: null },
  userDetails: { user: null },
};

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userSignup: userSignupReducer,
  sellerLogin: sellerLoginReducer,
  sellerDetails: sellerDetailsReducer,
  userDetails: userDetailsReducer,
});

export { initialState };
export default rootReducer;
