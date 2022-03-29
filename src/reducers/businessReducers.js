import {
  GET_BUSINESS_FAIL,
  GET_BUSINESS_REQUEST,
  GET_BUSINESS_SUCCESS,
} from "../constants/businessConstants";

export const getBusinessReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_BUSINESS_REQUEST:
      return { ...state, loading: true };
    case GET_BUSINESS_SUCCESS:
      return { ...state, loading: false, business: action.payload };
    case GET_BUSINESS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
