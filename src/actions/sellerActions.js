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
  SELLER_LOGIN_WITH_GOOGLE_FAIL,
  SELLER_LOGIN_WITH_GOOGLE_REQUEST,
  SELLER_LOGIN_WITH_GOOGLE_SUCCESS,
  SELLER_LOGOUT_FAIL,
  SELLER_LOGOUT_REQUEST,
  SELLER_LOGOUT_SUCCESS,
  SELLER_PROFILE_DETAILS_FAIL,
  SELLER_PROFILE_DETAILS_REQUEST,
  SELLER_PROFILE_DETAILS_SUCCESS,
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

const getSellerDetails = () => async (dispatch) => {
  try {
    dispatch({ type: SELLER_PROFILE_DETAILS_REQUEST });

    const { token } = JSON.parse(localStorage.getItem("sellerInfo"));

    const { data } = await sellerAPI.get("/profile", {
      headers: { Authorization: token },
    });

    const { seller } = data;

    localStorage.setItem("seller", JSON.stringify(seller));

    dispatch({ type: SELLER_PROFILE_DETAILS_SUCCESS, payload: seller });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: SELLER_PROFILE_DETAILS_FAIL, payload: error });
  }
};

const createBusines = (name, description, category) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_BUSINESS_REQUEST });

    const { token } = JSON.parse(localStorage.getItem("sellerInfo"));

    const { data } = await sellerAPI.post(
      "/business/new",
      { name, description, business_category_id: category },
      {
        headers: { Authorization: token },
      }
    );

    dispatch({ type: CREATE_BUSINESS_SUCCESS, payload: data });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: CREATE_BUSINESS_FAIL, payload: error });
  }
};

const getBusinessDetails = () => async (dispatch) => {
  try {
    dispatch({ type: BUSINESS_DETAILS_REQUEST });

    const { token } = JSON.parse(localStorage.getItem("sellerInfo"));
    const seller = JSON.parse(localStorage.getItem("seller"));

    const { data } = await sellerAPI.get(`/business/${seller.business._id}`, {
      headers: { Authorization: token },
    });

    const { business } = data;

    dispatch({ type: BUSINESS_DETAILS_SUCCESS, payload: business });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: BUSINESS_DETAILS_FAIL, payload: error });
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
  getSellerDetails,
  sellerLogout,
  createBusines,
  getBusinessDetails,
};
