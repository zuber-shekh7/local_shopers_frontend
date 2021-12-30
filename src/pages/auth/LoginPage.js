import React, { useState } from "react";
import FormContainer from "../../components/shared/FormContainer";
import {
  Row,
  Col,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="mt-4">
      <h1 className="text-center">Log In</h1>
      <FormContainer>
        <Form>
          <FormGroup className="mb-3">
            <FormLabel>Email</FormLabel>
            <FormControl
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="stevejobs@example.com"
              required
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>Password</FormLabel>
            <FormControl
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="sshhh!!! Don't tell anyone"
              required
            />
          </FormGroup>
          <Button className="w-100 mb-3" type="submit">
            Log In
          </Button>
          <Row>
            <Col className="text-center">
              <span className="text-lead">Don't have an account? </span>
              <Link to="/auth/signup">Sign Up</Link>
            </Col>
          </Row>
        </Form>
      </FormContainer>
    </main>
  );
};

export default LoginPage;
