import {
  EDIT_BUSINESS_FAIL,
  EDIT_BUSINESS_REQUEST,
  EDIT_BUSINESS_SUCCESS,
} from "../constants/businessConstants";
import { EDIT_PRODUCT_SUCCESS } from "../constants/productConstants";

const editBusinessReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_BUSINESS_REQUEST:
      return { loading: true };
    case EDIT_BUSINESS_SUCCESS:
      return { ...state, loading: false, business: action.payload };
    case EDIT_BUSINESS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { editBusinessReducer };
