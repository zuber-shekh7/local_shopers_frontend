import {
  SELLER_LOGIN_FAIL,
  SELLER_LOGIN_REQUEST,
  SELLER_LOGIN_SUCCESS,
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

export { sellerLoginReducer };
