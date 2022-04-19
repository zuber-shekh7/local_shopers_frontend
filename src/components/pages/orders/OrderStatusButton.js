import React from "react";

const OrderStatusButton = ({ status }) => {
  let buttonTheme;
  switch (status) {
    case "Processing":
      buttonTheme =
        "text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white hover:cursor-pointer";
      break;
    case "Recieved":
      buttonTheme =
        "text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white hover:cursor-pointer";
      break;
    case "Dispatched":
      buttonTheme =
        "text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white hover:cursor-pointer";
      break;
    case "Delivered":
      buttonTheme =
        "text-green-600 border-green-600 hover:bg-green-600 hover:text-white hover:cursor-pointer";
      break;
    case "Cancelled":
      buttonTheme =
        "text-red-600 border-red-600 hover:bg-red-600 hover:text-white hover:cursor-pointer";
      break;
    case "Returned":
      buttonTheme =
        "text-yellow-600 border-yellow-600 hover:bg-yellow-600 hover:text-white hover:cursor-pointer";
      break;
    default:
      buttonTheme =
        "text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white hover:cursor-pointer";
      break;
  }
  return (
    <button
      className={`px-3 py-2 border rounded-lg shadow-lg ${buttonTheme}`}
      disabled
    >
      {status}
    </button>
  );
};

export default OrderStatusButton;
