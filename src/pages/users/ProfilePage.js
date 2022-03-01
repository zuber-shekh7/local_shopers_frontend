import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlineArrowSmLeft, HiOutlinePencil } from "react-icons/hi";
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
    <main>
      <section className="m-10 max-w-xl mx-auto grid grid-cols-1 px-10">
        <Breadcrumb
          links={[
            {
              name: "your account",
              to: "/users/account",
            },
            {
              name: "your profile",
              to: "/users/profile",
            },
          ]}
        />
        {user && (
          <div>
            <h1 className="text-4xl font-semibold mb-4">Your Profile</h1>

            <div className="bg-gray-50 border-2 border-gray-50 px-10 py-5 rounded-lg shadow-lg">
              <div className="flex justify-between">
                <Link
                  className="inline-block p-2 bg-white-100 border-2 border-gray-500 rounded-full text-gray-500 mb-5"
                  to={routes.dashboard}
                >
                  <span>
                    <HiOutlineArrowSmLeft className="h-6 w-6" />
                  </span>
                </Link>
                <Link
                  className="inline-block p-2 bg-white-100 border-2 border-gray-500 rounded-full text-gray-500 mb-5"
                  to={routes.editUserProfile}
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
                    <p className="">{user.firstName}</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">Last Name</h4>
                    <p className="">{user.lastName}</p>
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
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">Password</h4>
                    <p className="">***********</p>
                  </div>
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
