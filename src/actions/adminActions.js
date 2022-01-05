import adminAPI from "../apis/adminAPI";
import {
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGOUT_REQUEST,
  ADMIN_LOGOUT_SUCCESS,
  ADMIN_LOGOUT_FAIL,
} from "../constants/adminConstants";

const adminLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_LOGIN_REQUEST });

    const { data } = await adminAPI.post("/login", { email, password });

    localStorage.setItem("adminInfo", JSON.stringify(data));
    console.log(data);
    dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: data });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: ADMIN_LOGIN_FAIL, payload: error });
  }
};

const adminLogout = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_LOGOUT_REQUEST });

    localStorage.clear();

    dispatch({ type: ADMIN_LOGOUT_SUCCESS, payload: null });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: ADMIN_LOGOUT_FAIL, payload: error });
  }
};

export { adminLogin, adminLogout };
