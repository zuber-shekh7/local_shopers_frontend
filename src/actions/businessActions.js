import backendAPI from "../apis/backendAPI";
import {
  EDIT_BUSINESS_FAIL,
  EDIT_BUSINESS_REQUEST,
  EDIT_BUSINESS_SUCCESS,
} from "../constants/businessConstants";

const editBusiness =
  (name, description, category_id, business_id) => async (dispatch) => {
    try {
      dispatch({ type: EDIT_BUSINESS_REQUEST });

      const { token } = JSON.parse(localStorage.getItem("sellerInfo"));

      const { data } = await backendAPI.put(
        `/business/${business_id}/edit`,
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

export { editBusiness };
