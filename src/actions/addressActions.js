import backendAPI from "../apis/backendAPI";
import {
  CREATE_ADDRESS_FAIL,
  CREATE_ADDRESS_REQUEST,
  CREATE_ADDRESS_SUCCESS,
  DELETE_ADDRESS_FAIL,
  DELETE_ADDRESS_REQUEST,
  DELETE_ADDRESS_SUCCESS,
  EDIT_ADDRESS_FAIL,
  EDIT_ADDRESS_REQUEST,
  EDIT_ADDRESS_SUCCESS,
  GET_ADDRESSES_FAIL,
  GET_ADDRESSES_REQUEST,
  GET_ADDRESSES_SUCCESS,
  GET_ADDRESS_FAIL,
  GET_ADDRESS_REQUEST,
  GET_ADDRESS_SUCCESS,
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

const createAddress =
  (
    fullName,
    mobileNumber,
    pincode,
    city,
    state,
    flatNo,
    landmark,
    street,
    user_id
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: CREATE_ADDRESS_REQUEST });

      const { token } = JSON.parse(localStorage.getItem("userInfo"));

      const { data } = await backendAPI.post(
        `/addresses/`,
        {
          fullName,
          mobileNumber,
          pincode,
          city,
          state,
          flatNo,
          street,
          landmark,
          user_id,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      const { address } = data;

      dispatch({ type: CREATE_ADDRESS_SUCCESS, payload: address });
      dispatch({ type: CREATE_ADDRESS_SUCCESS, payload: null });
    } catch (err) {
      const error = err.response ? err.response.data.message : err.message;
      dispatch({ type: CREATE_ADDRESS_FAIL, payload: error });
    }
  };

const getAddress = (address_id) => async (dispatch) => {
  try {
    dispatch({ type: GET_ADDRESS_REQUEST });

    const { token } = JSON.parse(localStorage.getItem("userInfo"));

    const { data } = await backendAPI.get(`/addresses/${address_id}`, {
      headers: {
        Authorization: token,
      },
    });
    const { address } = data;

    dispatch({ type: GET_ADDRESS_SUCCESS, payload: address });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_ADDRESS_FAIL, payload: error });
  }
};

const editAddress =
  (
    fullName,
    mobileNumber,
    pincode,
    city,
    state,
    flatNo,
    landmark,
    street,
    address_id
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: EDIT_ADDRESS_REQUEST });

      const { token } = JSON.parse(localStorage.getItem("userInfo"));

      const { data } = await backendAPI.put(
        `/addresses/${address_id}`,
        {
          fullName,
          mobileNumber,
          pincode,
          city,
          state,
          flatNo,
          street,
          landmark,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      const { address } = data;

      dispatch({ type: EDIT_ADDRESS_SUCCESS, payload: address });
      dispatch({ type: EDIT_ADDRESS_SUCCESS, payload: null });
    } catch (err) {
      const error = err.response ? err.response.data.message : err.message;
      dispatch({ type: EDIT_ADDRESS_FAIL, payload: error });
    }
  };

const deleteAddress = (address_id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ADDRESS_REQUEST });

    const { token } = JSON.parse(localStorage.getItem("userInfo"));

    await backendAPI.delete(`/addresses/${address_id}`, {
      headers: {
        Authorization: token,
      },
    });

    dispatch({ type: DELETE_ADDRESS_SUCCESS, payload: true });
    dispatch({ type: DELETE_ADDRESS_SUCCESS, payload: null });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: DELETE_ADDRESS_FAIL, payload: error });
  }
};

export { getAddresses, createAddress, getAddress, editAddress, deleteAddress };
