import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { GoogleLogin } from "react-google-login";
import { userLogin, userLoginWithGoogle } from "../../actions/userActions";
import Message from "../../components/shared/Message";
import Loader from "../../components/shared/Loader";
import GoogleAuthButton from "../../components/shared/GoogleAuthButton";

const LoginPage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { loading, userInfo, error } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (userInfo) {
      history.push("/users/account");
    }
  }, [userInfo, history]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email && !password) {
      return;
    }

    dispatch(userLogin(email, password));

    setEmail("");
    setPassword("");
  };

  const responseGoogle = async (response) => {
    const token = response.tokenId;
    dispatch(userLoginWithGoogle(token));
  };

  return (
    <main className="mt-4">
      <h1 className="text-center">Log In</h1>
      <FormContainer>
        {loading && <Loader />}
        {error && <Message variant="danger">{error}</Message>}
        <Form onSubmit={handleSubmit}>
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
              <span className="text-lead">Don't have an account? </span>
              <Link to="/users/signup">Sign Up</Link>
            </Col>
          </Row>
        </Form>
      </FormContainer>
    </main>
  );
};

export default LoginPage;
