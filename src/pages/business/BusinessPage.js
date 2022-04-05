import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getBusiness } from "../../actions/businessActions";
import { Error } from "../../components/messages";
import { Business, BusinessLoader } from "../../components/pages/business";

const BusinessPage = () => {
  const dispatch = useDispatch();

  const { loading, business, error } = useSelector(
    (state) => state.getBusiness
  );

  const { businessId } = useParams();

  useEffect(() => {
    dispatch(getBusiness(businessId));
  }, [businessId, dispatch]);

  return (
    <main>
      <section className="bg-indigo-600 text-white p-5">
        <div className="container">
          <h1>{business ? business.name : "Business"}</h1>
          <h5>{business ? business.category.name : "Category"}</h5>
        </div>
      </section>
      <section className="container">
        {error && <Error />}
        {loading && <BusinessLoader />}
        <Business business={business} />
      </section>
    </main>
  );
};

export default BusinessPage;
