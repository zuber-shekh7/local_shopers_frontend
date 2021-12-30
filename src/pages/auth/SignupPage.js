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

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <main className="mt-4">
      <h1 className="text-center">Sign Up</h1>
      <FormContainer>
        <Form>
          <FormGroup className="mb-3">
            <Row>
              <Col sm={12} md={6}>
                <FormLabel>First Name</FormLabel>
                <FormControl
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="steve"
                  required
                />
              </Col>
              <Col sm={12} md={6}>
                <FormLabel>Last Name</FormLabel>
                <FormControl
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="jobs"
                  required
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>Email</FormLabel>
            <FormControl
              type="email"
              placeholder="stevejobs@example.com"
              required
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>Mobile</FormLabel>
            <FormControl
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="9876543210"
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
          <FormGroup className="mb-3">
            <FormLabel>Password</FormLabel>
            <FormControl
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="confirm password"
              required
            />
          </FormGroup>
          <Button className="w-100 mb-3" type="submit">
            Sign Up
          </Button>
          <Row>
            <Col className="text-center">
              <span className="text-lead">Already have an account? </span>
              <Link to="/auth/login">Log In</Link>
            </Col>
          </Row>
        </Form>
      </FormContainer>
    </main>
  );
};

export default SignupPage;
