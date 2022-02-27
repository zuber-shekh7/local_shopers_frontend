import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { userLogin, userLoginWithGoogle } from "../../actions/userActions";
import GoogleAuthButton from "../../components/shared/GoogleAuthButton";
import Message from "../../components/shared/Message";
import routes from "../../utils/routes";

const LoginPage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { loading, user, error } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (user) {
      history.push("/users/account");
    }
  }, [user, history]);

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
    <main>
      <section className="flex max-w-lg mx-auto justify-center">
        <div className="flex-1 bg-gray-50 p-10 m-10 rounded-lg shadow-lg">
          <h1 className="text-indigo-500 text-5xl font-bold text-center mb-3">
            Log In
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Email</label>
              <input
                className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="stevejobs@example.com"
                required
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="sshhh!!! Don't tell anyone"
                required
              />
            </div>
            <button
              className="w-full mb-3 px-3 py-2 bg-indigo-500 rounded-lg text-white"
              type="submit"
            >
              Log In
            </button>

            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
              buttonText="Contine with Google"
              render={GoogleAuthButton}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />

            <div className="text-center">
              <span className="text-base">Don't have an account? </span>
              <Link className="text-indigo-500" to={routes.signup}>
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
