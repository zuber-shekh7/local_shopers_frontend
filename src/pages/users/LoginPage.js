import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { userLogin, userLoginWithGoogle } from "../../actions/userActions";
import GoogleAuthButton from "../../components/shared/GoogleAuthButton";
import routes from "../../utils/routes";
import { Logo } from "../../components/logos";
import { Input, Label } from "../../components/forms/inputs";
import { Button } from "../../components/buttons";
import { FormGroup } from "../../components/forms/containers";
import { Loader } from "../../components/loaders";
import { Error } from "../../components/messages";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, user, error } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (user) {
      navigate("/users/account");
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email && !password) {
      return;
    }

    dispatch(userLogin(email, password));
  };

  const responseGoogle = async (response) => {
    const token = response.tokenId;
    dispatch(userLoginWithGoogle(token));
  };

  return (
    <main className="bg-indigo-600">
      <section className="flex flex-col justify-center items-center h-screen">
        <div className="w-11/12 sm:w-96 bg-white rounded-xl shadow-lg px-10 py-5">
          <Logo />
          <h1 className="my-4">Login</h1>
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
              <Button className="w-full" type="submit">
                Login
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
            <FormGroup className="flex justify-center mb-0">
              {error && <Error>{error}</Error>}
              {loading && <Loader />}
            </FormGroup>
          </form>
        </div>
        <div className="mt-5">
          <p className="text-center text-white">
            Don't have an account?{" "}
            <Link className="underline" to={routes.signup}>
              Signup
            </Link>
          </p>
          <p className="text-center text-white">
            <Link className="underline" to={routes.forgotPassword}>
              Forgot Password?
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
