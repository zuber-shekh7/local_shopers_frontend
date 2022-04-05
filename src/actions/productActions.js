import backendAPI from "../apis/backendAPI";
import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_FAIL,
} from "../constants/productConstants";

export const getProducts = (categoryId) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS_REQUEST });

    const { data } = await backendAPI.get(
      `/products/?categoryId=${categoryId}`
    );
    const { products } = data;

    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_PRODUCTS_FAIL, payload: error });
  }
};

export const getProduct = (id) => async (dispatch) => {
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
