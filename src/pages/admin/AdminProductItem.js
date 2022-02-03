import React from "react";
import { Badge, Button, Col, Image, Row, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const AdminProductItems = ({ product }) => {
  const deleteProduct = () => {};

  return (
    <tr>
      <td>
        <Image
          rounded
          fluid
          src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5"
          width="100"
        />
      </td>
      <td md={4}>
        <Row>
          <h4>{product.name}</h4>
        </Row>
        <Row>
          <td>{product.description}</td>
        </Row>
        <Row>
          <Col md={3}>
            <span>&#8377;</span>
            <b> {product.price}</b>
          </Col>
          <Col md={9}>
            Qty: <Badge pill>{product.quantity}</Badge>
          </Col>
        </Row>
      </td>
      <td>
        <Button variant="danger" onClick={() => deleteProduct(product._id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default AdminProductItems;
