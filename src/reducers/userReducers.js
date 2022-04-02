import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_WITH_GOOGLE_FAIL,
  USER_LOGIN_WITH_GOOGLE_REQUEST,
  USER_LOGIN_WITH_GOOGLE_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
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

const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true, error: null, user: null };
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: null };
    case USER_LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload, user: null };
    case USER_LOGIN_WITH_GOOGLE_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_WITH_GOOGLE_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case USER_LOGIN_WITH_GOOGLE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case USER_LOGOUT_REQUEST:
      return { ...state, loading: true };
    case USER_LOGOUT_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case USER_LOGOUT_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const userSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { ...state, loading: true };
    case USER_SIGNUP_SUCCESS:
      return { ...state, loading: false };
    case USER_SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const getUserReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return { ...state, loading: true };
    case GET_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case GET_USER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const updateUserReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return { ...state, loading: true };
    case UPDATE_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case UPDATE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const changePasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CHANGE_PASSWORD_REQUEST:
      return { ...state, loading: true, success: null };
    case USER_CHANGE_PASSWORD_SUCCESS:
      return { ...state, loading: false, success: action.payload, error: null };
    case USER_CHANGE_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: null,
      };
    default:
      return state;
  }
};

const sendPasswordResetEmailReducer = (state = {}, action) => {
  switch (action.type) {
    case SEND_PASSWORD_RESET_EMAIL_REQUEST:
      return { ...state, loading: true, success: null, error: null };
    case SEND_PASSWORD_RESET_EMAIL_SUCCESS:
      return { ...state, loading: false, success: action.payload, error: null };
    case SEND_PASSWORD_RESET_EMAIL_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: null,
      };
    default:
      return state;
  }
};

const resetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST:
      return { ...state, loading: true, success: null, error: null };
    case RESET_PASSWORD_SUCCESS:
      return { ...state, loading: false, success: action.payload, error: null };
    case RESET_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: null,
      };
    default:
      return state;
  }
};

export {
  userLoginReducer,
  userSignupReducer,
  getUserReducer,
  updateUserReducer,
  changePasswordReducer,
  sendPasswordResetEmailReducer,
  resetPasswordReducer,
};
