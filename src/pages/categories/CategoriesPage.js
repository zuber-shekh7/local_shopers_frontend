import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategories } from "../../actions/categoryActions";
import { Error } from "../../components/messages";
import CategoryList from "../../components/pages/business/CategoryList";
import { CategoryListLoader } from "../../components/pages/categories";
import Breadcrumb from "../../components/shared/Breadcrumb";

const CategoriesPage = () => {
  const { businessId } = useParams();

  const dispatch = useDispatch();

  const { loading, categories, error } = useSelector(
    (state) => state.getCategories
  );

  useEffect(() => {
    dispatch(getCategories(businessId));
  }, [businessId, dispatch]);

  return (
    <main>
      <section className="bg-indigo-600 text-white p-5">
        <div className="container">
          <h1>Explore Categories</h1>
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
              to: "",
            },
          ]}
        />
        {error && <Error />}
        {loading && <CategoryListLoader />}
        <CategoryList business={{ _id: businessId }} categories={categories} />
      </section>
    </main>
  );
};

export default CategoriesPage;
