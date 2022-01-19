import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const GoBackButton = (props) => {
  const onClickHandler = () => {
    props.onGoBackClick();
  };
  return (
    <Container>
      <Row>
        <Col>
          <Button onClick={onClickHandler}>Go Back</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default GoBackButton;
