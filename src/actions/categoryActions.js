import backendAPI from "../apis/backendAPI";
import {
  CREATE_CATEGORY_FAIL,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  EDIT_CATEGORY_REQUEST,
  EDIT_CATEGORY_SUCCESS,
  EDIT_CATEGORY_FAIL,
  FETCH_CATEGORIES_FAIL,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORY_DETAILS_FAIL,
  FETCH_CATEGORY_DETAILS_REQUEST,
  FETCH_CATEGORY_DETAILS_SUCCESS,
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

const getCategory = (id) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_CATEGORY_DETAILS_REQUEST });

    const { token } = JSON.parse(localStorage.getItem("sellerInfo"));

    const { data } = await backendAPI.get(`/business/categories/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    const { category } = data;

    dispatch({ type: FETCH_CATEGORY_DETAILS_SUCCESS, payload: category });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: FETCH_CATEGORY_DETAILS_FAIL, payload: error });
  }
};

const createCategory = (name) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_CATEGORY_REQUEST });

    const { token, seller } = JSON.parse(localStorage.getItem("sellerInfo"));

    const { data } = await backendAPI.post(
      "/business/categories/new",
      { name, business_id: seller.business },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    const { category } = data;

    dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: category });
    dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: null });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: CREATE_CATEGORY_FAIL, payload: error });
  }
};

const editCategory = (name, category_id) => async (dispatch) => {
  try {
    dispatch({ type: EDIT_CATEGORY_REQUEST });

    const { token, seller } = JSON.parse(localStorage.getItem("sellerInfo"));
    console.log(token);
    const { data } = await backendAPI.put(
      "/business/categories",
      { name, category_id },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    const { category } = data;

    dispatch({ type: EDIT_CATEGORY_SUCCESS, payload: category });

    dispatch({ type: EDIT_CATEGORY_SUCCESS, payload: null });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: EDIT_CATEGORY_FAIL, payload: error });
  }
};

export { getCategories, getCategory, createCategory, editCategory };
