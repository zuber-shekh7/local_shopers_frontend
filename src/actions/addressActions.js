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

export const getAddresses = (userId) => async (dispatch) => {
  try {
    dispatch({ type: GET_ADDRESSES_REQUEST });

    const { data } = await backendAPI.get(`/addresses/?userId=${userId}`);
    const { addresses } = data;

    dispatch({ type: GET_ADDRESSES_SUCCESS, payload: addresses });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_ADDRESSES_FAIL, payload: error });
  }
};

export const createAddress =
  (
    fullName,
    mobileNumber,
    pincode,
    city,
    state,
    flatNo,
    landmark,
    street,
    userId
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: CREATE_ADDRESS_REQUEST });

      const { data } = await backendAPI.post(`/addresses/`, {
        fullName,
        mobileNumber,
        pincode,
        city,
        state,
        flatNo,
        street,
        landmark,
        userId,
      });
      const { address } = data;

      dispatch({ type: CREATE_ADDRESS_SUCCESS, payload: address });
      dispatch({ type: CREATE_ADDRESS_SUCCESS, payload: null });
    } catch (err) {
      const error = err.response ? err.response.data.message : err.message;
      dispatch({ type: CREATE_ADDRESS_FAIL, payload: error });
    }
  };

export const getAddress = (addressId) => async (dispatch) => {
  try {
    dispatch({ type: GET_ADDRESS_REQUEST });

    const { data } = await backendAPI.get(`/addresses/${addressId}`);

    const { address } = data;

    dispatch({ type: GET_ADDRESS_SUCCESS, payload: address });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_ADDRESS_FAIL, payload: error });
  }
};

export const editAddress =
  (
    fullName,
    mobileNumber,
    pincode,
    city,
    state,
    flatNo,
    landmark,
    street,
    addressId
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: EDIT_ADDRESS_REQUEST });

      const { data } = await backendAPI.put(`/addresses/${addressId}`, {
        fullName,
        mobileNumber,
        pincode,
        city,
        state,
        flatNo,
        street,
        landmark,
      });
      const { address } = data;

      dispatch({ type: EDIT_ADDRESS_SUCCESS, payload: address });
      dispatch({ type: EDIT_ADDRESS_SUCCESS, payload: null });
    } catch (err) {
      const error = err.response ? err.response.data.message : err.message;
      dispatch({ type: EDIT_ADDRESS_FAIL, payload: error });
    }
  };

export const deleteAddress = (addressId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ADDRESS_REQUEST });

    await backendAPI.delete(`/addresses/${addressId}`);

    dispatch({ type: DELETE_ADDRESS_SUCCESS, payload: true });
    dispatch({ type: DELETE_ADDRESS_SUCCESS, payload: null });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: DELETE_ADDRESS_FAIL, payload: error });
  }
};
