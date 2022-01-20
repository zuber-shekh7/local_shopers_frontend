import React from "react";
import { Row, Col, Card, Image, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ProductItem = ({ product }) => {
  return (
    <Card className="my-3">
      <Card.Body>
        <Row>
          <Col md={3}>
            <Image
              rounded
              fluid
              src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            />
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
