import userAPI from "../apis/userAPI";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_REQUEST,
} from "../constants/userConstants";

const userLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const { data } = await userAPI.post("/login", { email, password });

    localStorage.setItem("userInfo", JSON.stringify(data));

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: USER_LOGIN_FAIL, payload: error });
  }
};

const userLogout = () => (dispatch) => {
  try {
    dispatch({ type: USER_LOGOUT_REQUEST });

    localStorage.removeItem("userInfo");

    dispatch({ type: USER_LOGOUT_SUCCESS });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: USER_LOGOUT_FAIL, payload: error });
  }
};

export { userLogin, userLogout };
