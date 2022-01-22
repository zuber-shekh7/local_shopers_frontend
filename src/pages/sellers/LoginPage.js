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
import { Link } from "react-router-dom";
import Message from "../../components/shared/Message";
import Loader from "../../components/shared/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  getSeller,
  sellerLogin,
  sellerLoginWithGoogle,
} from "../../actions/sellerActions";
import GoogleLogin from "react-google-login";
import GoogleAuthButton from "../../components/shared/GoogleAuthButton";

const SellerLoginPage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, sellerInfo, error } = useSelector(
    (state) => state.sellerLogin
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (sellerInfo) {
      history.push("/sellers/dashboard");
    }
  }, [sellerInfo, history]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email && !password) {
      return;
    }

    dispatch(sellerLogin(email, password));

    dispatch(getSeller());
    setEmail("");
    setPassword("");
  };

  const responseGoogle = async (response) => {
    const token = response.tokenId;
    dispatch(sellerLoginWithGoogle(token));
  };

  return (
    <main className="mt-4">
      <h1 className="text-center">Seller Log In</h1>
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
              placeholder="apple@example.com"
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
              <span className="text-lead">Don't have seller account? </span>
              <Link to="/sellers/signup">Sign Up</Link>
            </Col>
          </Row>
        </Form>
      </FormContainer>
    </main>
  );
};

export default SellerLoginPage;
