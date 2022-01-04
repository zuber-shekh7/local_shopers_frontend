import {
  SELLER_LOGIN_FAIL,
  SELLER_LOGIN_REQUEST,
  SELLER_LOGIN_SUCCESS,
  SELLER_PROFILE_DETAILS_FAIL,
  SELLER_PROFILE_DETAILS_REQUEST,
  SELLER_PROFILE_DETAILS_SUCCESS,
} from "../constants/selllerConstants";

const sellerLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case SELLER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case SELLER_LOGIN_SUCCESS:
      return { ...state, loading: false, sellerInfo: action.payload };
    case SELLER_LOGIN_FAIL:
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
export { sellerLoginReducer, sellerDetailsReducer };
