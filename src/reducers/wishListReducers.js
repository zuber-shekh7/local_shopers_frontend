import {
  GET_WISHLIST_REQUEST,
  GET_WISHLIST_SUCCESS,
  GET_WISHLIST_FAIL,
  REMOVE_FROM_WISHLIST_REQUEST,
  REMOVE_FROM_WISHLIST_SUCCESS,
  REMOVE_FROM_WISHLIST_FAIL,
  ADD_TO_WISHLIST_REQUEST,
  ADD_TO_WISHLIST_SUCCESS,
  ADD_TO_WISHLIST_FAIL,
} from "../constants/wishListConstants";

const getWishlistReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_WISHLIST_REQUEST:
      return { ...state, loading: true };
    case GET_WISHLIST_SUCCESS:
      return { ...state, loading: false, wishlist: action.payload };
    case GET_WISHLIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};
const addToWishlistReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST_REQUEST:
      return { ...state, loading: true };
    case ADD_TO_WISHLIST_SUCCESS:
      return { ...state, loading: false, success: action.payload };
    case ADD_TO_WISHLIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const removeFromWishlistReducer = (state = {}, action) => {
  switch (action.type) {
    case REMOVE_FROM_WISHLIST_REQUEST:
      return { ...state, loading: true };
    case REMOVE_FROM_WISHLIST_SUCCESS:
      return { ...state, loading: false, success: action.payload };
    case REMOVE_FROM_WISHLIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { getWishlistReducer, addToWishlistReducer, removeFromWishlistReducer };
