import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { getUser, updateUser } from "../../actions/userActions";
import routes from "../../utils/routes";
import Breadcrumb from "../../components/shared/Breadcrumb";
import { Input, Label } from "../../components/forms/inputs";
import { FormGroup } from "../../components/forms/containers";
import { Button } from "../../components/buttons";
import { Loader } from "../../components/loaders";
import { Error } from "../../components/messages";

const EditUserProfilePage = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.getUser);

  const {
    loading,
    user: updatedUser,
    error,
  } = useSelector((state) => state.updateUser);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      user.email === email &&
      user.profile.firstName === firstName &&
      user.profile.lastName === lastName &&
      user.mobile === mobile
    ) {
      navigate(-1);
    }

    dispatch(updateUser(email, mobile, firstName, lastName, user._id));
  };

  useEffect(() => {
    if (!user) {
      dispatch(getUser());
    } else {
      setFirstName(user.profile.firstName);
      setLastName(user.profile.lastName);
      setEmail(user.email);
      setMobile(user.mobile);
    }
  }, [user, dispatch]);

  if (updatedUser) {
    return <Navigate to={routes.profile} />;
  }

  return (
    <main>
      <section className="bg-indigo-600 text-white p-5">
        <div className="container">
          <h1>Edit your profile</h1>
        </div>
      </section>
      <section className="container max-w-xl">
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
              name: "edit profile",
              to: routes.editProfile,
            },
          ]}
        />

        <hr />
        <div className="card border rounded-lg shadow-lg">
          <form className="flex-1 p-5" onSubmit={handleSubmit}>
            <FormGroup className="mb-5">
              <Label className="block" htmlFor="firstName">
                First Name
              </Label>
              <Input
                id="firstName"
                className="w-full"
                type="text"
                value={firstName}
                placeholder="Steve"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup className="mb-5">
              <Label className="block" htmlFor="lastName">
                Last Name
              </Label>
              <Input
                id="lastName"
                className="w-full"
                type="text"
                value={lastName}
                placeholder="Jobs"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup className="mb-5">
              <Label className="block" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                className="w-full"
                type="email"
                value={email}
                placeholder="stevejobs@example.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup className="mb-5">
              <Label className="block" htmlFor="mobile">
                Mobile
              </Label>
              <Input
                id="mobile"
                className="w-full"
                type="text"
                value={mobile}
                placeholder="9876543210"
                onChange={(e) => setMobile(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="mb-5">
              <Button className="w-full ">Save</Button>
            </FormGroup>
            <FormGroup className="flex justify-center mb-0">
              {loading && <Loader />}
              {error && <Error />}
            </FormGroup>
          </form>
        </div>
      </section>
    </main>
  );
};

export default EditUserProfilePage;
