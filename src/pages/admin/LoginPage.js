import React, { useState, useEffect } from "react";
import FormContainer from "../../components/shared/FormContainer";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/shared/Message";
import Loader from "../../components/shared/Loader";
import { adminLogin } from "../../actions/adminActions";

const AdminLoginPage = ({ history }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error, adminInfo } = useSelector(
    (state) => state.adminLogin
  );

  useEffect(() => {
    if (adminInfo) {
      history.push("/admin/account");
    }
  }, [adminInfo, history]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email && !password) {
      return;
    }

    dispatch(adminLogin(email, password));

    setEmail("");
    setPassword("");
  };

  return (
    <main className="mt-4">
      <h1 className="text-center">Admin Log In</h1>
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
              placeholder="admin@example.com"
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
        </Form>
      </FormContainer>
    </main>
  );
};

export default AdminLoginPage;
