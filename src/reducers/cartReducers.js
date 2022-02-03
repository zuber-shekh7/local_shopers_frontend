import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cartConstants";

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

    default:
      return state;
  }
};

export { cartReducer };
