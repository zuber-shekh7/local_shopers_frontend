import adminAPI from "../apis/adminAPI";
import {
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGOUT_REQUEST,
  ADMIN_LOGOUT_SUCCESS,
  ADMIN_LOGOUT_FAIL,
  ADMIN_MANAGE_CATEGORIES_REQUEST,
  ADMIN_MANAGE_CATEGORIES_SUCCESS,
  ADMIN_MANAGE_CATEGORIES_FAIL,
  ADMIN_MANAGE_PRODUCT_REQUEST,
  ADMIN_MANAGE_PRODUCT_SUCCESS,
  ADMIN_MANAGE_PRODUCT_FAIL,
  ADMIN_MANAGE_SELLER_LIST_REQUEST,
  ADMIN_MANAGE_SELLER_LIST_SUCCESS,
  ADMIN_MANAGE_SELLER_LIST_FAIL,
  ADMIN_MANAGE_USERS_LIST_REQUEST,
  ADMIN_MANAGE_USERS_LIST_SUCCESS,
  ADMIN_MANAGE_USERS_LIST_FAIL,
  ADMIN_MANAGE_ADMIN_LIST_REQUEST,
  ADMIN_MANAGE_ADMIN_LIST_SUCCESS,
  ADMIN_MANAGE_ADMIN_LIST_FAIL,
  ADMIN_MANAGE_BUSINESS_CATEGORY_LIST_FAIL,
  ADMIN_MANAGE_BUSINESS_CATEGORY_LIST_REQUEST,
  ADMIN_MANAGE_BUSINESS_CATEGORY_LIST_SUCCESS,
  ADMIN_CUMMULATIVE_STATS_REQUEST,
  ADMIN_CUMMULATIVE_STATS_FAIL,
  ADMIN_CUMMULATIVE_STATS_SUCCESS,
} from "../constants/adminConstants";

const adminLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_LOGIN_REQUEST });

    const { data } = await adminAPI.post("/login", { email, password });

    localStorage.setItem("adminInfo", JSON.stringify(data));

    dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: data });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: ADMIN_LOGIN_FAIL, payload: error });
  }
};

const adminLogout = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_LOGOUT_REQUEST });

    localStorage.clear();

    dispatch({ type: ADMIN_LOGOUT_SUCCESS, payload: null });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: ADMIN_LOGOUT_FAIL, payload: error });
  }
};

const getCummulativeStats = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_CUMMULATIVE_STATS_REQUEST, loading: true });
    const { data } = await adminAPI.post("/get");

    dispatch({
      type: ADMIN_CUMMULATIVE_STATS_SUCCESS,
      loading: false,
      payload: data,
    });
  } catch (err) {
    const error = err.message ? err.message : err.response.data.message;
    dispatch({
      type: ADMIN_CUMMULATIVE_STATS_FAIL,
      loading: false,
      payload: error,
    });
  }
};

const getManageCategory = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_MANAGE_CATEGORIES_REQUEST, loading: true });
    const { data } = await adminAPI.post("/getcategories");

    dispatch({
      type: ADMIN_MANAGE_CATEGORIES_SUCCESS,
      loading: false,
      payload: data,
    });
  } catch (err) {
    const error = err.message ? err.message : err.response.data.message;
    dispatch({
      type: ADMIN_MANAGE_CATEGORIES_FAIL,
      loading: false,
      payload: error,
    });
  }
};

const getAdminProductList = (categoryId) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_MANAGE_PRODUCT_REQUEST });
    const { data } = await adminAPI.post("/getProducts", { categoryId });

    dispatch({ type: ADMIN_MANAGE_PRODUCT_SUCCESS, payload: data });
  } catch (err) {
    const error = err.message ? err.message : err.response.data.message;
    dispatch({ type: ADMIN_MANAGE_PRODUCT_FAIL, payload: error });
  }
};

const getSellerDetails = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_MANAGE_SELLER_LIST_REQUEST });
    const { data } = await adminAPI.post("/getseller");

    dispatch({ type: ADMIN_MANAGE_SELLER_LIST_SUCCESS, payload: data });
  } catch (err) {
    const error = err.message ? err.message : err.response.data.message;
    dispatch({ type: ADMIN_MANAGE_SELLER_LIST_FAIL, payload: error });
  }
};

const getUsersDetails = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_MANAGE_USERS_LIST_REQUEST });
    const { data } = await adminAPI.post("/getusers");

    dispatch({
      type: ADMIN_MANAGE_USERS_LIST_SUCCESS,
      loading: false,
      payload: data,
    });
  } catch (err) {
    const error = err.message ? err.message : err.response.data.message;
    dispatch({
      type: ADMIN_MANAGE_USERS_LIST_FAIL,
      payload: error,
      loading: false,
    });
  }
};

const getAdminList = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_MANAGE_ADMIN_LIST_REQUEST });
    const { data } = await adminAPI.post("/getadmins");

    dispatch({ type: ADMIN_MANAGE_ADMIN_LIST_SUCCESS, payload: data });
  } catch (err) {
    const error = err.message ? err.message : err.response.data.message;
    dispatch({ type: ADMIN_MANAGE_ADMIN_LIST_FAIL, payload: error });
  }
};

const getBusinessCategoryList = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_MANAGE_BUSINESS_CATEGORY_LIST_REQUEST });
    const { data } = await adminAPI.post("/getbusinesscategory");

    dispatch({
      type: ADMIN_MANAGE_BUSINESS_CATEGORY_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    const error = err.message ? err.message : err.response.data.message;
    dispatch({
      type: ADMIN_MANAGE_BUSINESS_CATEGORY_LIST_FAIL,
      payload: error,
    });
  }
};

export {
  adminLogin,
  adminLogout,
  getManageCategory,
  getAdminProductList,
  getSellerDetails,
  getUsersDetails,
  getAdminList,
  getBusinessCategoryList,
  getCummulativeStats,
};
