import React from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const AdminSellerItem = ({ seller }) => {
  return (
    <Row className="m-5 border-bottom">
      <Col>
        <Image
          rounded
          fluid
          src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5"
          width="200"
        />
      </Col>
      <Col>
        <h4>
          {seller.firstName}
          {seller.lastName}
        </h4>
      </Col>

      <Col>{seller.email}</Col>
      <Col>{seller.mobile}</Col>
      <Col>{seller.createdAt}</Col>
    </Row>
  );
};

export default AdminSellerItem;
