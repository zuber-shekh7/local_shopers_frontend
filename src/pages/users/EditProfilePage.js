import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { getUser, updateUser } from "../../actions/userActions";
import routes from "../../utils/routes";
import Breadcrumb from "../../components/shared/Breadcrumb";

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
      user.firstName === firstName &&
      user.lastName === lastName &&
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
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
      setMobile(user.mobile);
    }
  }, [user, dispatch]);

  if (updatedUser) {
    return <Navigate to={routes.profile} />;
  }

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
              name: "edit profile",
              to: routes.editProfile,
            },
          ]}
        />
        <h1>Edit your profile</h1>
        <hr />
        <div className="flex justify-center bg-gray-50 border rounded-lg shadow-lg">
          <form className="flex-1 p-5" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block" htmlFor="firstName">
                First Name
              </label>
              <input
                id="firstName"
                className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
                type="text"
                value={firstName}
                placeholder="Steve"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="mb-5">
              <label className="block" htmlFor="lastName">
                Last Name
              </label>
              <input
                id="lastName"
                className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
                type="text"
                value={lastName}
                placeholder="Jobs"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="mb-5">
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
                type="email"
                value={email}
                placeholder="stevejobs@example.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-5">
              <label className="block" htmlFor="mobile">
                Mobile
              </label>
              <input
                id="mobile"
                className="text-lg w-full py-2 px-2 border-2 rounded-lg border-gray"
                type="text"
                value={mobile}
                placeholder="9876543210"
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>
            <div className="mb-5">
              <button className="w-full bg-indigo-600 text-white rounded-lg py-2 text-lg hover:bg-indigo-700">
                Save
              </button>
            </div>
            <div className="text-center">
              {loading && <p>Updating profile...</p>}
              {error && !loading && <p className="text-red-500">{error}</p>}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default EditUserProfilePage;
