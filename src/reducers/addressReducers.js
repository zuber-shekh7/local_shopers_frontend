import {
  GET_ADDRESSES_FAIL,
  GET_ADDRESSES_REQUEST,
  GET_ADDRESSES_SUCCESS,
} from "../constants/addressConstants";

const getAddressesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ADDRESSES_REQUEST:
      return { loading: true };
    case GET_ADDRESSES_SUCCESS:
      return { ...state, loading: false, addresses: action.payload };
    case GET_ADDRESSES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { getAddressesReducer };
