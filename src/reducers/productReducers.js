import {
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAIL,
  EDIT_PRODUCT_REQUEST,
  EDIT_PRODUCT_SUCCESS,
  FETCH_PRODUCT_DETAILS_FAIL,
  FETCH_PRODUCT_DETAILS_REQUEST,
  FETCH_PRODUCT_DETAILS_SUCCESS,
} from "../constants/productConstants";

const createProductReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_PRODUCT_REQUEST:
      return { loading: true };
    case CREATE_PRODUCT_SUCCESS:
      return { ...state, loading: false, product: action.payload };
    case CREATE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const getProductReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case FETCH_PRODUCT_DETAILS_SUCCESS:
      return { ...state, loading: false, product: action.payload };
    case FETCH_PRODUCT_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const editProductReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_PRODUCT_REQUEST:
      return { loading: true };
    case EDIT_PRODUCT_SUCCESS:
      return { ...state, loading: false, product: action.payload };
    case EDIT_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { createProductReducer, getProductReducer, editProductReducer };
