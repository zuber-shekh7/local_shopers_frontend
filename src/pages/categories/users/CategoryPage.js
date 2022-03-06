import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCategory } from "../../../actions/categoryActions";

const UserCategoryPage = ({ match, history }) => {
  const { category_id } = match.params;

  const dispatch = useDispatch();

  const { loading, category, error } = useSelector(
    (state) => state.getCategoryDetails
  );

  useEffect(() => {
    dispatch(getCategory(category_id));
  }, [category_id, dispatch]);

  return (
    <main>
      <section className="m-10 px-10 max-w-6xl mx-auto">
        {loading && !category && (
          <section className="flex justify-center ">
            <div className="animate-pulse flex-1 space-y-5">
              <div>
                <div className="h-10 w-3/12 mb-3 bg-gray-300 rounded-lg"></div>
                <hr className="mb-3" />
                <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[...Array(6).fill(1)].map((value, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
                      >
                        <div className="h-48 bg-gray-300"></div>

                        <div className="flex justify-center items-center flex-col mt-5 pb-5  space-y-3">
                          <div className="h-10 w-8/12 bg-gray-300 rounded-lg"></div>
                          <div className="h-6 w-8/12 bg-gray-300 rounded-lg"></div>
                          <div className="h-8 w-4/12 bg-gray-300 rounded-lg"></div>
                        </div>
                      </div>
                    );
                  })}
                </section>
              </div>
            </div>
          </section>
        )}
        {category && (
          <section className="flex justify-center ">
            <div>
              <h1 className="text-4xl font-bold mb-3">{category.name}</h1>
              <hr />
              <div className="flex">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  className="flex-1"
                >
                  <div className="grid grid-cols-12 gap-x-2 mb-3">
                    <input
                      className="col-span-8 md:col-span-10 w-full py-2 rounded-lg"
                      type="search"
                      placeholder="Search product"
                    />
                    <button
                      className=" col-span-4 md:col-span-2 py-2 px-3 bg-indigo-500 rounded-lg text-white text-lg hover:bg-indigo-600"
                      type="submit"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
              <hr />
              <div>
                {category.products && (
                  <>
                    {category.products.length > 0 ? (
                      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {category.products.map((product) => {
                          return (
                            <div
                              key={product._id}
                              className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
                            >
                              <div>
                                <Link to={`/business/products/${product._id}`}>
                                  <img
                                    className="object-cover"
                                    src={product.image}
                                    alt={product.name}
                                  />
                                </Link>
                              </div>
                              <div className="flex justify-center items-center flex-col mt-5 pb-5  space-y-3">
                                <h3 className="text-4xl font-semibold">
                                  {product.name}
                                </h3>
                                <p className="text-lg">{product.description}</p>
                                <div className="mt-">
                                  <Link
                                    className="text-center w-4/12 px-3 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
                                    to={`/business/products/${product._id}`}
                                  >
                                    Shop Now
                                  </Link>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </section>
                    ) : (
                      <section className="text-center">
                        <h2 className="text-muted my-4">
                          No products available
                        </h2>
                      </section>
                    )}
                  </>
                )}
              </div>
            </div>
          </section>
        )}
      </section>
    </main>
  );
};

export default UserCategoryPage;
