import backendAPI from "../apis/backendAPI";
import {
  CREATE_BUSINESS_REQUEST,
  CREATE_BUSINESS_SUCCESS,
  CREATE_BUSINESS_FAIL,
  EDIT_BUSINESS_FAIL,
  EDIT_BUSINESS_REQUEST,
  EDIT_BUSINESS_SUCCESS,
  GET_BUSINESS_FAIL,
  GET_BUSINESS_REQUEST,
  GET_BUSINESS_SUCCESS,
} from "../constants/businessConstants";

const createBusiness = (name, description, category) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_BUSINESS_REQUEST });

    const { token } = JSON.parse(localStorage.getItem("sellerInfo"));

    const { data } = await backendAPI.post(
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

const getBusiness = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_BUSINESS_REQUEST });

    const { data } = await backendAPI.get(`/business/${id}`);

    const { business } = data;

    dispatch({ type: GET_BUSINESS_SUCCESS, payload: business });
  } catch (err) {
    const error = err.response ? err.response.data.message : err.message;
    dispatch({ type: GET_BUSINESS_FAIL, payload: error });
  }
};

const editBusiness =
  (name, description, category_id, business_id) => async (dispatch) => {
    try {
      dispatch({ type: EDIT_BUSINESS_REQUEST });

      const { token } = JSON.parse(localStorage.getItem("sellerInfo"));

      const { data } = await backendAPI.put(
        `/business/${business_id}`,
        { name, description, category_id },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      const { business } = data;

      dispatch({ type: EDIT_BUSINESS_SUCCESS, payload: business });

      dispatch({ type: EDIT_BUSINESS_SUCCESS, payload: null });
    } catch (err) {
      const error = err.response ? err.response.data.message : err.message;
      dispatch({ type: EDIT_BUSINESS_FAIL, payload: error });
    }
  };

export { createBusiness, getBusiness, editBusiness };
