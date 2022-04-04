import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../actions/userActions";
import { Button } from "../../components/buttons";
import { FormGroup } from "../../components/forms/containers";
import { Label, Input } from "../../components/forms/inputs";
import { Loader } from "../../components/loaders";
import { Error } from "../../components/messages";

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
    <div>
      <h1>Change password</h1>
      <div className="flex justify-center card border rounded-lg shadow-lg">
        <form className="flex-1 p-5" onSubmit={handleSubmit}>
          <FormGroup>
            <Label className="block" htmlFor="oldPassword">
              Old Password
            </Label>
            <Input
              id="oldPassword"
              className="w-full"
              type="password"
              value={oldPassword}
              placeholder="Enter old password"
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label className="block" htmlFor="newPassword">
              New Password
            </Label>
            <Input
              id="newPassword"
              className="w-full"
              type="password"
              value={newPassword}
              placeholder="Enter new password"
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup>
            <Button type="submit" className="w-full">
              Save
            </Button>
          </FormGroup>
          <FormGroup className="flex justify-center mb-0">
            {loading && <Loader />}
            {error && <Error>{error}</Error>}
            {message && <Error>{message}</Error>}
            {success && (
              <Error className="text-green-500">
                Your password changed successfully.
              </Error>
            )}
          </FormGroup>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
