import {
  CREATE_CATEGORY_FAIL,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  FETCH_CATEGORIES_FAIL,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORY_DETAILS_FAIL,
  FETCH_CATEGORY_DETAILS_REQUEST,
  FETCH_CATEGORY_DETAILS_SUCCESS,
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

const getCategoryDetailsReducer = (state = {}, action) => {
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

const createCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_CATEGORY_REQUEST:
      return { loading: true };
    case CREATE_CATEGORY_SUCCESS:
      return { ...state, loading: false, category: action.payload };
    case CREATE_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export {
  getCategoriesReducer,
  getCategoryDetailsReducer,
  createCategoryReducer,
};
