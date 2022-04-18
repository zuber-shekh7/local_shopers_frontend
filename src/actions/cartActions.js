import backendAPI from "../apis/backendAPI";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SAVE_BUSINESS,
  SAVE_PAYMENT_METHOD,
  SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstants";

export const addToCart = (id, link, quantity) => async (dispatch, getState) => {
  const { data } = await backendAPI.get(`/products/${id}`);

  const { product } = data;

  dispatch({
    type: ADD_TO_CART,
    payload: {
      _id: product._id,
      photo: product.photos[0].url,
      name: product.name,
      price: product.price,
      discount: product.discount,
      discountPrice: product.discountPrice,
      unit: product.unit,
      link: link,
      qty: quantity,
      product,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: {
      id,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (address) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_ADDRESS,
    payload: {
      address: JSON.parse(address),
    },
  });

  localStorage.setItem("shippingAddress", address);
};

export const savePaymentMethod = (paymentMethod) => async (dispatch) => {
  dispatch({
    type: SAVE_PAYMENT_METHOD,
    payload: {
      paymentMethod,
    },
  });

  localStorage.setItem("paymentMethod", paymentMethod);
};

export const saveBusiness = (id) => async (dispatch) => {
  dispatch({
    type: SAVE_BUSINESS,
    payload: {
      businessId: id,
    },
  });

  localStorage.setItem("businessId", id);
};
