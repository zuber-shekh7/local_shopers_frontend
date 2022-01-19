import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const GoBackButton = () => {
  const onClickHandler = () => {
    props.onGoBackClick();
  };
  return (
    <div>
      <Row>
        <Col>
          <Button onClick={onClickHandler}>Go Back</Button>
        </Col>
      </Row>
    </div>
  );
};

export default GoBackButton;
