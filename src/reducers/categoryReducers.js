import {
  FETCH_CATEGORY_DETAILS_FAIL,
  FETCH_CATEGORY_DETAILS_REQUEST,
  FETCH_CATEGORY_DETAILS_SUCCESS,
} from "../constants/categoryConstants";

export const getCategoryDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_DETAILS_REQUEST:
      return { loading: true };
    case FETCH_CATEGORY_DETAILS_SUCCESS:
      return { ...state, loading: false, category: action.payload };
    case FETCH_CATEGORY_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
