import backendAPI from "../apis/backendAPI";
import {
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
export { getBusinessCategories, getBusinessCategory };
