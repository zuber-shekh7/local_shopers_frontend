import {
  FETCH_CATEGORIES_FAIL,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
} from "../constants/categoryConstants";

const getCategoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return { loading: true };
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, loading: false, categories: action.payload };
    case FETCH_CATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { getCategoriesReducer };
