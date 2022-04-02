import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ to, children, className, ...rest }) => {
  return (
    <Link
      to={to}
      className={`bg-indigo-600 text-white px-4 py-2 rounded ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
};

LinkButton.defaultProps = {
  to: "",
};

export default LinkButton;
