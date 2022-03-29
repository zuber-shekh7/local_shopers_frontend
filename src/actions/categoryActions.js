import backendAPI from "../apis/backendAPI";
import {
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAIL,
} from "../constants/categoryConstants";

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
