import backendAPI from "../apis/backendAPI";
import {
  GET_ADDRESSES_FAIL,
  GET_ADDRESSES_REQUEST,
  GET_ADDRESSES_SUCCESS,
} from "../constants/addressConstants";

const getAddresses = (user_id) => async (dispatch) => {
  try {
    dispatch({ type: GET_ADDRESSES_REQUEST });

    const { token } = JSON.parse(localStorage.getItem("userInfo"));

    const { data } = await backendAPI.get(`/addresses/?user_id=${user_id}`, {
      headers: {
        Authorization: token,
      },
    });
    const { addresses } = data;

    dispatch({ type: GET_ADDRESSES_SUCCESS, payload: addresses });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_ADDRESSES_FAIL, payload: error });
  }
};

export { getAddresses };
