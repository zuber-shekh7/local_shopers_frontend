import React, { useState } from "react";
import { Button } from "../../components/buttons";
import { FormGroup } from "../../components/forms/containers";
import { Label, Input } from "../../components/forms/inputs";
import { Loader } from "../../components/loaders";
import { Error } from "../../components/messages";

const DeactivateAccount = () => {
  const [confirmMessage, setConfirmMessage] = useState("");
  const confirmationMessage = "Deactivate my account";

  const { loading, error } = {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Got the call");
  };

  return (
    <div>
      <h1 className="text-red-500">Deactivate Your Account</h1>
      <div className="flex justify-center card border rounded-lg shadow-lg">
        <form className="flex-1 p-5" onSubmit={handleSubmit}>
          <FormGroup>
            <Label className="block mb-2">
              Type "<span className="font-semibold">{confirmationMessage}</span>
              " to enable deactivation
            </Label>
            <Input
              id="message"
              className="w-full"
              type="text"
              value={confirmMessage}
              placeholder="Deactivate my account"
              onChange={(e) => setConfirmMessage(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup>
            <Button
              disabled={confirmMessage !== confirmationMessage}
              type="submit"
              className="w-full"
            >
              Deactivate
            </Button>
          </FormGroup>
          <FormGroup className="flex justify-center mb-0">
            {loading && <Loader />}
            {error && <Error>{error}</Error>}
          </FormGroup>
        </form>
      </div>
    </div>
  );
};

export default DeactivateAccount;
