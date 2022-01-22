import sellerAPI from "../apis/sellerAPI";
import {
  SELLER_LOGIN_FAIL,
  SELLER_LOGIN_REQUEST,
  SELLER_LOGIN_SUCCESS,
  SELLER_LOGIN_WITH_GOOGLE_FAIL,
  SELLER_LOGIN_WITH_GOOGLE_REQUEST,
  SELLER_LOGIN_WITH_GOOGLE_SUCCESS,
  SELLER_LOGOUT_FAIL,
  SELLER_LOGOUT_REQUEST,
  SELLER_LOGOUT_SUCCESS,
  GET_SELLER_REQUEST,
  GET_SELLER_SUCCESS,
  GET_SELLER_FAIL,
  SELLER_SIGNUP_FAIL,
  SELLER_SIGNUP_REQUEST,
  SELLER_SIGNUP_SUCCESS,
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

const sellerSignup =
  (email, password, firstName, lastName, mobile) => async (dispatch) => {
    try {
      dispatch({ type: SELLER_SIGNUP_REQUEST });

      const { data } = await sellerAPI.post("/signup", {
        email,
        password,
        firstName,
        lastName,
        mobile,
      });

      localStorage.setItem("sellerInfo", JSON.stringify(data));

      dispatch(sellerLogin(email, password));

      dispatch({ type: SELLER_SIGNUP_SUCCESS, payload: data });
    } catch (err) {
      const error = err.response ? err.response.data.message : err.message;
      dispatch({ type: SELLER_SIGNUP_FAIL, payload: error });
    }
  };

const sellerLogout = () => (dispatch) => {
  try {
    dispatch({ type: SELLER_LOGOUT_REQUEST });

    localStorage.clear();

    dispatch({ type: SELLER_LOGOUT_SUCCESS });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: SELLER_LOGOUT_FAIL, payload: error });
  }
};

const getSeller = () => async (dispatch) => {
  try {
    dispatch({ type: GET_SELLER_REQUEST });

    const { token, seller: sellerInfo } = JSON.parse(
      localStorage.getItem("sellerInfo")
    );

    const { data } = await sellerAPI.get(`${sellerInfo._id}`, {
      headers: { Authorization: token },
    });

    const { seller } = data;

    localStorage.setItem("seller", JSON.stringify(seller));

    dispatch({ type: GET_SELLER_SUCCESS, payload: seller });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_SELLER_FAIL, payload: error });
  }
};

const sellerLoginWithGoogle = (token) => async (dispatch) => {
  try {
    dispatch({ type: SELLER_LOGIN_WITH_GOOGLE_REQUEST });

    const { data } = await sellerAPI.post("/login/google", { token });

    localStorage.setItem("sellerInfo", JSON.stringify(data));

    dispatch({ type: SELLER_LOGIN_WITH_GOOGLE_SUCCESS, payload: data });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: SELLER_LOGIN_WITH_GOOGLE_FAIL, payload: error });
  }
};

export {
  sellerLogin,
  sellerSignup,
  sellerLoginWithGoogle,
  getSeller,
  sellerLogout,
};
