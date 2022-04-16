import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCategory } from "../../actions/categoryActions";
import { LinkButton } from "../../components/buttons";
import Breadcrumb from "../../components/shared/Breadcrumb";

const CategoryPage = () => {
  const { businessId, categoryId } = useParams();

  const dispatch = useDispatch();

  const { loading, category, error } = useSelector(
    (state) => state.getCategory
  );

  useEffect(() => {
    dispatch(getCategory(categoryId));
  }, [categoryId, dispatch]);

  return (
    <main>
      <section className="bg-indigo-600 text-white p-5">
        <div className="container">
          <h1>{category ? category.name : "Category"}</h1>
        </div>
      </section>
      <section className="container">
        <Breadcrumb
          links={[
            {
              name: "home",
              to: `/business/${businessId}`,
            },
            {
              name: "categories",
              to: `/business/${businessId}/categories`,
            },
            {
              name: category ? category.name : "category",
              to: "",
            },
          ]}
        />
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
              <div className="flex justify-between items-center mb-2">
                <h2>Best Sellers</h2>
                <LinkButton
                  to={`/business/${businessId}/categories/${categoryId}/products`}
                >
                  Explore
                </LinkButton>
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
                                <Link
                                  to={`/business/${businessId}/categories/${categoryId}/products/${product._id}`}
                                >
                                  <img
                                    className="object-cover"
                                    src={product.photos[0].url}
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

export default CategoryPage;
