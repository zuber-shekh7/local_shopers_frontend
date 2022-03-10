import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";
import { getCategory } from "../../../actions/categoryActions";

const UserCategoryPage = ({ match, history }) => {
  const { categoryId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, category, error } = useSelector(
    (state) => state.getCategoryDetails
  );
  console.log(error);
  useEffect(() => {
    dispatch(getCategory(categoryId));
  }, [categoryId, dispatch]);

  return (
    <main className="container">
      <section>
        <div className="flex mb-3">
          <div>
            <button
              onClick={() => navigate(-1)}
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
              onClick={() => {}}
              className="text-base sm:text-lg flex justify-center items-center space-x-1 text-indigo-600 hover:text-indigo-700"
              to={"/"}
            >
              <span className="font-bold">
                {category ? category.name : "Category"}
              </span>
            </button>
          </div>
        </div>
        {error && <h5 className="text-center text-red-500">{error}</h5>}
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
          <section className="flex justify-center">
            <div>
              <h1>{category.name}</h1>
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
                      className=" col-span-4 md:col-span-2 py-2 px-3 bg-indigo-600 rounded-lg text-white text-lg hover:bg-indigo-700"
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
                              <div className="flex justify-center items-center flex-col p-5">
                                <h2>{product.name}</h2>
                                <p className="mb-5">{product.description}</p>
                                <div>
                                  <Link
                                    className="text-center px-3 py-3 text-lg bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
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
