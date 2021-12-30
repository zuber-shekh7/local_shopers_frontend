import { combineReducers } from "redux";
import { userLoginReducer } from "./userReducers";

const initialState = {
  userLogin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo", null))
      : null,
  },
};

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
});

export { initialState };
export default rootReducer;
