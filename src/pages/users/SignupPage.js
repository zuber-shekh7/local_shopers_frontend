import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useSelector, useDispatch } from "react-redux";
import { userSignup, userLoginWithGoogle } from "../../actions/userActions";
import GoogleAuthButton from "../../components/shared/GoogleAuthButton";
import routes from "../../utils/routes";
import { Logo } from "../../components/logos";
import { FormGroup } from "../../components/forms/containers";
import { Input, Label } from "../../components/forms/inputs";
import { Button } from "../../components/buttons";
import { Error } from "../../components/messages";
import { Loader } from "../../components/loaders";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.userLogin);
  const { error, loading } = useSelector((state) => state.userSignup);

  useEffect(() => {
    setMessage("");
  }, []);

  useEffect(() => {
    if (user) {
      navigate("/users/account");
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    if (!email && !password && !confirmPassword) {
      setMessage("Please correctly enter all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords must match.");
      return;
    }

    dispatch(userSignup({ email, password }));
  };

  const responseGoogle = async (response) => {
    const token = response.tokenId;
    dispatch(userLoginWithGoogle(token));
  };

  return (
    <main className="bg-indigo-600">
      <section className="flex flex-col justify-center  items-center h-screen">
        <div className="w-11/12 sm:w-96 bg-white rounded-xl shadow-lg px-10 py-5">
          <Logo />
          <h1 className="my-4">Signup</h1>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="email">Email*</Label>
              <Input
                className="w-full"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password*</Label>
              <Input
                className="w-full"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="confirmPassword">Confirm Password*</Label>
              <Input
                className="w-full"
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
              />
            </FormGroup>
            <FormGroup>
              <Button className="w-full" type="submit">
                Signup
              </Button>
            </FormGroup>
            <FormGroup>
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
                buttonText="Contine with Google"
                render={GoogleAuthButton}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </FormGroup>
            <FormGroup className="flex justify-center">
              {error && <Error>{error}</Error>}
              {message && <Error>{message}</Error>}
              {loading && <Loader />}
            </FormGroup>
          </form>
        </div>
        <div className="mt-5">
          <p className="text-center text-white">
            Already have an account?{" "}
            <Link className="underline" to={routes.login}>
              Login
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default SignupPage;
