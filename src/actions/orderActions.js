import backendAPI from "../apis/backendAPI";
import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAIL,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAIL,
} from "../constants/orderConstants";

export const createOrder = (orderData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_ORDER_REQUEST });

    const { data } = await backendAPI.post(`/orders/`, orderData);

    const { order } = data;

    localStorage.setItem("cartItems", []);

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: order });
    dispatch({ type: CREATE_ORDER_SUCCESS, payload: null });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: CREATE_ORDER_FAIL, payload: error });
  }
};

export const getOrders = (userId) => async (dispatch) => {
  try {
    dispatch({ type: GET_ORDERS_REQUEST });

    const { data } = await backendAPI.get(`/orders/`, {
      params: { userId },
    });

    const { orders } = data;

    dispatch({ type: GET_ORDERS_SUCCESS, payload: orders });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_ORDERS_FAIL, payload: error });
  }
};

export const getOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_ORDER_REQUEST });

    const { data } = await backendAPI.get(`/orders/${id}`);

    const { order } = data;

    dispatch({ type: GET_ORDER_SUCCESS, payload: order });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_ORDER_FAIL, payload: error });
  }
};
