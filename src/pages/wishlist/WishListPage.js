import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToWishList,
  getWishList,
  removeFromWishList,
} from "../../actions/wishListActions";

const WishListPage = ({ match }) => {
  const { loading, wishList, error } = useSelector((state) => state.wishList);

  const { user } = useSelector((state) => state.userLogin);

  const { product_id } = match.params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWishList(user._id));
  }, [dispatch, user]);

  useEffect(() => {
    if (product_id && wishList) {
      dispatch(addToWishList(wishList._id, product_id));
    }
  }, [product_id, wishList, dispatch]);

  const handleRemoveFromList = (wish_list_id, product_id) => {
    dispatch(removeFromWishList(wish_list_id, product_id));
  };

  return (
    <main>
      <section className="m-10 max-w-6xl mx-auto px-10">
        <h1 className="text-4xl font-semibold mb-4">Your Wish List</h1>
        <div>
          {wishList && wishList.products && wishList.products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {wishList.products.map((product) => {
                return (
                  <div
                    key={product._id}
                    className="bg-gray-50 border-2 rounded-lg px-4 py-4 shadow-lg"
                  >
                    <h2 className="text-2xl font-semibold mb-3">
                      {product.name}
                    </h2>
                    <p className="mb-3">{product.description}</p>
                    <div className="flex space-x-2">
                      <Link
                        className="bg-indigo-500 px-3 py-2 text-white rounded-lg"
                        to={`/business/products/${product._id}`}
                      >
                        View More
                      </Link>

                      <button
                        className="bg-red-500 px-3 py-2 text-white rounded-lg"
                        onClick={() =>
                          handleRemoveFromList(wishList._id, product._id)
                        }
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex justify-center">
              <h3 className="text-2xl text-center">
                No product available in wish list
              </h3>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default WishListPage;
