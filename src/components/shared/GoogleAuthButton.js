import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Button } from "../buttons";

const GoogleAuthButton = (props) => {
  return (
    <Button
      onClick={props.onClick}
      disabled={props.disabled}
      className="flex justify-center items-center space-x-2 w-full"
    >
      <FaGoogle className="h-5 w-5" />
      <span>Continue with Google</span>
    </Button>
  );
};

export default GoogleAuthButton;
