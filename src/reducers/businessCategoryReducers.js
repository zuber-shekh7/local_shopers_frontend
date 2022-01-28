import {
  CREATE_BUSINESS_CATEGORY_REQUEST,
  CREATE_BUSINESS_CATEGORY_SUCCESS,
  CREATE_BUSINESS_CATEGORY_FAIL,
  GET_BUSINESS_CATEGORIES_FAIL,
  GET_BUSINESS_CATEGORIES_REQUEST,
  GET_BUSINESS_CATEGORIES_SUCCESS,
  GET_BUSINESS_CATEGORY_FAIL,
  GET_BUSINESS_CATEGORY_REQUEST,
  GET_BUSINESS_CATEGORY_SUCCESS,
} from "../constants/businessCategoryConstants";

const getBusinessCategoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_BUSINESS_CATEGORIES_REQUEST:
      return { loading: true };
    case GET_BUSINESS_CATEGORIES_SUCCESS:
      return { ...state, loading: false, businessCategories: action.payload };
    case GET_BUSINESS_CATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const createBusinessCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BUSINESS_CATEGORY_REQUEST:
      return { loading: true };
    case CREATE_BUSINESS_CATEGORY_SUCCESS:
      return { ...state, loading: false, businessCategory: action.payload };
    case CREATE_BUSINESS_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const getBusinessCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_BUSINESS_CATEGORY_REQUEST:
      return { loading: true };
    case GET_BUSINESS_CATEGORY_SUCCESS:
      return { ...state, loading: false, businessCategory: action.payload };
    case GET_BUSINESS_CATEGORY_FAIL:
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
  getBusinessCategoriesReducer,
  createBusinessCategoryReducer,
  getBusinessCategoryReducer,
};
