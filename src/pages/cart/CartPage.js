import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { HiOutlineShoppingCart, HiOutlineXCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import { useLocation } from "react-router-dom";

const CartPage = () => {
  const { productId } = useParams();

  const location = useLocation();
  const quantity = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity));
    }
  }, [productId, quantity, dispatch]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/checkout/shipping");
  };

  return (
    <main className="container">
      <section>
        <h1 className="flex items-center space-x-2">
          <HiOutlineShoppingCart className="h-8 w-8" /> <span>Your Cart</span>
        </h1>
        <hr />
        <section>
          <div className="grid grid-cols-1">
            {cartItems.length === 0 ? (
              <h3 className="text-center mt-5">
                There are no items in your cart.
              </h3>
            ) : (
              <div>
                <table className="table-auto w-full">
                  <thead className="text-left">
                    <tr className="border-b-2">
                      <th className="text-lg md:text-2xl py-2">Products</th>
                      <th className="text-lg md:text-2xl">Price</th>
                      <th className="text-lg md:text-2xl">Quantity</th>
                      <th className="text-lg md:text-2xl">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => {
                      return (
                        <tr key={item._id} className="border-b">
                          <td>
                            <div className="flex items-center py-5 space-x-5 md:space-x-10">
                              <img
                                className="h:8 w-8 md:h-24 md:w-24 rounded-lg object-cover"
                                src={item.image}
                                alt={item.name}
                              />
                              <Link
                                to={`/business/products/${item.product._id}`}
                              >
                                <h2 className="text-lg md:text-2xl text-indigo-600">
                                  {item.name}
                                </h2>
                              </Link>
                            </div>
                          </td>

                          <td className="text-lg md:text-xl text-indigo-600">
                            ₹ {item.price}/-
                          </td>
                          <td>
                            <select
                              className="text-sm  md:text-lg py-2 rounded-lg outline-none mr-5"
                              value={item.qty}
                              onChange={(e) => {
                                dispatch(
                                  addToCart(
                                    item.product._id,
                                    Number(e.target.value)
                                  )
                                );
                              }}
                            >
                              {[...Array(item.product.quantity).keys()].map(
                                (i, index) => {
                                  return (
                                    <option key={index} value={i + 1}>
                                      {i + 1}
                                    </option>
                                  );
                                }
                              )}
                            </select>
                          </td>
                          <td className="text-xl">
                            <div className="flex justify-between">
                              <span>₹ {item.price * item.qty}/-</span>
                              <div className="flex items-center">
                                <button
                                  onClick={() =>
                                    removeFromCartHandler(item._id)
                                  }
                                >
                                  <HiOutlineXCircle className="h-4 w-4 md:h-8 md:w-8" />
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="flex justify-start sm:justify-end bg-gray-50 px-5 py-5">
                  <div>
                    <h6 className="text-lg md:text-2xl font-medium mb-3">
                      Sub Total of{" "}
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)} items
                    </h6>
                    <h4 className="text-lg md:text-xl font-semibold mb-3">
                      ₹{" "}
                      {cartItems
                        .reduce((acc, item) => acc + item.price * item.qty, 0)
                        .toFixed(2)}{" "}
                      {"/-"}
                    </h4>
                    <button
                      onClick={checkoutHandler}
                      disabled={cartItems.length === 0}
                      className="text-base md:text-lg w-full px-2 py-2 bg-indigo-600 rounded-lg text-white hover:bg-indigo-700"
                    >
                      Proceed To Checkout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </section>
    </main>
  );
};

export default CartPage;
