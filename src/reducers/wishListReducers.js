import {
  GET_WISHLIST_REQUEST,
  GET_WISHLIST_SUCCESS,
  GET_WISHLIST_FAIL,
  REMOVE_FROM_WISHLIST_REQUEST,
  REMOVE_FROM_WISHLIST_SUCCESS,
  REMOVE_FROM_WISHLIST_FAIL,
} from "../constants/wishListConstants";

const getWishListReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_WISHLIST_REQUEST:
      return { loading: true };
    case GET_WISHLIST_SUCCESS:
      return { ...state, loading: false, wishList: action.payload };
    case GET_WISHLIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case REMOVE_FROM_WISHLIST_REQUEST:
      return { loading: true };
    case REMOVE_FROM_WISHLIST_SUCCESS:
      return { ...state, loading: false, wishList: action.payload };
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

const removeFromWishListReducer = (state = {}, action) => {
  switch (action.type) {
    case REMOVE_FROM_WISHLIST_REQUEST:
      return { loading: true };
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

export { getWishListReducer, removeFromWishListReducer };
