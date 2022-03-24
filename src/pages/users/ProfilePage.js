import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlinePencil } from "react-icons/hi";
import Breadcrumb from "../../components/shared/Breadcrumb";
import { getUser } from "../../actions/userActions";
import routes from "../../utils/routes";

const UserProfilePage = () => {
  const dispatch = useDispatch();

  const { loading, user, error } = useSelector((state) => state.getUser);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

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
          ]}
        />
        <h1>Your Profile</h1>
        <hr />
        {error && <h5 className="text-center text-red-500">{error}</h5>}
        {loading && !user && (
          <div className="flex justify-center">
            <div className="animate-pulse flex-1 bg-gray-50 border  px-10 py-5 rounded-lg shadow-lg ">
              <div className="flex justify-end">
                <div className="h-12 w-12 bg-gray-300 rounded-full mb-5"></div>
              </div>
              <div>
                {[...Array(5).fill(1)].map((value, index) => {
                  return (
                    <div key={index} className="flex justify-between mb-5">
                      <div className="h-8 w-3/12 bg-gray-300 rounded-lg"></div>
                      <div className="h-8 w-4/12 bg-gray-300 rounded-lg"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {user && (
          <div className="flex justify-center">
            <div className="flex-1 bg-gray-50 border  px-10 py-5 rounded-lg shadow-lg">
              <div className="flex justify-end">
                <Link
                  className="inline-block p-2 bg-white-100 border-2 border-gray-500 rounded-full text-gray-500 mb-5"
                  to={routes.editProfile}
                >
                  <span>
                    <HiOutlinePencil className="h-6 w-6" />
                  </span>
                </Link>
              </div>
              <ul>
                <li>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">First Name</h4>
                    <p className="">{user.profile.firstName}</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">Last Name</h4>
                    <p className="">{user.profile.lastName}</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">Email</h4>
                    <p className="">{user.email}</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">Mobile</h4>
                    <p className="">{user.mobile ? user.mobile : "N/A"}</p>
                  </div>
                </li>
                <li>
                  <Link
                    to={routes.changePassword}
                    className="flex items-center justify-between mb-3 text-indigo-600 hover:underline hover:underline-offset-1"
                  >
                    <h4 className="font-semibold">Change Password</h4>
                    <span>
                      <HiOutlinePencil className="h-4 w-4" />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default UserProfilePage;
