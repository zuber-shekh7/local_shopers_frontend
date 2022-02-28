import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getBusiness } from "../../actions/businessActions";
import { saveBusiness } from "../../actions/cartActions";

const BusinessPage = ({ match }) => {
  const dispatch = useDispatch();

  const { loading, business, error } = useSelector(
    (state) => state.getBusiness
  );

  const { business_id } = match.params;

  useEffect(() => {
    dispatch(getBusiness(business_id));
    dispatch(saveBusiness(business_id));
  }, [business_id, dispatch]);

  return (
    <main>
      <section className="m-10 px-10 max-w-6xl mx-auto">
        {loading && !business && (
          <section className="flex justify-center ">
            <div className="animate-pulse flex-1 space-y-5">
              <div className="h-96 w-full bg-gray-300 rounded-lg"></div>
              <div className="flex flex-col justify-center items-center space-y-3">
                <div className="h-10 w-3/12 bg-gray-300 rounded-lg"></div>
                <div className="h-5 w-4/12 bg-gray-300 rounded-lg"></div>
                <div className="h-5  w-4/12 bg-gray-300 rounded-lg"></div>
              </div>

              <div>
                <div className="h-8 w-4/12 bg-gray-300 rounded-lg mb-3"></div>
                <hr className="mb-3" />
                {[...Array(3).fill(1)].map((value, index) => {
                  return (
                    <div
                      key={index}
                      className="grid grid-cols-1 bg-gray-50  rounded-lg gap-3 mb-3 overflow-hidden shadow-md"
                    >
                      <div className="h-64 md:h-48 w-full bg-gray-300"></div>
                    </div>
                  );
                })}
                ;
              </div>
            </div>
          </section>
        )}
        {business && (
          <section className="flex justify-center ">
            <div className="flex-1 space-y-5">
              <img
                className="h-96 w-full object-top object-cover rounded-lg"
                src={business.image}
                alt={business.name}
              />
              <div className="text-center">
                <h1 className="text-center text-4xl font-bold mb-3">
                  {business.name}
                </h1>
                <p className="text-lg mb-3">{business.description}</p>
                <p className="text-lg font-semibold">
                  &bull; {business.category.name} &bull;
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-semibold mb-3">Categories</h2>
                <hr className="mb-3" />
                {business.categories && (
                  <>
                    {business.categories.length > 0 ? (
                      <section>
                        {business.categories.map((category) => {
                          return (
                            <Link
                              key={category._id}
                              to={`/business/${business._id}/categories/${category._id}`}
                            >
                              <div
                                className="grid h-64 grid-cols-1 rounded-lg mb-3 overflow-hidden shadow-md hover:opacity-80"
                                style={{
                                  backgroundImage: `url(${category.image})`,
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                }}
                              >
                                <div className="flex justify-center items-center">
                                  <h3 className="text-indigo-500 px-3 py-2 bg-white  rounded-lg text-2xl sm:text-4xl md:text-6xl font-semibold">
                                    {category.name}
                                  </h3>
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </section>
                    ) : (
                      <section className="text-center">
                        <h2 className="text-muted my-3">
                          No Categories added Yet
                        </h2>
                        <Link to="categories/new">Add new category</Link>
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

export default BusinessPage;
