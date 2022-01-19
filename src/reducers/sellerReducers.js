import {
  BUSINESS_DETAILS_FAIL,
  BUSINESS_DETAILS_REQUEST,
  BUSINESS_DETAILS_SUCCESS,
  CREATE_BUSINESS_FAIL,
  CREATE_BUSINESS_REQUEST,
  CREATE_BUSINESS_SUCCESS,
  SELLER_LOGIN_FAIL,
  SELLER_LOGIN_REQUEST,
  SELLER_LOGIN_SUCCESS,
  SELLER_LOGOUT_FAIL,
  SELLER_LOGOUT_REQUEST,
  SELLER_LOGOUT_SUCCESS,
  SELLER_PROFILE_DETAILS_FAIL,
  SELLER_PROFILE_DETAILS_REQUEST,
  SELLER_PROFILE_DETAILS_SUCCESS,
  SELLER_SIGNUP_FAIL,
  SELLER_SIGNUP_REQUEST,
  SELLER_SIGNUP_SUCCESS,
} from "../constants/selllerConstants";

const sellerLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case SELLER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case SELLER_LOGIN_SUCCESS:
      return { ...state, loading: false, sellerInfo: action.payload };
    case SELLER_LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case SELLER_LOGOUT_REQUEST:
      return { ...state, loading: true };
    case SELLER_LOGOUT_SUCCESS:
      return { ...state, sellerInfo: null, loading: false };
    case SELLER_LOGOUT_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const sellerSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case SELLER_SIGNUP_REQUEST:
      return { ...state, loading: true };
    case SELLER_SIGNUP_SUCCESS:
      return { ...state, loading: false, sellerInfo: action.payload };
    case SELLER_SIGNUP_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const sellerDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case SELLER_PROFILE_DETAILS_REQUEST:
      return { ...state, loading: true };
    case SELLER_PROFILE_DETAILS_SUCCESS:
      return { ...state, loading: false, seller: action.payload };
    case SELLER_PROFILE_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const createBusinessReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BUSINESS_REQUEST:
      return { ...state, loading: true };
    case CREATE_BUSINESS_SUCCESS:
      return { ...state, loading: false, success: true };
    case CREATE_BUSINESS_FAIL:
      return { ...state, loading: false, success: false };
    default:
      return state;
  }
};

const businessDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case BUSINESS_DETAILS_REQUEST:
      return { ...state, loading: true };
    case BUSINESS_DETAILS_SUCCESS:
      return { ...state, loading: false, business: action.payload };
    case BUSINESS_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export {
  sellerLoginReducer,
  sellerSignupReducer,
  sellerDetailsReducer,
  createBusinessReducer,
  businessDetailsReducer,
};
