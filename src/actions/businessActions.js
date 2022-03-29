import backendAPI from "../apis/backendAPI";
import {
  GET_BUSINESS_FAIL,
  GET_BUSINESS_REQUEST,
  GET_BUSINESS_SUCCESS,
} from "../constants/businessConstants";

export const getBusiness = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_BUSINESS_REQUEST });

    const { data } = await backendAPI.get(`/business/${id}`);

    const { business } = data;

    dispatch({ type: GET_BUSINESS_SUCCESS, payload: business });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_BUSINESS_FAIL, payload: error });
  }
};
