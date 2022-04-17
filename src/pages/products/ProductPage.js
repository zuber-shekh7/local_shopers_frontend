import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import clipboard from "clipboardy";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getProduct } from "../../actions/productActions";
import { ProductLoader } from "../../components/pages/products";
import Product from "../../components/pages/products/Product";
import Breadcrumb from "../../components/shared/Breadcrumb";

import routes, { generateRoute } from "../../utils/routes";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const { businessId, categoryId, productId } = useParams();

  const { loading, product, error } = useSelector((state) => state.getProduct);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [productId, dispatch]);

  const addToCartHandler = () => {
    const link = generateRoute(routes.getProduct, {
      ":businessId": businessId,
      ":categoryId": categoryId,
      ":productId": productId,
    });

    navigate(
      `${routes.cart}/${productId}?quantity=${quantity}&link=${link}&businessId=${businessId}`
    );
  };

  const addToWishListHandler = (id) => {
    navigate(`/users/wishlist/${id}`);
  };

  const shareLink = async () => {
    console.log(window.location);
    let link = generateRoute(routes.getProduct, {
      ":businessId": businessId,
      ":categoryId": categoryId,
      ":productId": productId,
    });

    await clipboard.write(`${window.location.origin}${link}`);
    toast.success("Product link copied successfully.");
  };

  return (
    <main>
      <section className="bg-indigo-600 text-white p-5">
        <div className="container">
          <h1>{product ? product.name : "Product"}</h1>
        </div>
      </section>
      <section className="container">
        <Breadcrumb
          links={[
            {
              name: "home",
              to: generateRoute(routes.business, { ":businessId": businessId }),
            },
            {
              name: "categories",
              to: generateRoute(routes.getCategories, {
                ":businessId": businessId,
              }),
            },
            {
              name: "category",
              to: generateRoute(routes.getCategories, {
                ":businessId": businessId,
                ":categoryId": categoryId,
              }),
            },
            {
              name: "products",
              to: generateRoute(routes.getProducts, {
                ":businessId": businessId,
                ":categoryId": categoryId,
              }),
            },
            {
              name: product ? product.name : "product",
              to: "",
            },
          ]}
        />
        {error && <h5 className="text-center text-red-500">{error}</h5>}
        {loading && <ProductLoader />}
        {product && (
          <Product
            product={product}
            quantity={quantity}
            setQuantity={setQuantity}
            addToCartHandler={addToCartHandler}
            addToWishListHandler={addToWishListHandler}
            shareLink={shareLink}
          />
        )}
      </section>
    </main>
  );
};

export default ProductPage;
