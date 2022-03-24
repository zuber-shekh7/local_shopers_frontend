import backendAPI from "../apis/backendAPI";
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
  USER_LOGIN_WITH_GOOGLE_SUCCESS,
  USER_LOGIN_WITH_GOOGLE_FAIL,
  USER_LOGIN_WITH_GOOGLE_REQUEST,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
} from "../constants/userConstants";

const userLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const { data } = await backendAPI.post("/users/login", { email, password });
    const { token, user } = data;

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", JSON.stringify(token));

    dispatch({ type: USER_LOGIN_SUCCESS, payload: user });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: USER_LOGIN_FAIL, payload: error });
  }
};

const userSignup = (user) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGNUP_REQUEST });

    await backendAPI.post("/users/signup", { ...user });

    dispatch(userLogin(user.email, user.password));

    dispatch({ type: USER_SIGNUP_SUCCESS });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: USER_SIGNUP_FAIL, payload: error });
  }
};

const userLogout = () => (dispatch) => {
  try {
    dispatch({ type: USER_LOGOUT_REQUEST });

    localStorage.clear();

    dispatch({ type: USER_LOGOUT_SUCCESS, payload: null });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: USER_LOGOUT_FAIL, payload: error });
  }
};

const getUser = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_REQUEST });

    const user = JSON.parse(localStorage.getItem("user"));
    const token = `Bearer ${JSON.parse(localStorage.getItem("token"))}`;

    const { data } = await backendAPI.get(`/users/${user._id}`, {
      headers: { Authorization: token },
    });

    dispatch({ type: GET_USER_SUCCESS, payload: data.user });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_USER_FAIL, payload: error });
  }
};

const updateUser =
  (email, mobile, firstName, lastName, user_id) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_USER_REQUEST });

      const token = `Bearer ${JSON.parse(localStorage.getItem("token"))}`;

      const { data } = await backendAPI.put(
        `/users/${user_id}`,
        { email, mobile, firstName, lastName },
        {
          headers: { Authorization: token },
        }
      );

      dispatch({ type: UPDATE_USER_SUCCESS, payload: data });

      dispatch({ type: UPDATE_USER_SUCCESS, payload: null });
    } catch (err) {
      const error = err.response ? err.response.data.message : err.message;
      dispatch({ type: UPDATE_USER_FAIL, payload: error });
    }
  };

const userLoginWithGoogle = (googleAuthToken) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_WITH_GOOGLE_REQUEST });

    const { data } = await backendAPI.post("/users/login/google", {
      token: googleAuthToken,
    });
    const { token, user } = data;

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", JSON.stringify(token));

    dispatch({ type: USER_LOGIN_WITH_GOOGLE_SUCCESS, payload: user });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: USER_LOGIN_WITH_GOOGLE_FAIL, payload: error });
  }
};

export {
  userLogin,
  userSignup,
  userLogout,
  getUser,
  updateUser,
  userLoginWithGoogle,
};
