import { combineReducers } from "redux";
import { userLoginReducer, userSignupReducer } from "./userReducers";

const initialState = {
  userLogin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo", null))
      : null,
  },
  userSignup: {
    success: null,
  },
};

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userSignup: userSignupReducer,
});

export { initialState };
export default rootReducer;
