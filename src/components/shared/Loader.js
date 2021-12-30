import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="d-block mx-auto text-center my-4">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
