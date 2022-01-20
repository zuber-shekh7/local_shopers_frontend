import backendAPI from "../apis/backendAPI";
import {
  FETCH_CATEGORIES_FAIL,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
} from "../constants/categoryConstants";

const getCategories = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_CATEGORIES_REQUEST });

    const { token, seller } = JSON.parse(localStorage.getItem("sellerInfo"));

    const { data } = await backendAPI.get("/business/categories", {
      params: { business_id: seller.business },
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });
    const { categories } = data;

    dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: categories });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: FETCH_CATEGORIES_FAIL, payload: error });
  }
};

export { getCategories };
