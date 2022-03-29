import React from "react";
import { Row, Col, Card, Image, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CategoryItem = ({ category }) => {
  return (
    <Card className="my-3">
      <Card.Body>
        <Row>
          <Col md={3}>
            <Image rounded fluid src={category.image} />
          </Col>
          <Col className="my-auto">
            <Card.Title as="h3">{category.name}</Card.Title>
          </Col>
          <Col className="my-auto" md={2}>
            <LinkContainer to={`/sellers/manage/categories/${category._id}`}>
              <Button>Explore</Button>
            </LinkContainer>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CategoryItem;
