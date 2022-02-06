import React from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Card,
  Form,
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const HomePage = () => {
  return (
    <main className="mt-4">
      <Container fluid>
        <Row>
          <Col md={8} className="mx-auto">
            <section className="text-center py-5">
              <h1 className="text-center display-4">Local Shoppers</h1>
              <h4 className="text-center">
                Online Store For Locals, By Locals
              </h4>
              <LinkContainer to="/users/login">
                <Button className="my-3" size="lg">
                  Start Shopping now
                </Button>
              </LinkContainer>
            </section>
          </Col>
        </Row>
        <Row className="bg-light">
          <Col md={8} className="mx-auto">
            <section className="text-center py-5">
              <h2 className="text-center display-5">
                Buy and Sell Across Different Categories
              </h2>
              <Row className="pt-4">
                <Col md={4}>
                  <Card>
                    <Card.Img src="https://media.istockphoto.com/photos/background-of-damaged-mobile-phones-a-bunch-of-broken-smartphones-picture-id1328097097?b=1&k=20&m=1328097097&s=170667a&w=0&h=BCI3sVAdkr_bRlrg8oOVEn-brmety3sImmuV0Uiy620=" />
                    <Card.Header>
                      <Card.Title>Electronics</Card.Title>
                    </Card.Header>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Img src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" />
                    <Card.Header>
                      <Card.Title>Fashion</Card.Title>
                    </Card.Header>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card>
                    <Card.Img src="https://images.unsplash.com/photo-1506617420156-8e4536971650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3JvY2VyeXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" />
                    <Card.Header>
                      <Card.Title>Grocery</Card.Title>
                    </Card.Header>
                  </Card>
                </Col>
              </Row>
            </section>
          </Col>
        </Row>
        <Row>
          <Col md={8} className="mx-auto">
            <section className="text-center py-5">
              <h2 className="text-center display-5">Sell Online</h2>
              <h4 className="text-center">
                Create your online store within 10 minutes.
              </h4>
              <LinkContainer to="/sellers/signup">
                <Button className="my-3" size="lg">
                  Create your business now
                </Button>
              </LinkContainer>
            </section>
          </Col>
        </Row>
        <Row className="bg-light">
          <Col md={8} className="mx-auto">
            <section className="text-center py-5">
              <h2 className="text-center display-6">
                Grow Your Online Business with Local Shoppers
              </h2>
              <h4 className="text-center">Manage Products and Categories</h4>
              <h4 className="text-center">Manage Orders and Payments</h4>
              <LinkContainer to="/sellers/login">
                <Button className="my-3" size="lg">
                  Start Selling
                </Button>
              </LinkContainer>
            </section>
          </Col>
        </Row>
        <Row>
          <Col md={8} className="mx-auto">
            <section className="text-center py-5">
              <h2 className="text-center display-6 mb-3">
                Want to connect with us?
              </h2>
              <Row>
                <Col md={6} className="mx-auto">
                  <Form
                    onSubmit={() =>
                      alert(
                        "Thanks for your interest. We will contact you soon"
                      )
                    }
                  >
                    <FormGroup className="mb-3">
                      <FormControl
                        type="email"
                        placeholder="youremail@example.com"
                        required
                      ></FormControl>
                    </FormGroup>
                    <FormGroup className="mb-3">
                      <FormControl
                        as="textarea"
                        placeholder="your message"
                        required
                      ></FormControl>
                    </FormGroup>
                    <FormGroup className="mb-3">
                      <Button type="submit">Submit</Button>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </section>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default HomePage;
