import sellerAPI from "../apis/sellerAPI";
import {
  BUSINESS_DETAILS_FAIL,
  BUSINESS_DETAILS_REQUEST,
  BUSINESS_DETAILS_SUCCESS,
  CREATE_BUSINESS_FAIL,
  CREATE_BUSINESS_REQUEST,
  CREATE_BUSINESS_SUCCESS,
  SELLER_LOGIN_FAIL,
  SELLER_LOGIN_REQUEST,
  SELLER_LOGIN_SUCCESS,
  SELLER_LOGOUT_FAIL,
  SELLER_LOGOUT_REQUEST,
  SELLER_LOGOUT_SUCCESS,
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

const createBusines = (name, description) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_BUSINESS_REQUEST });

    const { token } = JSON.parse(localStorage.getItem("sellerInfo"));

    const { data } = await sellerAPI.post(
      "/business/new",
      { name, description },
      {
        headers: { Authorization: token },
      }
    );

    dispatch({ type: CREATE_BUSINESS_SUCCESS, payload: data });

    dispatch({ type: SELLER_PROFILE_DETAILS_REQUEST });

    dispatch({ type: SELLER_PROFILE_DETAILS_SUCCESS, payload: null });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: CREATE_BUSINESS_FAIL, payload: error });
  }
};

const getBusinessDetails = () => async (dispatch) => {
  try {
    dispatch({ type: BUSINESS_DETAILS_REQUEST });

    const { token, seller } = JSON.parse(localStorage.getItem("sellerInfo"));

    const { data } = await sellerAPI.get(`/business/${seller.business}`, {
      headers: { Authorization: token },
    });

    const { business } = data;

    dispatch({ type: BUSINESS_DETAILS_SUCCESS, payload: business });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: BUSINESS_DETAILS_FAIL, payload: error });
  }
};

export {
  sellerLogin,
  getSellerDetails,
  sellerLogout,
  createBusines,
  getBusinessDetails,
};
