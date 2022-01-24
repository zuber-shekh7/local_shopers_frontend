import backendAPI from "../apis/backendAPI";
import {
  GET_WISHLIST_FAIL,
  GET_WISHLIST_REQUEST,
  GET_WISHLIST_SUCCESS,
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

export { getWishList };
