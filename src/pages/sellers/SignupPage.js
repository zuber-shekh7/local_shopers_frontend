import React, { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../../components/shared/Message";
import Loader from "../../components/shared/Loader";
import {
  sellerSignup,
  sellerLoginWithGoogle,
} from "../../actions/sellerActions";
import GoogleLogin from "react-google-login";
import GoogleAuthButton from "../../components/shared/GoogleAuthButton";

const SellerSignupPage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const { sellerInfo } = useSelector((state) => state.sellerLogin);
  const { error, loading } = useSelector((state) => state.sellerSignup);

  const dispatch = useDispatch();

  useEffect(() => {
    if (sellerInfo) {
      history.push("/sellers/dashboard");
    }
  }, [sellerInfo, history]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("");
    if (
      !email &&
      !password &&
      !confirmPassword &&
      !mobile &&
      !firstName &&
      !lastName
    ) {
      setMessage("Please correctly enter all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords must match.");
      return;
    }

    dispatch(sellerSignup(email, password, firstName, lastName, mobile));

    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setMessage("");
    setMobile("");
    setFirstName("");
    setLastName("");
  };

  const responseGoogle = async (response) => {
    const token = response.tokenId;
    dispatch(sellerLoginWithGoogle(token));
  };

  return (
    <main className="mt-4">
      <h1 className="text-center">Seller Sign Up</h1>
      <FormContainer>
        {loading && <Loader />}
        {error && <Message variant="danger">{error}</Message>}
        {message && <Message variant="info">{message}</Message>}

        <Form onSubmit={handleSubmit}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="apple@example.com"
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

          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
            buttonText="Contine with Google"
            render={GoogleAuthButton}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />

          <Row>
            <Col className="text-center">
              <span className="text-lead">Already have seller account? </span>
              <Link to="/sellers/login">Log In</Link>
            </Col>
          </Row>
        </Form>
      </FormContainer>
    </main>
  );
};

export default SellerSignupPage;
