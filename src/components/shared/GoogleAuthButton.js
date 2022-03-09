import React from "react";
import { FaGoogle } from "react-icons/fa";

const GoogleAuthButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className="flex justify-center items-center space-x-2 px-3 py-2 bg-indigo-600 w-full rounded-lg text-white hover:bg-indigo-700"
    >
      <FaGoogle className="h-5 w-5" />
      <span>Continue with Google</span>
    </button>
  );
};

export default GoogleAuthButton;
