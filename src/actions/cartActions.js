import backendAPI from "../apis/backendAPI";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SAVE_PAYMENT_METHOD,
  SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstants";

const addToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await backendAPI.get(`/products/${id}`);

  const { product } = data;

  dispatch({
    type: ADD_TO_CART,
    payload: {
      _id: product._id,
      image: product.image,
      name: product.name,
      price: product.price,
      qty: quantity,
      product,
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

const saveShippingAddress = (address) => async (dispatch, getState) => {
  dispatch({
    type: SAVE_SHIPPING_ADDRESS,
    payload: {
      address: JSON.parse(address),
    },
  });

  localStorage.setItem("shippingAddress", address);
};

const savePaymentMethod = (paymentMethod) => async (dispatch, getState) => {
  dispatch({
    type: SAVE_PAYMENT_METHOD,
    payload: {
      paymentMethod,
    },
  });

  localStorage.setItem("paymentMethod", paymentMethod);
};

const saveBusiness = (business) => async (dispatch) => {
  dispatch({
    type: SAVE_PAYMENT_METHOD,
    payload: {
      business,
    },
  });

  localStorage.setItem("business", business);
};
export {
  addToCart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
  saveBusiness,
};
