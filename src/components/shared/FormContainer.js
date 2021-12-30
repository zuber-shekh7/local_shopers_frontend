import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row>
        <Col className="mx-auto" md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
