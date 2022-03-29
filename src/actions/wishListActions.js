import backendAPI from "../apis/backendAPI";
import {
  ADD_TO_WISHLIST_FAIL,
  ADD_TO_WISHLIST_REQUEST,
  ADD_TO_WISHLIST_SUCCESS,
  GET_WISHLIST_FAIL,
  GET_WISHLIST_REQUEST,
  GET_WISHLIST_SUCCESS,
  REMOVE_FROM_WISHLIST_FAIL,
  REMOVE_FROM_WISHLIST_REQUEST,
  REMOVE_FROM_WISHLIST_SUCCESS,
} from "../constants/wishListConstants";

export const getWishList = (userId) => async (dispatch) => {
  try {
    dispatch({ type: GET_WISHLIST_REQUEST });

    const { data } = await backendAPI.get(`/wishlists/?userId=${userId}`);
    const { wishList } = data;

    dispatch({ type: GET_WISHLIST_SUCCESS, payload: wishList });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_WISHLIST_FAIL, payload: error });
  }
};

export const addToWishList = (wishlistId, productId) => async (dispatch) => {
  try {
    dispatch({ type: ADD_TO_WISHLIST_REQUEST });

    await backendAPI.post(`/wishlists/`, {
      wishlistId,
      productId,
    });

    dispatch({ type: ADD_TO_WISHLIST_SUCCESS, payload: true });
    dispatch({ type: ADD_TO_WISHLIST_SUCCESS, payload: null });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: ADD_TO_WISHLIST_FAIL, payload: error });
  }
};

export const removeFromWishList =
  (wishlistId, productId) => async (dispatch) => {
    try {
      dispatch({ type: REMOVE_FROM_WISHLIST_REQUEST });

      await backendAPI.delete(`/wishlists/`, {
        data: {
          wishlistId,
          productId,
        },
      });

      dispatch({ type: REMOVE_FROM_WISHLIST_SUCCESS, payload: true });
      dispatch({ type: REMOVE_FROM_WISHLIST_SUCCESS, payload: null });
    } catch (err) {
      const error = err.response ? err.response.data.message : err.message;
      dispatch({ type: REMOVE_FROM_WISHLIST_FAIL, payload: error });
    }
  };
