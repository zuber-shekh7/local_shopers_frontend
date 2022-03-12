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

const getWishList = (userId) => async (dispatch) => {
  try {
    dispatch({ type: GET_WISHLIST_REQUEST });

    const token = `Bearer ${JSON.parse(localStorage.getItem("token"))}`;

    const { data } = await backendAPI.get(`/wishlists/?userId=${userId}`, {
      headers: {
        Authorization: token,
      },
    });
    const { wishList } = data;

    dispatch({ type: GET_WISHLIST_SUCCESS, payload: wishList });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_WISHLIST_FAIL, payload: error });
  }
};

const addToWishList = (wishlistId, productId) => async (dispatch) => {
  try {
    dispatch({ type: ADD_TO_WISHLIST_REQUEST });

    const token = `Bearer ${JSON.parse(localStorage.getItem("token"))}`;

    await backendAPI.post(
      `/wishlists/`,
      {
        wishlistId,
        productId,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    dispatch({ type: ADD_TO_WISHLIST_SUCCESS, payload: true });
    dispatch({ type: ADD_TO_WISHLIST_SUCCESS, payload: null });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: ADD_TO_WISHLIST_FAIL, payload: error });
  }
};

const removeFromWishList = (wishlistId, productId) => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_FROM_WISHLIST_REQUEST });

    const token = `Bearer ${JSON.parse(localStorage.getItem("token"))}`;

    await backendAPI.delete(`/wishlists/`, {
      headers: {
        Authorization: token,
      },
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

export { getWishList, addToWishList, removeFromWishList };
