import backendAPI from "../apis/backendAPI";
import {
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_REQUEST,
  FETCH_PRODUCT_DETAILS_REQUEST,
  FETCH_PRODUCT_DETAILS_SUCCESS,
  FETCH_PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";

const createProduct =
  (name, description, price, quantity, category_id) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_PRODUCT_REQUEST });

      const { token } = JSON.parse(localStorage.getItem("sellerInfo"));

      const { data } = await backendAPI.post(
        "/business/products/new",
        { name, description, price, quantity, category_id },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      const { product } = data;

      dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: product });
      dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: null });
    } catch (err) {
      const error = err.response ? err.response.data.message : err.message;
      dispatch({ type: CREATE_PRODUCT_FAIL, payload: error });
    }
  };

const getProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PRODUCT_DETAILS_REQUEST });

    const { token } = JSON.parse(localStorage.getItem("sellerInfo"));

    const { data } = await backendAPI.get(`/business/products/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    const { product } = data;

    dispatch({ type: FETCH_PRODUCT_DETAILS_SUCCESS, payload: product });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: FETCH_PRODUCT_DETAILS_FAIL, payload: error });
  }
};

export { createProduct, getProduct };
