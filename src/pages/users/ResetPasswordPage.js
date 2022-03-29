import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../../actions/userActions";
import routes from "../../utils/routes";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const { user } = useSelector((state) => state.userLogin);

  const { loading, success, error } = useSelector(
    (state) => state.resetPassword
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useParams();

  useEffect(() => {
    if (user) {
      navigate(routes.dashboard);
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("");

    if (!password || !confirmPassword) {
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Both password must match");
      return;
    }

    dispatch(resetPassword(password, token));

    setPassword("");
    setConfirmPassword("");
  };

  return (
    <main className="container max-w-lg">
      <section>
        <h1>Reset your password</h1>
        <hr />
        <div className="flex justify-center bg-gray-50 border rounded-lg shadow-lg">
          <div className="flex-1 p-5">
            <h6 className="mb-5">Enter a new password for your account.</h6>
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label className="block" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  className="w-full text-lg py-2 px-2 rounded-lg border-2 border-indigo-600  focus:ring-indigo-600"
                  type="password"
                  value={password}
                  placeholder="Enter new password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block" htmlFor="confirmPassword">
                  Confirm password
                </label>
                <input
                  id="confirmPassword"
                  className="w-full text-lg py-2 px-2 rounded-lg border-2 border-indigo-600  focus:ring-indigo-600"
                  type="password"
                  value={confirmPassword}
                  placeholder="Enter new password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-5">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white rounded-lg py-2 text-lg hover:bg-indigo-700"
                >
                  Reset password
                </button>
              </div>
              <div className="text-center">
                {!loading && error && <p className="text-red-500">{error}</p>}
                {!loading && message && (
                  <p className="text-red-500">{message}</p>
                )}
                {!loading && success && (
                  <p className="text-green-500">
                    Password reset successfully. Try{" "}
                    <Link
                      className="underline underline-offset-1"
                      to={routes.login}
                    >
                      Login
                    </Link>{" "}
                    now.
                  </p>
                )}
                {loading && <p>Loading...</p>}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResetPasswordPage;
