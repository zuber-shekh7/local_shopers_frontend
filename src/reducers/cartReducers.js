import {
  ADD_TO_CART,
  GET_CART_ITEMS_FAIL,
  GET_CART_ITEMS_REQUEST,
  GET_CART_ITEMS_SUCCESS,
  REMOVE_FROM_CART,
  SAVE_BUSINESS,
  SAVE_PAYMENT_METHOD,
  SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstants";

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;

      const existItem = state.cartItems.find(
        (product) => product._id === item._id
      );

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((product) =>
            product._id === existItem._id ? item : product
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload.id
        ),
      };
    case SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload.address,
      };
    case SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload.paymentMethod,
      };
    case SAVE_BUSINESS:
      return {
        ...state,
        business: action.payload.business,
      };
    case GET_CART_ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
        cartItems: null,
      };
    case GET_CART_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: action.payload,
      };
    case GET_CART_ITEMS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        cartItems: null,
      };
    default:
      return state;
  }
};

export { cartReducer };
