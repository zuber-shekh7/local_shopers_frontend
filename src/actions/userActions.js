import { toast } from "react-toastify";
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
  USER_CHANGE_PASSWORD_REQUEST,
  USER_CHANGE_PASSWORD_SUCCESS,
  USER_CHANGE_PASSWORD_FAIL,
  SEND_PASSWORD_RESET_EMAIL_REQUEST,
  SEND_PASSWORD_RESET_EMAIL_SUCCESS,
  SEND_PASSWORD_RESET_EMAIL_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
} from "../constants/userConstants";
import { extractError } from "../utils/helper";

export const userLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const { data } = await backendAPI.post("/users/login", { email, password });
    const { token, user } = data;

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", JSON.stringify(token));

    dispatch({ type: USER_LOGIN_SUCCESS, payload: user });
  } catch (err) {
    const error = extractError(err);
    dispatch({ type: USER_LOGIN_FAIL, payload: error });
  }
};

export const userSignup = (user) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGNUP_REQUEST });

    await backendAPI.post("/users/signup", { ...user });

    dispatch(userLogin(user.email, user.password));

    dispatch({ type: USER_SIGNUP_SUCCESS });
  } catch (err) {
    const error = extractError(err);
    dispatch({ type: USER_SIGNUP_FAIL, payload: error });
  }
};

export const userLogout = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGOUT_REQUEST });

    await backendAPI.get("/users/logout");

    localStorage.clear();

    dispatch({ type: USER_LOGOUT_SUCCESS, payload: null });
  } catch (err) {
    const error = extractError(err);
    dispatch({ type: USER_LOGOUT_FAIL, payload: error });
  }
};

export const getUser = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_REQUEST });

    const user = JSON.parse(localStorage.getItem("user"));

    const { data } = await backendAPI.get(`/users/${user._id}`);

    dispatch({ type: GET_USER_SUCCESS, payload: data.user });
  } catch (err) {
    const error = extractError(err);
    dispatch({ type: GET_USER_FAIL, payload: error });
  }
};

export const updateUser =
  (email, mobile, firstName, lastName, userId) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_USER_REQUEST });

      const { data } = await backendAPI.put(`/users/${userId}`, {
        email,
        mobile,
        firstName,
        lastName,
      });

      dispatch({ type: UPDATE_USER_SUCCESS, payload: data });
      toast.success("User profile updated successfully", {});

      dispatch({ type: UPDATE_USER_SUCCESS, payload: null });
    } catch (err) {
      const error = extractError(err);
      dispatch({ type: UPDATE_USER_FAIL, payload: error });
    }
  };

export const userLoginWithGoogle = (googleAuthToken) => async (dispatch) => {
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
    const error = extractError(err);
    dispatch({ type: USER_LOGIN_WITH_GOOGLE_FAIL, payload: error });
  }
};

export const changePassword =
  (oldPassword, newPassword) => async (dispatch) => {
    try {
      dispatch({ type: USER_CHANGE_PASSWORD_REQUEST });

      await backendAPI.post("/users/change-password", {
        oldPassword,
        newPassword,
      });

      dispatch({ type: USER_CHANGE_PASSWORD_SUCCESS, payload: true });
      setTimeout(() => {
        dispatch({ type: USER_CHANGE_PASSWORD_SUCCESS, payload: null });
      }, 5000);
    } catch (err) {
      const error = extractError(err);
      dispatch({ type: USER_CHANGE_PASSWORD_FAIL, payload: error });
    }
  };

export const sentPasswordResetEmail = (email) => async (dispatch) => {
  try {
    dispatch({ type: SEND_PASSWORD_RESET_EMAIL_REQUEST });

    await backendAPI.post("/users/forgot-password", {
      email,
    });

    dispatch({ type: SEND_PASSWORD_RESET_EMAIL_SUCCESS, payload: true });
    setTimeout(() => {
      dispatch({ type: SEND_PASSWORD_RESET_EMAIL_SUCCESS, payload: null });
    }, 5000);
  } catch (err) {
    const error = extractError(err);
    dispatch({ type: SEND_PASSWORD_RESET_EMAIL_FAIL, payload: error });
  }
};

export const resetPassword = (password, token) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST });

    await backendAPI.post(`/users/reset-password/${token}`, {
      password,
    });

    dispatch({ type: RESET_PASSWORD_SUCCESS, payload: true });
    setTimeout(() => {
      dispatch({ type: RESET_PASSWORD_SUCCESS, payload: null });
    }, 5000);
  } catch (err) {
    const error = extractError(err);
    dispatch({ type: RESET_PASSWORD_FAIL, payload: error });
  }
};
