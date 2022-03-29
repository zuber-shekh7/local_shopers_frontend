import React from "react";

const Message = ({ variant, children }) => {
  let bgColor;

  switch (variant) {
    case "danger":
      bgColor = "bg-red-400";
      break;
    case "info":
      bgColor = "bg-indigo-400";
      break;
    case "warning":
      bgColor = "bg-yellow-400";
      break;
    default:
      bgColor = "bg-indigo-400";
      break;
  }

  return (
    <div
      className={`mx-auto max-w-md px-4 py-3 ${bgColor} text-white rounded-lg font-medium shadow`}
    >
      {children}
    </div>
  );
};

Message.defaultTypes = {
  variant: "info",
};

export default Message;
