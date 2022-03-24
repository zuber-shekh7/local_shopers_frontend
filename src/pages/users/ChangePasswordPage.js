import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../actions/userActions";
import Breadcrumb from "../../components/shared/Breadcrumb";
import routes from "../../utils/routes";

const ChangePasswordPage = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const { loading, success, error } = useSelector(
    (state) => state.changePassword
  );

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("");

    if (!oldPassword || !newPassword) {
      return;
    }

    if (oldPassword === newPassword) {
      setMessage(
        "New password and old password are same. Please enter different new password."
      );
      return;
    }

    dispatch(changePassword(oldPassword, newPassword));

    setOldPassword("");
    setNewPassword("");
  };

  return (
    <main className="container max-w-lg">
      <section>
        <Breadcrumb
          links={[
            {
              name: "your account",
              to: routes.dashboard,
            },
            {
              name: "your profile",
              to: routes.profile,
            },
            {
              name: "change password",
              to: routes.changePassword,
            },
          ]}
        />
        <h1>Change password</h1>
        <hr />
        <div className="flex justify-center bg-gray-50 border rounded-lg shadow-lg">
          <form className="flex-1 p-5" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block" htmlFor="oldPassword">
                Old Password
              </label>
              <input
                id="oldPassword"
                className="w-full text-lg py-2 px-2 rounded-lg border-2 border-indigo-600  focus:ring-indigo-600"
                type="password"
                value={oldPassword}
                placeholder="Enter old password"
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-5">
              <label className="block" htmlFor="newPassword">
                New Password
              </label>
              <input
                id="newPassword"
                className="w-full text-lg py-2 px-2 rounded-lg border-2 border-indigo-600  focus:ring-indigo-600"
                type="password"
                value={newPassword}
                placeholder="Enter new password"
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>

            <div className="mb-5">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white rounded-lg py-2 text-lg hover:bg-indigo-700"
              >
                Save
              </button>
            </div>
            <div className="text-center">
              {loading && <p>Updating profile...</p>}
              {error && !loading && <p className="text-red-500">{error}</p>}
              {message && !loading && <p className="text-red-500">{message}</p>}
              {success && !loading && (
                <p className="text-green-500">
                  Your password changed successfully.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ChangePasswordPage;
