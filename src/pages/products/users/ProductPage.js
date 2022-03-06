import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../../actions/productActions";
import routes from "../../../utils/routes";

const UserProductPage = ({ match, history }) => {
  const [quantity, setQuantity] = useState(1);

  const { product_id } = match.params;

  const { loading, product, error } = useSelector((state) => state.getProduct);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(product_id));
  }, [product_id, dispatch]);

  const addToCartHandler = () => {
    history.push(`${routes.cart}/${product_id}?quantity=${quantity}`);
  };

  const addToWishListHandler = (id) => {
    history.push(`/users/wishlist/${id}`);
  };

  return (
    <main>
      <section className="m-10 px-10 max-w-6xl mx-auto">
        {loading && !product && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10">
            <div className="animate-pulse col-span-6 p-10 ">
              <div className="flex justify-center items-center">
                <div className="block h-72 w-full bg-gray-300 rounded-lg"></div>
              </div>
            </div>
            <div className="animate-pulse col-span-6 p-10 ">
              <div className="h-12 w-4/12 bg-gray-300 rounded-lg mb-3"></div>
              <div className="h-8 w-4/12 bg-gray-300 rounded-lg mb-3"></div>
              <div className="h-4 w-5/12 bg-gray-300 rounded-lg mb-3"></div>
              <div className="h-10 w-full bg-gray-300 rounded-lg mb-3"></div>
              <div className="h-10 w-full bg-gray-300 rounded-lg mb-3"></div>
              <div className="h-10 w-full bg-gray-300 rounded-lg mb-3"></div>
            </div>
          </div>
        )}
      </section>

      <section className="m-10 px-10 max-w-6xl mx-auto">
        {product && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10">
            <div className="col-span-6 p-10">
              <div className="flex justify-center items-center">
                <img
                  className="flex-1 h-max w-max  rounded-lg"
                  src={product.image}
                  alt={product.name}
                />
                <h2>h1h1</h2>
              </div>
            </div>
            <div className="col-span-6 p-10">
              <div>
                <h2 className="text-4xl font-semibold mb-3">{product.name}</h2>
                <h2 className="text-2xl text-indigo-500 mb-3">
                  ₹ {product.price}/-
                </h2>
                <p className="text-lg mb-3">{product.description}</p>

                <div className="mb-3">
                  {product.quantity > 0 && (
                    <div>
                      <select
                        className="w-full px-3 py-2 rounded-lg"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      >
                        {[...Array(product.quantity).keys()].map((i) => {
                          return (
                            <option key={i} value={i + 1}>
                              {i + 1}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  )}
                  <div className="mb-3">
                    <button
                      onClick={() => addToWishListHandler(product._id)}
                      className="block my-3 px-3 py-2 border text-indigo-500 border-indigo-500 rounded-lg w-full hover:bg-indigo-100"
                      variant="warning"
                    >
                      Add to Wishlist
                    </button>

                    {product.quantity > 0 ? (
                      <button
                        className="px-3 py-2 bg-indigo-500 rounded-lg text-white w-full hover:bg-indigo-600"
                        onClick={addToCartHandler}
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <button className="mt-5 px-3 py-2 bg-indigo-500 rounded-lg text-white w-full">
                        Out of Stock
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default UserProductPage;
