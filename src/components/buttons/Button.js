import React from "react";

const Button = ({ onClick, children, className, ...rest }) => {
  return (
    <button
      className={`bg-indigo-600 text-white px-4 py-2 rounded-lg ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
