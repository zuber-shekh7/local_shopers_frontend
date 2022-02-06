import backendAPI from "../apis/backendAPI";
import { DELETE_CATEGORY_FAIL } from "../constants/categoryConstants";
import {
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_REQUEST,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  EDIT_PRODUCT_REQUEST,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
} from "../constants/productConstants";

const createProduct = (formData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PRODUCT_REQUEST });

    const { token } = JSON.parse(localStorage.getItem("sellerInfo"));

    const { data } = await backendAPI.post("/products", formData, {
      headers: {
        Authorization: token,
      },
    });
    const { product } = data;

    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: product });
    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: null });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: CREATE_PRODUCT_FAIL, payload: error });
  }
};

const getProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_REQUEST });

    const { data } = await backendAPI.get(`/products/${id}`);
    const { product } = data;

    dispatch({ type: GET_PRODUCT_SUCCESS, payload: product });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_PRODUCT_FAIL, payload: error });
  }
};

const editProduct = (formData, product_id) => async (dispatch) => {
  try {
    dispatch({ type: EDIT_PRODUCT_REQUEST });

    const { token } = JSON.parse(localStorage.getItem("sellerInfo"));

    const { data } = await backendAPI.put(`/products/${product_id}`, formData, {
      headers: {
        Authorization: token,
      },
    });
    const { product } = data;

    dispatch({ type: EDIT_PRODUCT_SUCCESS, payload: product });

    dispatch({ type: EDIT_PRODUCT_SUCCESS, payload: null });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: EDIT_PRODUCT_FAIL, payload: error });
  }
};

const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });

    const { token } = JSON.parse(localStorage.getItem("sellerInfo"));

    await backendAPI.delete(`/products/${id}`, {
      headers: {
        Authorization: token,
      },
    });

    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: true });

    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: null });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: DELETE_CATEGORY_FAIL, payload: error });
  }
};

export { createProduct, getProduct, editProduct, deleteProduct };
