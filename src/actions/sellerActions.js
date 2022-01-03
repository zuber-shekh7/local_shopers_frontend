import sellerAPI from "../apis/sellerAPI";
import {
  SELLER_LOGIN_FAIL,
  SELLER_LOGIN_REQUEST,
  SELLER_LOGIN_SUCCESS,
} from "../constants/selllerConstants";

const sellerLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: SELLER_LOGIN_REQUEST });

    const { data } = await sellerAPI.post("/login", { email, password });

    localStorage.setItem("sellerInfo", JSON.stringify(data));

    dispatch({ type: SELLER_LOGIN_SUCCESS, payload: data });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: SELLER_LOGIN_FAIL, payload: error });
  }
};

export { sellerLogin };
