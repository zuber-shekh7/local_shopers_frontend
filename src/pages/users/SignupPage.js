import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useSelector, useDispatch } from "react-redux";
import { userSignup, userLoginWithGoogle } from "../../actions/userActions";
import GoogleAuthButton from "../../components/shared/GoogleAuthButton";
import routes from "../../utils/routes";

const SignupPage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userLogin);
  const { error, loading } = useSelector((state) => state.userSignup);

  useEffect(() => {
    setMessage("");
  }, []);

  useEffect(() => {
    if (user) {
      history.push("/users/account");
    }
  }, [user, history]);

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

    dispatch(userSignup({ email, password, firstName, lastName, mobile }));
  };

  const responseGoogle = async (response) => {
    const token = response.tokenId;
    dispatch(userLoginWithGoogle(token));
  };

  return (
    <main className="mt-10">
      <h1 className="text-center text-4xl font-bold mb-3">Sign Up</h1>
      <section className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>First Name</label>
            <input
              className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="steve"
              required
            />
          </div>
          <div className="mb-3">
            <label>Last Name</label>
            <input
              className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="jobs"
              required
            />
          </div>
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
            <label>Mobile</label>
            <input
              className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="9876543210"
              required
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="sshhh!!! Don't tell anyone"
              required
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="confirm password"
              required
            />
          </div>
          <button
            className="w-full mb-3 px-3 py-2 bg-indigo-500 rounded-lg text-white"
            type="submit"
          >
            Sign Up
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
            <span className="text-base">Already have an account? </span>
            <Link className="text-indigo-500" to={routes.login}>
              Log In
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};

export default SignupPage;
