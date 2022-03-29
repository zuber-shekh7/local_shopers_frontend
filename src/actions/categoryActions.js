import backendAPI from "../apis/backendAPI";
import {
  FETCH_CATEGORY_DETAILS_FAIL,
  FETCH_CATEGORY_DETAILS_REQUEST,
  FETCH_CATEGORY_DETAILS_SUCCESS,
} from "../constants/categoryConstants";

export const getCategory = (id) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_CATEGORY_DETAILS_REQUEST });

    const { data } = await backendAPI.get(`/categories/${id}`, {});
    const { category } = data;

    dispatch({ type: FETCH_CATEGORY_DETAILS_SUCCESS, payload: category });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: FETCH_CATEGORY_DETAILS_FAIL, payload: error });
  }
};
