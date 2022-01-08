import {
  UPDATE_USER_PROFILE_FAIL,
  UPDATE_USER_PROFILE_REQUEST,
  UPDATE_USER_PROFILE_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_WITH_GOOGLE_FAIL,
  USER_LOGIN_WITH_GOOGLE_REQUEST,
  USER_LOGIN_WITH_GOOGLE_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_PROFILE_DETAILS_FAIL,
  USER_PROFILE_DETAILS_REQUEST,
  USER_PROFILE_DETAILS_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "../constants/userConstants";

const userLoginReducer = (state = { userInfo: null }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case USER_LOGIN_WITH_GOOGLE_REQUEST:
      return { loading: true };
    case USER_LOGIN_WITH_GOOGLE_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case USER_LOGIN_WITH_GOOGLE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case USER_LOGOUT_REQUEST:
      return { ...state, loading: true };
    case USER_LOGOUT_SUCCESS:
      return { ...state, userInfo: null, loading: false };
    case USER_LOGOUT_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const userSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true };
    case USER_SIGNUP_SUCCESS:
      return { ...state, loading: false, success: true };
    case USER_SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };
    default:
      return state;
  }
};

const userDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PROFILE_DETAILS_REQUEST:
      return { ...state, loading: true };
    case USER_PROFILE_DETAILS_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case USER_PROFILE_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const updateUserProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_PROFILE_REQUEST:
      return { ...state, loading: true };
    case UPDATE_USER_PROFILE_SUCCESS:
      return { ...state, loading: false, success: true };
    case UPDATE_USER_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export {
  userLoginReducer,
  userSignupReducer,
  userDetailsReducer,
  updateUserProfileReducer,
};
