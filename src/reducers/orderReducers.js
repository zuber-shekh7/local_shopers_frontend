import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_SELLER_ORDERS_FAIL,
  GET_SELLER_ORDERS_REQUEST,
  GET_SELLER_ORDERS_SUCCESS,
  GET_SELLER_ORDER_FAIL,
  GET_SELLER_ORDER_REQUEST,
  GET_SELLER_ORDER_SUCCESS,
  GET_USER_ORDERS_FAIL,
  GET_USER_ORDERS_REQUEST,
  GET_USER_ORDERS_SUCCESS,
  GET_USER_ORDER_FAIL,
  GET_USER_ORDER_REQUEST,
  GET_USER_ORDER_SUCCESS,
  UPDATE_ORDER_STATUS_REQUEST,
  UPDATE_ORDER_STATUS_SUCCESS,
  UPDATE_ORDER_STATUS_FAIL,
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

const getUserOrdersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_ORDERS_REQUEST:
      return { ...state, loading: true };
    case GET_USER_ORDERS_SUCCESS:
      return { ...state, loading: false, orders: action.payload };
    case GET_USER_ORDERS_FAIL:
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

const getSellerOrdersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SELLER_ORDERS_REQUEST:
      return { ...state, loading: true };
    case GET_SELLER_ORDERS_SUCCESS:
      return { ...state, loading: false, orders: action.payload };
    case GET_SELLER_ORDERS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const getSellerOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SELLER_ORDER_REQUEST:
      return { ...state, loading: true };
    case GET_SELLER_ORDER_SUCCESS:
      return { ...state, loading: false, order: action.payload };
    case GET_SELLER_ORDER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const updateOrderStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ORDER_STATUS_REQUEST:
      return { ...state, loading: true };
    case UPDATE_ORDER_STATUS_SUCCESS:
      return { ...state, loading: false, order: action.payload };
    case UPDATE_ORDER_STATUS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export {
  createOrderReducer,
  getUserOrdersReducer,
  getUserOrderReducer,
  getSellerOrdersReducer,
  getSellerOrderReducer,
  updateOrderStatusReducer,
};
