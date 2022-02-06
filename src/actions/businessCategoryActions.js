import backendAPI from "../apis/backendAPI";
import {
  CREATE_BUSINESS_CATEGORY_FAIL,
  CREATE_BUSINESS_CATEGORY_REQUEST,
  CREATE_BUSINESS_CATEGORY_SUCCESS,
  DELETE_BUSINESS_CATEGORY_FAIL,
  DELETE_BUSINESS_CATEGORY_REQUEST,
  DELETE_BUSINESS_CATEGORY_SUCCESS,
  EDIT_BUSINESS_CATEGORY_FAIL,
  EDIT_BUSINESS_CATEGORY_REQUEST,
  EDIT_BUSINESS_CATEGORY_SUCCESS,
  GET_BUSINESS_CATEGORIES_FAIL,
  GET_BUSINESS_CATEGORIES_REQUEST,
  GET_BUSINESS_CATEGORIES_SUCCESS,
  GET_BUSINESS_CATEGORY_FAIL,
  GET_BUSINESS_CATEGORY_REQUEST,
  GET_BUSINESS_CATEGORY_SUCCESS,
} from "../constants/businessCategoryConstants";

const getBusinessCategories = () => async (dispatch) => {
  try {
    dispatch({ type: GET_BUSINESS_CATEGORIES_REQUEST });

    const { token } = JSON.parse(localStorage.getItem("adminInfo"));

    const { data } = await backendAPI.get("/business-categories", {
      headers: { Authorization: token },
    });

    const { categories } = data;

    dispatch({ type: GET_BUSINESS_CATEGORIES_SUCCESS, payload: categories });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_BUSINESS_CATEGORIES_FAIL, payload: error });
  }
};

const createBusinessCategory = (formData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_BUSINESS_CATEGORY_REQUEST });

    const { token } = JSON.parse(localStorage.getItem("adminInfo"));

    const { data } = await backendAPI.post(`/business-categories/`, formData, {
      headers: { Authorization: token },
    });

    const { category } = data;

    dispatch({ type: CREATE_BUSINESS_CATEGORY_SUCCESS, payload: category });
    dispatch({ type: CREATE_BUSINESS_CATEGORY_SUCCESS, payload: null });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: CREATE_BUSINESS_CATEGORY_FAIL, payload: error });
  }
};

const getBusinessCategory = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_BUSINESS_CATEGORY_REQUEST });

    const { token } = JSON.parse(localStorage.getItem("adminInfo"));

    const { data } = await backendAPI.get(`/business-categories/${id}`, {
      headers: { Authorization: token },
    });

    const { category } = data;

    dispatch({ type: GET_BUSINESS_CATEGORY_SUCCESS, payload: category });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_BUSINESS_CATEGORY_FAIL, payload: error });
  }
};

const editBusinessCategory = (formData, id) => async (dispatch) => {
  try {
    dispatch({ type: EDIT_BUSINESS_CATEGORY_REQUEST });

    const { token } = JSON.parse(localStorage.getItem("adminInfo"));

    const { data } = await backendAPI.put(
      `/business-categories/${id}`,
      formData,
      {
        headers: { Authorization: token },
      }
    );

    const { category } = data;

    dispatch({ type: EDIT_BUSINESS_CATEGORY_SUCCESS, payload: category });
    dispatch({ type: EDIT_BUSINESS_CATEGORY_SUCCESS, payload: null });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: EDIT_BUSINESS_CATEGORY_FAIL, payload: error });
  }
};

const deleteBusinessCategory = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_BUSINESS_CATEGORY_REQUEST });

    const { token } = JSON.parse(localStorage.getItem("adminInfo"));

    await backendAPI.delete(`/business-categories/${id}`, {
      headers: { Authorization: token },
    });

    dispatch({ type: DELETE_BUSINESS_CATEGORY_SUCCESS, payload: true });
    dispatch({ type: DELETE_BUSINESS_CATEGORY_SUCCESS, payload: null });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: DELETE_BUSINESS_CATEGORY_FAIL, payload: error });
  }
};

export {
  getBusinessCategories,
  createBusinessCategory,
  getBusinessCategory,
  editBusinessCategory,
  deleteBusinessCategory,
};
