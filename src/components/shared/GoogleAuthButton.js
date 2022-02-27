import React from "react";
import { Button } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";

const GoogleAuthButton = (props) => {
  return (
    <Button
      onClick={props.onClick}
      disabled={props.disabled}
      className="flex justify-center  items-center space-x-2 px-3 py-2 bg-indigo-500 w-full rounded-lg text-white mb-3"
    >
      <FaGoogle className="h-5 w-5" />
      <span>Continue with Google</span>
    </Button>
  );
};

export default GoogleAuthButton;
