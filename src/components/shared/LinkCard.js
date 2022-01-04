import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const LinkCard = ({ title, text, link }) => {
  return (
    <LinkContainer to={link}>
      <Card className="mb-3">
        <Card.Body>
          <Row>
            <Col md={2}></Col>
            <Col md={10}>
              <Card.Title>{title}</Card.Title>
              <Card.Text className="text-muted">{text}</Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </LinkContainer>
  );
};

export default LinkCard;
