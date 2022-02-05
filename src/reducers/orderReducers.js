import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_USER_ORDER_FAIL,
  GET_USER_ORDER_REQUEST,
  GET_USER_ORDER_SUCCESS,
} from "../constants/orderConstants";

const createOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return { ...state, loading: true };
    case CREATE_ORDER_SUCCESS:
      return { ...state, loading: false, order: action.payload };
    case CREATE_ORDER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const getUserOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_ORDER_REQUEST:
      return { ...state, loading: true };
    case GET_USER_ORDER_SUCCESS:
      return { ...state, loading: false, order: action.payload };
    case GET_USER_ORDER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export { createOrderReducer, getUserOrderReducer };
