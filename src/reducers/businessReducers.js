import {
  CREATE_BUSINESS_REQUEST,
  CREATE_BUSINESS_SUCCESS,
  CREATE_BUSINESS_FAIL,
  EDIT_BUSINESS_FAIL,
  EDIT_BUSINESS_REQUEST,
  EDIT_BUSINESS_SUCCESS,
  GET_BUSINESS_FAIL,
  GET_BUSINESS_REQUEST,
  GET_BUSINESS_SUCCESS,
} from "../constants/businessConstants";

const createBusinessReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BUSINESS_REQUEST:
      return { ...state, loading: true };
    case CREATE_BUSINESS_SUCCESS:
      return { ...state, loading: false, success: true };
    case CREATE_BUSINESS_FAIL:
      return { ...state, loading: false, success: false };
    default:
      return state;
  }
};

const getBusinessReducer = (state = {}, action) => {
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

export { createBusinessReducer, getBusinessReducer, editBusinessReducer };
