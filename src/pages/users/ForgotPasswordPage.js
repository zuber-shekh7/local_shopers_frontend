import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { sentPasswordResetEmail } from "../../actions/userActions";
import routes from "../../utils/routes";

const ResetPasswordPage = () => {
  const [email, setEmail] = useState("");

  const { loading, success, error } = useSelector(
    (state) => state.sentPasswordResetEmail
  );

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      return;
    }

    dispatch(sentPasswordResetEmail(email));

    setEmail("");
  };
  return (
    <main className="container max-w-lg">
      <section>
        <h1>Forgot your password</h1>
        <hr />
        <div className="flex justify-center bg-gray-50 border rounded-lg shadow-lg">
          <div className="flex-1 p-5">
            <h6 className="mb-5">
              Please enter the registered email address to sent password reset
              information.
            </h6>
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label className="block" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  className="w-full text-lg py-2 px-2 rounded-lg border-2 border-indigo-600  focus:ring-indigo-600"
                  type="email"
                  value={email}
                  placeholder="Enter your registered email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-5">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white rounded-lg py-2 text-lg hover:bg-indigo-700"
                >
                  Request reset link
                </button>
              </div>
              <div className="text-center">
                {!loading && error && <p className="text-red-500">{error}</p>}
                {!loading && success && (
                  <p className="text-green-500">
                    Email sent successfully. Please check your inbox.
                  </p>
                )}
                {loading && <p>Loading...</p>}
                <p className="text-center text-indigo-600 text-xl">
                  <Link
                    className="underline underline-offset-1"
                    to={routes.login}
                  >
                    Back to login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResetPasswordPage;
