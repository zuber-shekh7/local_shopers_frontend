import userAPI from "../apis/userAPI";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_REQUEST,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_PROFILE_DETAILS_REQUEST,
  USER_PROFILE_DETAILS_SUCCESS,
  USER_PROFILE_DETAILS_FAIL,
  UPDATE_USER_PROFILE_REQUEST,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAIL,
  USER_LOGIN_WITH_GOOGLE_SUCCESS,
  USER_LOGIN_WITH_GOOGLE_FAIL,
  USER_LOGIN_WITH_GOOGLE_REQUEST,
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

const userSignup = (user) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGNUP_REQUEST });

    const { data } = await userAPI.post("/signup", { ...user });

    dispatch(userLogin(user.email, user.password));

    dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: USER_SIGNUP_FAIL, payload: error });
  }
};

const userLogout = () => (dispatch) => {
  try {
    dispatch({ type: USER_LOGOUT_REQUEST });

    localStorage.clear();

    dispatch({ type: USER_PROFILE_DETAILS_SUCCESS, payload: null });

    dispatch({ type: USER_LOGOUT_SUCCESS });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: USER_LOGOUT_FAIL, payload: error });
  }
};

const getUserDetails = () => async (dispatch) => {
  try {
    dispatch({ type: USER_PROFILE_DETAILS_REQUEST });

    const { token } = JSON.parse(localStorage.getItem("userInfo"));

    const { data } = await userAPI.get("/profile", {
      headers: { Authorization: token },
    });

    const { user } = data;

    dispatch({ type: USER_PROFILE_DETAILS_SUCCESS, payload: user });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: USER_PROFILE_DETAILS_FAIL, payload: error });
  }
};

const updateUserProfile =
  (email, mobile, firstName, lastName) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_USER_PROFILE_REQUEST });

      const { token } = JSON.parse(localStorage.getItem("userInfo"));

      const { data } = await userAPI.put(
        "/profile",
        { email, mobile, firstName, lastName },
        {
          headers: { Authorization: token },
        }
      );

      dispatch({ type: UPDATE_USER_PROFILE_SUCCESS, payload: data });

      dispatch({ type: USER_PROFILE_DETAILS_REQUEST });

      dispatch({ type: USER_PROFILE_DETAILS_SUCCESS, payload: null });

      dispatch({ type: UPDATE_USER_PROFILE_SUCCESS, payload: null });
    } catch (err) {
      const error = err.response ? err.response.data.message : err.message;
      dispatch({ type: UPDATE_USER_PROFILE_FAIL, payload: error });
    }
  };

const userLoginWithGoogle = (token) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_WITH_GOOGLE_REQUEST });

    const { data } = await userAPI.post("/login/google", { token });

    localStorage.setItem("userInfo", JSON.stringify(data));

    dispatch({ type: USER_LOGIN_WITH_GOOGLE_SUCCESS, payload: data });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: USER_LOGIN_WITH_GOOGLE_FAIL, payload: error });
  }
};

export {
  userLogin,
  userSignup,
  userLogout,
  getUserDetails,
  updateUserProfile,
  userLoginWithGoogle,
};
