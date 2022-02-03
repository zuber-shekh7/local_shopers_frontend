import React from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const AdminCategoryItem = ({ category }) => {
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
            <Card.Title as="h3">{category.name}</Card.Title>
          </Col>
          <Col className="my-auto" md={2}>
            <LinkContainer to={`/admin/categories/${category._id}`}>
              <Button>Explore</Button>
            </LinkContainer>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default AdminCategoryItem;
