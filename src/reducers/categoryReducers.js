import {
  CREATE_CATEGORY_FAIL,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAIL,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  EDIT_CATEGORY_FAIL,
  EDIT_CATEGORY_REQUEST,
  EDIT_CATEGORY_SUCCESS,
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

const editCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_CATEGORY_REQUEST:
      return { loading: true };
    case EDIT_CATEGORY_SUCCESS:
      return { ...state, loading: false, category: action.payload };
    case EDIT_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const deleteCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CATEGORY_REQUEST:
      return { loading: true };
    case DELETE_CATEGORY_SUCCESS:
      return { ...state, loading: false, success: action.payload };
    case DELETE_CATEGORY_FAIL:
      return {
        ...state,
        success: false,
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
  editCategoryReducer,
  deleteCategoryReducer,
};
