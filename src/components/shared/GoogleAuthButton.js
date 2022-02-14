import React from "react";
import { Button } from "react-bootstrap";

const GoogleAuthButton = (props) => {
  return (
    <Button
      onClick={props.onClick}
      disabled={props.disabled}
      className="flex justify-center space-x-1 items-center px-3 py-2 bg-indigo-500 w-full rounded-lg text-white mb-3"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
        />
      </svg>{" "}
      <span>Continue with Google</span>
    </Button>
  );
};

export default GoogleAuthButton;
