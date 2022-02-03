import backendAPI from "../apis/backendAPI";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cartConstants";

const addToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await backendAPI.get(`/products/${id}`);

  const { product } = data;

  dispatch({
    type: ADD_TO_CART,
    payload: {
      ...product,
      qty: quantity,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: {
      id,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export { addToCart, removeFromCart };
