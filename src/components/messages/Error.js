import React from "react";

const Error = ({ children, ...rest }) => {
  return (
    <p className="text-sm text-red-500" {...rest}>
      {children}
    </p>
  );
};

Error.defaultProps = {
  children: "Something went wrong. Try again Later.",
};

export default Error;
