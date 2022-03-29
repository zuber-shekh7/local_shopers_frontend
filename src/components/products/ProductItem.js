import React from "react";
import { Row, Col, Card, Image, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ProductItem = ({ product }) => {
  return (
    <Card className="my-3">
      <Card.Body>
        <Row>
          <Col md={3}>
            <Image rounded fluid src={product.image} />
          </Col>
          <Col className="my-auto">
            <Card.Title as="h3">{product.name}</Card.Title>
          </Col>
          <Col className="my-auto" md={2}>
            <LinkContainer to={`/sellers/manage/products/${product._id}`}>
              <Button>View more</Button>
            </LinkContainer>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
