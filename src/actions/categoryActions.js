import backendAPI from "../apis/backendAPI";
import {
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAIL,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL,
} from "../constants/categoryConstants";

export const getCategories = (businessId) => async (dispatch) => {
  try {
    dispatch({ type: GET_CATEGORIES_REQUEST });

    const { data } = await backendAPI.get(
      `/categories/?businessId=${businessId}`
    );
    const { categories } = data;

    dispatch({ type: GET_CATEGORIES_SUCCESS, payload: categories });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_CATEGORIES_FAIL, payload: error });
  }
};

export const getCategory = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_CATEGORY_REQUEST });

    const { data } = await backendAPI.get(`/categories/${id}`);
    const { category } = data;

    dispatch({ type: GET_CATEGORY_SUCCESS, payload: category });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_CATEGORY_FAIL, payload: error });
  }
};
