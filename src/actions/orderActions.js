import backendAPI from "../apis/backendAPI";
import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_USER_ORDER_REQUEST,
  GET_USER_ORDER_SUCCESS,
  GET_USER_ORDER_FAIL,
  GET_USER_ORDERS_REQUEST,
  GET_USER_ORDERS_SUCCESS,
  GET_USER_ORDERS_FAIL,
  GET_SELLER_ORDERS_REQUEST,
  GET_SELLER_ORDERS_SUCCESS,
  GET_SELLER_ORDERS_FAIL,
  GET_SELLER_ORDER_REQUEST,
  GET_SELLER_ORDER_SUCCESS,
  GET_SELLER_ORDER_FAIL,
  UPDATE_ORDER_STATUS_REQUEST,
  UPDATE_ORDER_STATUS_SUCCESS,
  UPDATE_ORDER_STATUS_FAIL,
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

const getUserOrders = (user_id) => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_ORDERS_REQUEST });

    const { token } = JSON.parse(localStorage.getItem("userInfo"));

    const { data } = await backendAPI.get(`/orders/`, {
      headers: {
        Authorization: token,
      },
      params: { user_id },
    });

    const { orders } = data;

    dispatch({ type: GET_USER_ORDERS_SUCCESS, payload: orders });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_USER_ORDERS_FAIL, payload: error });
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

const getSellerOrders = (business_id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SELLER_ORDERS_REQUEST });

    const { token } = JSON.parse(localStorage.getItem("sellerInfo"));

    const { data } = await backendAPI.get(`/orders/seller`, {
      headers: {
        Authorization: token,
      },
      params: { business_id },
    });

    const { orders } = data;

    dispatch({ type: GET_SELLER_ORDERS_SUCCESS, payload: orders });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_SELLER_ORDERS_FAIL, payload: error });
  }
};

const getSellerOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_SELLER_ORDER_REQUEST });

    const { token } = JSON.parse(localStorage.getItem("sellerInfo"));

    const { data } = await backendAPI.get(`/orders/${id}`, {
      headers: {
        Authorization: token,
      },
    });

    const { order } = data;

    dispatch({ type: GET_SELLER_ORDER_SUCCESS, payload: order });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_SELLER_ORDER_FAIL, payload: error });
  }
};

const updateOrderStatus = (id, status) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ORDER_STATUS_REQUEST });

    const { token } = JSON.parse(localStorage.getItem("sellerInfo"));

    const { data } = await backendAPI.put(
      `/orders/${id}`,
      { status },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    const { order } = data;

    dispatch({ type: UPDATE_ORDER_STATUS_SUCCESS, payload: order });
    dispatch({ type: UPDATE_ORDER_STATUS_SUCCESS, payload: null });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: UPDATE_ORDER_STATUS_FAIL, payload: error });
  }
};
export {
  createOrder,
  getUserOrders,
  getUserOrder,
  getSellerOrders,
  getSellerOrder,
  updateOrderStatus,
};
