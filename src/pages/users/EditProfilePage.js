import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { getUser, updateUser } from "../../actions/userActions";
import routes from "../../utils/routes";

const EditUserProfilePage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.getUser);

  const {
    loading,
    error,
    user: updatedUser,
  } = useSelector((state) => state.updateUser);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      user.email === email &&
      user.firstName === firstName &&
      user.lastName === lastName &&
      user.mobile === mobile
    ) {
      history.goBack();
      return;
    }

    dispatch(updateUser(email, mobile, firstName, lastName, user._id));

    setMessage("");
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
    return <Redirect to="/users/profile" />;
  }

  return (
    <main>
      <section className="m-10 max-w-xl mx-auto px-10">
        <h1 className="text-4xl font-semibold mb-4">Edit your profile</h1>
        <div className="flex  justify-center bg-gray-50 border-2 border-gray-50 py-5 rounded-lg shadow-lg px-10">
          <form className="flex-1" onSubmit={handleSubmit}>
            <div className="flex justify-between">
              <Link
                className="inline-block p-2 bg-white-100 border-2 border-gray-500 rounded-full text-gray-500 mb-5"
                to={routes.userProfile}
              >
                <span>
                  <HiOutlineArrowSmLeft className="h-6 w-6" />
                </span>
              </Link>
            </div>
            <div className="mb-3">
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
            <div className="mb-3">
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
            <div className="mb-3">
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
            <div className="mb-3">
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
            <div className="mb-3">
              <button className="w-full bg-indigo-500 text-white rounded-lg py-2 text-lg hover:bg-indigo-400">
                Save
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default EditUserProfilePage;
