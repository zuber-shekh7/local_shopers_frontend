import backendAPI from "../apis/backendAPI";
import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_USER_ORDER_REQUEST,
  GET_USER_ORDER_SUCCESS,
  GET_USER_ORDER_FAIL,
} from "../constants/orderConstants";

const createOrder = (orderData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_ORDER_REQUEST });

    const { token } = JSON.parse(localStorage.getItem("userInfo"));

    const { data } = await backendAPI.post(`/orders/`, orderData, {
      headers: {
        Authorization: token,
      },
    });

    const { order } = data;

    localStorage.setItem("cartItems", []);

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: order });
    dispatch({ type: CREATE_ORDER_SUCCESS, payload: null });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: CREATE_ORDER_FAIL, payload: error });
  }
};

const getUserOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_ORDER_REQUEST });

    const { token } = JSON.parse(localStorage.getItem("userInfo"));

    const { data } = await backendAPI.get(`/orders/${id}`, {
      headers: {
        Authorization: token,
      },
    });

    const { order } = data;

    dispatch({ type: GET_USER_ORDER_SUCCESS, payload: order });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_USER_ORDER_FAIL, payload: error });
  }
};

export { createOrder, getUserOrder };
