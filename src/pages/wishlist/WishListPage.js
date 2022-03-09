import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { HiOutlineTrash } from "react-icons/hi";
import Breadcrumb from "../../components/shared/Breadcrumb";
import {
  addToWishList,
  getWishList,
  removeFromWishList,
} from "../../actions/wishListActions";
import routes from "../../utils/routes";

const WishListPage = () => {
  const [loading] = [true, null];
  const { wishList, error } = useSelector((state) => state.wishList);

  const { user } = useSelector((state) => state.userLogin);

  const { product_id } = useParams();

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
    <main className="container">
      <section>
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
        <h1 className="text-4xl font-semibold mb-4">Your Wish List</h1>
        <hr />
        {loading && !wishList && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[...Array(6).fill(1, 6)].map((value, index) => {
              return (
                <div
                  key={index}
                  s
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
          {wishList && (
            <>
              {wishList.products.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {wishList.products.map((product) => {
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
                                handleRemoveFromList(wishList._id, product._id)
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
                <div className="flex justify-center">
                  <h3 className="text-2xl text-center">
                    No product available in wish list
                  </h3>
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
