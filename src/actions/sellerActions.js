import sellerAPI from "../apis/sellerAPI";
import {
  SELLER_LOGIN_FAIL,
  SELLER_LOGIN_REQUEST,
  SELLER_LOGIN_SUCCESS,
  SELLER_PROFILE_DETAILS_FAIL,
  SELLER_PROFILE_DETAILS_REQUEST,
  SELLER_PROFILE_DETAILS_SUCCESS,
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

const getSellerDetails = () => async (dispatch) => {
  try {
    dispatch({ type: SELLER_PROFILE_DETAILS_REQUEST });

    const { token } = JSON.parse(localStorage.getItem("sellerInfo"));

    const { data } = await sellerAPI.get("/profile", {
      headers: { Authorization: token },
    });

    const { seller } = data;

    dispatch({ type: SELLER_PROFILE_DETAILS_SUCCESS, payload: seller });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: SELLER_PROFILE_DETAILS_FAIL, payload: error });
  }
};

export { sellerLogin, getSellerDetails };
