import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";
import { getProduct } from "../../actions/productActions";

import routes from "../../utils/routes";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const { productId } = useParams();

  const { loading, product, error } = useSelector((state) => state.getProduct);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [productId, dispatch]);

  const addToCartHandler = () => {
    navigate(`${routes.cart}/${productId}?quantity=${quantity}`);
  };

  const addToWishListHandler = (id) => {
    navigate(`/users/wishlist/${id}`);
  };

  return (
    <main className="container">
      <section>
        <div className="flex mb-3">
          <div>
            <button
              onClick={() => navigate(-2)}
              className="text-base sm:text-lg flex justify-center items-center space-x-1  hover:text-indigo-700"
              to={"/"}
            >
              <span className="font-bold capitalize">Business</span>
              <span>
                <HiChevronRight />
              </span>
            </button>
          </div>
          <div>
            <button
              onClick={() => navigate(-1)}
              className="text-base sm:text-lg flex justify-center items-center space-x-1  hover:text-indigo-700"
              to={"/"}
            >
              <span className="font-bold capitalize">Category</span>
              <span>
                <HiChevronRight />
              </span>
            </button>
          </div>
          <div>
            <button
              onClick={() => {}}
              className="text-base sm:text-lg flex justify-center items-center space-x-1 text-indigo-600 hover:text-indigo-700"
              to={"/"}
            >
              <span className="font-bold">
                {product ? product.name : "Product"}
              </span>
            </button>
          </div>
        </div>
        {error && <h5 className="text-center text-red-500">{error}</h5>}
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

      <section>
        {product && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-5">
            <div className="col-span-6">
              <div className="flex justify-center items-center">
                <img
                  className="flex-1 h-max w-max  rounded-lg"
                  src={product.image}
                  alt={product.name}
                />
              </div>
            </div>
            <div className="col-span-6">
              <div>
                <h2>{product.name}</h2>
                <h2 className="text-indigo-600">₹ {product.price}/-</h2>
                <p>{product.description}</p>

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
                      className="block my-3 px-3 py-2 border text-indigo-600 border-indigo-600 rounded-lg w-full hover:bg-indigo-100"
                      variant="warning"
                    >
                      Add to Wishlist
                    </button>

                    {product.quantity > 0 ? (
                      <button
                        className="px-3 py-2 bg-indigo-600 rounded-lg text-white w-full hover:bg-indigo-700"
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

export default ProductPage;
