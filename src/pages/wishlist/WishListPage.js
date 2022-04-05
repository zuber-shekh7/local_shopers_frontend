import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { HiOutlineTrash } from "react-icons/hi";
import Breadcrumb from "../../components/shared/Breadcrumb";
import {
  addToWishList,
  getWishList,
  removeFromWishList,
} from "../../actions/wishListActions";
import routes from "../../utils/routes";

const WishListPage = () => {
  const {
    loading: addLoading,
    success: addSuccess,
    error: addError,
  } = useSelector((state) => state.addToWishlist);
  const {
    loading: removeLoading,
    success: removeSuccess,
    error: removeError,
  } = useSelector((state) => state.removeFromWishlist);
  const { loading, wishlist, error } = useSelector(
    (state) => state.getWishlist
  );

  const { user } = useSelector((state) => state.userLogin);

  const { productId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWishList(user._id));
  }, [user, addSuccess, removeSuccess, dispatch]);

  useEffect(() => {
    if (productId && wishlist) {
      dispatch(addToWishList(wishlist._id, productId));
    }
  }, [productId, wishlist, dispatch]);

  const handleRemoveFromList = (wishlistId, productId) => {
    dispatch(removeFromWishList(wishlistId, productId));
  };

  if (addSuccess || removeSuccess) {
    return <Navigate to={routes.wishList} />;
  }

  return (
    <main>
      <section className="bg-indigo-600 text-white p-5">
        <div className="container">
          <h1 className="text-4xl font-semibold mb-4">Your Wish List</h1>
        </div>
      </section>
      <section className="container">
        <Breadcrumb
          links={[
            {
              name: "your account",
              to: routes.dashboard,
            },
            {
              name: "your wishlist",
              to: routes.wishList,
            },
          ]}
        />

        {(error || addError || removeError) && (
          <h5 className="text-center text-red-500">
            {error || addError || removeError}
          </h5>
        )}
        {(loading || addLoading || removeLoading) && !wishlist && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[...Array(6).fill(1, 6)].map((value, index) => {
              return (
                <div
                  key={index}
                  className="bg-gray-50  rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="w-full h-64 bg-gray-300  mb-3"></div>
                  <div className="flex flex-col items-center gap-x-2 py-4">
                    <div className="h-8 w-8/12 bg-gray-300 rounded-lg mb-3"></div>
                    <div className="h-4 w-8/12 bg-gray-300 rounded-lg mb-3"></div>
                    <div className="h-10 w-4/12 bg-gray-300 rounded-lg"></div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div>
          {wishlist && (
            <>
              {wishlist.products.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {wishlist.products.map((product) => {
                    return (
                      <div
                        key={product._id}
                        className="w-full bg-gray-50 rounded-lg shadow-lg "
                      >
                        <Link to={`/business/products/${product._id}`}>
                          <img
                            className="rounded-t-lg object-cover"
                            src={product.image}
                            alt=""
                          />
                        </Link>
                        <div className="flex flex-col items-center gap-x-2 py-4">
                          <h2 className="text-2xl font-semibold mb-3">
                            {product.name}
                          </h2>
                          <p className="mb-3">{product.description}</p>
                          <div className="flex space-x-2">
                            <button
                              className="flex justify-center items-center space-x-1 bg-red-500 px-3 py-2 text-white rounded-lg"
                              onClick={() =>
                                handleRemoveFromList(wishlist._id, product._id)
                              }
                            >
                              <HiOutlineTrash className="h-6 w-6" />
                              <span>Remove</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="flex justify-center mt-5">
                  <h3>There are no items in your wislist.</h3>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default WishListPage;
