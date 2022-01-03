import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SellerHomePage = () => {
  return (
    <main>
      <h1 className="text-center mt-4">Start your online business now</h1>
      <section className="text-center">
        <Link to="/sellers/signup">
          <Button variant="primary">Create Business</Button>
        </Link>
      </section>
    </main>
  );
};

export default SellerHomePage;
