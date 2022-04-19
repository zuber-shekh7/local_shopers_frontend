import React from "react";
import {
  HiOutlineShare,
  HiOutlineShoppingCart,
  HiOutlineStar,
} from "react-icons/hi";
import { Button, CircleButton } from "../../buttons";

const Product = (props) => {
  const {
    product,
    addToCartHandler,
    addToWishListHandler,
    quantity,
    shareLink,
    setQuantity,
  } = props;

  return (
    <div>
      {product ? (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-5">
          <div className="col-span-6">
            <div className="flex justify-center items-center">
              <img
                className="flex-1 h-max w-max  rounded-lg"
                src={product.photos[0].url}
                alt={product.name}
              />
            </div>
          </div>
          <div className="col-span-6">
            <div>
              <div className="flex justify-between items-center">
                <h2>{product.name}</h2>
                <CircleButton onClick={shareLink}>
                  <HiOutlineShare className="h-6 w-6" />
                </CircleButton>
              </div>
              <ul>
                <li>
                  <p>M.R.P.: ₹ {product.price}</p>
                </li>
                <li>
                  <p>
                    Price:{" "}
                    <span className="text-indigo-600 text-xl font-medium">
                      ₹ {product.discountPrice}
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    You Save:{" "}
                    <span className="text-indigo-600 text-xl font-medium">
                      ₹ {product.price - product.discountPrice} (
                      {product.discount}%)
                    </span>
                  </p>
                </li>
              </ul>
              <p>{product.description}</p>

              <div className="mb-3">
                {product.stock > 0 && (
                  <div>
                    <select
                      className="w-full px-3 py-2 rounded-lg text-center"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    >
                      {[...Array(product.stock).keys()].map((i) => {
                        return (
                          <option key={i} value={i + 1}>
                            {i + 1}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                )}
                <div className="my-3">
                  {product.stock > 0 ? (
                    <Button
                      className="w-full flex justify-center items-center space-x-1"
                      onClick={addToCartHandler}
                    >
                      <span>
                        <HiOutlineShoppingCart />
                      </span>
                      <span>Add to Cart</span>
                    </Button>
                  ) : (
                    <Button className="bg-red-500 text-white hover:bg-red-600 w-full">
                      Out of Stock
                    </Button>
                  )}
                  <Button
                    onClick={() => addToWishListHandler(product._id)}
                    className="flex justify-center items-center space-x-1 w-full bg-indigo-50 border border-indigo-600 text-indigo-600 my-3 hover:bg-indigo-100"
                    variant="warning"
                  >
                    <span>
                      <HiOutlineStar />
                    </span>
                    <span>Add to Wishlist</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <h3>Product not available</h3>
        </div>
      )}
    </div>
  );
};

export default Product;
