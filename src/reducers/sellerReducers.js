import {
  SELLER_LOGIN_FAIL,
  SELLER_LOGIN_REQUEST,
  SELLER_LOGIN_SUCCESS,
  SELLER_LOGIN_WITH_GOOGLE_FAIL,
  SELLER_LOGIN_WITH_GOOGLE_REQUEST,
  SELLER_LOGIN_WITH_GOOGLE_SUCCESS,
  SELLER_LOGOUT_FAIL,
  SELLER_LOGOUT_REQUEST,
  SELLER_LOGOUT_SUCCESS,
  GET_SELLER_REQUEST,
  GET_SELLER_SUCCESS,
  GET_SELLER_FAIL,
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
    case SELLER_LOGIN_WITH_GOOGLE_REQUEST:
      return { loading: true };
    case SELLER_LOGIN_WITH_GOOGLE_SUCCESS:
      return { ...state, loading: false, sellerInfo: action.payload };
    case SELLER_LOGIN_WITH_GOOGLE_FAIL:
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

const getSellerReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SELLER_REQUEST:
      return { ...state, loading: true };
    case GET_SELLER_SUCCESS:
      return { ...state, loading: false, seller: action.payload };
    case GET_SELLER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export { sellerLoginReducer, sellerSignupReducer, getSellerReducer };
