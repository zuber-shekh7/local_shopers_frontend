import backendAPI from "../apis/backendAPI";
import {
  GET_WISHLIST_FAIL,
  GET_WISHLIST_REQUEST,
  GET_WISHLIST_SUCCESS,
  REMOVE_FROM_WISHLIST_FAIL,
  REMOVE_FROM_WISHLIST_REQUEST,
  REMOVE_FROM_WISHLIST_SUCCESS,
} from "../constants/wishListConstants";

const getWishList = (user_id) => async (dispatch) => {
  try {
    dispatch({ type: GET_WISHLIST_REQUEST });

    const { token } = JSON.parse(localStorage.getItem("userInfo"));

    const { data } = await backendAPI.get(`/wishlists/?user_id=${user_id}`, {
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

const removeFromWishList = (wish_list_id, product_id) => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_FROM_WISHLIST_REQUEST });

    const { token } = JSON.parse(localStorage.getItem("userInfo"));

    await backendAPI.delete(`/wishlists/`, {
      headers: {
        Authorization: token,
      },
      data: {
        wish_list_id,
        product_id,
      },
    });

    dispatch({ type: REMOVE_FROM_WISHLIST_SUCCESS, payload: true });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: REMOVE_FROM_WISHLIST_FAIL, payload: error });
  }
};

export { getWishList, removeFromWishList };
