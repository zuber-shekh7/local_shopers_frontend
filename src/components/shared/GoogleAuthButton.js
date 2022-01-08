import React from "react";
import { Button } from "react-bootstrap";

const GoogleAuthButton = (props) => {
  return (
    <Button
      onClick={props.onClick}
      disabled={props.disabled}
      className="w-100 mb-3"
    >
      Continue with Google
    </Button>
  );
};

export default GoogleAuthButton;
