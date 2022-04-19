import React from "react";
import { Link, useParams } from "react-router-dom";
import routes, { generateRoute } from "../../../utils/routes";

const ProductList = (props) => {
  const { businessId, categoryId } = useParams();

  const { products } = props;

  return (
    <div>
      {products && (
        <div>
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {products.map((product) => {
                return (
                  <div
                    key={product._id}
                    className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
                  >
                    <div>
                      <Link
                        to={generateRoute(routes.getProduct, {
                          ":businessId": businessId,
                          ":categoryId": categoryId,
                          ":productId": product._id,
                        })}
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
                          to={generateRoute(routes.getProduct, {
                            ":businessId": businessId,
                            ":categoryId": categoryId,
                            ":productId": product._id,
                          })}
                        >
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <section className="flex justify-center">
              <h3>Products not available</h3>
            </section>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductList;
