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

const createAddressReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ADDRESS_REQUEST:
      return { loading: true };
    case CREATE_ADDRESS_SUCCESS:
      return { ...state, loading: false, address: action.payload };
    case CREATE_ADDRESS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const getAddressReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ADDRESS_REQUEST:
      return { loading: true };
    case GET_ADDRESS_SUCCESS:
      return { ...state, loading: false, address: action.payload };
    case GET_ADDRESS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const editAddressReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_ADDRESS_REQUEST:
      return { loading: true };
    case EDIT_ADDRESS_SUCCESS:
      return { ...state, loading: false, address: action.payload };
    case EDIT_ADDRESS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const deleteAddressReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ADDRESS_REQUEST:
      return { loading: true };
    case DELETE_ADDRESS_SUCCESS:
      return { ...state, loading: false, success: action.payload };
    case DELETE_ADDRESS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export {
  getAddressesReducer,
  createAddressReducer,
  getAddressReducer,
  editAddressReducer,
  deleteAddressReducer,
};
