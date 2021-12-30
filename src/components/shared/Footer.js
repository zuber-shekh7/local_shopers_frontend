import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <Container>
        <Row>
          <Col className="mx-auto" md={6}>
            <section>
              <h4 className="text-center">Copyright &copy; 2022</h4>
            </section>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
