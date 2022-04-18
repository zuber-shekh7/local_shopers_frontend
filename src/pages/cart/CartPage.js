import React, { useEffect } from "react";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import {
  HiOutlineShoppingCart,
  HiOutlineTrash,
  HiOutlineXCircle,
} from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  getCartItems,
  removeFromCart,
  saveBusiness,
} from "../../actions/cartActions";
import { Loader } from "../../components/loaders";
import { Error } from "../../components/messages";
import Breadcrumb from "../../components/shared/Breadcrumb";
import routes from "../../utils/routes";
import { Button } from "../../components/buttons";
import HeaderContainer from "../../components/shared/HeaderContainer";
import { Card } from "../../components/cards";
import { toast } from "react-toastify";

const CartPage = () => {
  const { productId } = useParams();
  const [searchParams] = useSearchParams();

  const quantity = searchParams.get("quantity", 1);
  const link = searchParams.get("link", "");
  const businessId = searchParams.get("businessId", "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, cartItems, error } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, link, quantity));
      dispatch(saveBusiness(businessId));
    }
  }, [productId, link, businessId, quantity, dispatch]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/checkout/shipping");
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success("Clear cart successfully");
  };

  return (
    <main>
      <HeaderContainer>
        <h1 className="flex items-center space-x-2 mb-0">
          <HiOutlineShoppingCart className="h-8 w-8" /> <span>Your Cart</span>
        </h1>
      </HeaderContainer>
      <section className="container">
        <div className="flex justify-between items-center mb-5">
          <Breadcrumb
            className="mb-0"
            links={[
              {
                name: "home",
                to: routes.dashboard,
              },
              {
                name: "cart",
                to: "",
              },
            ]}
          />
          <Button
            onClick={handleClearCart}
            className="bg-red-500 hover:bg-red-600"
          >
            <span className="flex justify-center items-center gap-x-2">
              <HiOutlineTrash />
              <span className="hidden md:block">Empty cart</span>
            </span>
          </Button>
        </div>
        <div className="flex justify-center">
          {loading && <Loader />}
          {error && <Error />}
        </div>
        {cartItems && (
          <section>
            <Card className="grid grid-cols-1 shadow-lg">
              {cartItems.length === 0 ? (
                <h3 className="text-center mt-5">
                  There are no items in your cart.
                </h3>
              ) : (
                <div>
                  <table className="table-auto w-full">
                    <thead className="text-left">
                      <tr className="border-b">
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
                                  src={item.photo}
                                  alt={item.name}
                                />
                                <Link to={item.link}>
                                  <h2 className="text-lg md:text-2xl text-indigo-600">
                                    {item.name}
                                  </h2>
                                </Link>
                              </div>
                            </td>

                            <td className="text-lg md:text-xl text-indigo-600">
                              ₹ {item.discountPrice}{" "}
                              <span className="text-gray-500 line-through">
                                {item.price}
                              </span>
                            </td>
                            <td>
                              <select
                                className="text-sm  md:text-lg py-2 rounded-lg outline-none mr-5"
                                value={item.qty}
                                onChange={(e) => {
                                  dispatch(
                                    addToCart(
                                      item.product._id,
                                      item.link,
                                      Number(e.target.value)
                                    )
                                  );
                                }}
                              >
                                {[...Array(item.product.stock).keys()].map(
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
                                <span>₹ {item.discountPrice * item.qty}/-</span>
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
                  <div className="flex justify-start sm:justify-end bg-indigo-50 px-5 py-5">
                    <div>
                      <h6 className="text-lg md:text-2xl font-medium mb-3">
                        Sub Total of{" "}
                        {cartItems.reduce(
                          (acc, item) => acc + Number(item.qty),
                          0
                        )}{" "}
                        items
                      </h6>
                      <h4 className="text-lg md:text-xl font-semibold mb-3">
                        ₹{" "}
                        {cartItems
                          .reduce(
                            (acc, item) => acc + item.discountPrice * item.qty,
                            0
                          )
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
            </Card>
          </section>
        )}
      </section>
    </main>
  );
};

export default CartPage;
