import backendAPI from "../apis/backendAPI";
import {
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_REQUEST,
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

export { createProduct };
