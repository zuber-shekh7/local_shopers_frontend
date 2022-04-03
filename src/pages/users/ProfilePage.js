import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Breadcrumb from "../../components/shared/Breadcrumb";
import { getUser } from "../../actions/userActions";
import routes from "../../utils/routes";
import { HiOutlineUser, HiOutlinePencil, HiOutlineCog } from "react-icons/hi";

const UserProfilePage = () => {
  const dispatch = useDispatch();

  const { loading, user, error } = useSelector((state) => state.getUser);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <main>
      <section className="bg-indigo-600 text-white p-5">
        <div className="container">
          <h1>Your Account</h1>
        </div>
      </section>
      <section className="container">
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

        <div className="grid grid-cols-12">
          <div className="col-span-4 border-r">
            <div className="mr-5">
              <NavLink
                className={(isActive) =>
                  "flex justify-start items-center space-x-2 text-indigo-600 p-4 rounded-lg text-lg hover:bg-indigo-50" +
                  (isActive.isActive ? " bg-indigo-100" : "")
                }
                to={routes.profile}
              >
                <span>
                  <HiOutlineUser className="h-6 w-6" />
                </span>
                <span>Profile</span>
              </NavLink>
              <NavLink
                className={(isActive) =>
                  "flex justify-start items-center space-x-2 text-indigo-600 p-4 rounded-lg text-lg hover:bg-indigo-50" +
                  (isActive.isActive ? " bg-indigo-100" : "")
                }
                to={routes.editProfile}
              >
                <span>
                  <HiOutlineCog className="h-6 w-6" />
                </span>
                <span>Settings</span>
              </NavLink>
            </div>
          </div>
          <div className="col-span-8 ml-5">
            <div>
              {user && (
                <div className="flex justify-center">
                  <div className="flex-1 border p-5 rounded-lg shadow-lg">
                    <ul>
                      <li className="border-b mb-5">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex space-x-5">
                            <h4 className="font-light">First Name</h4>
                            <h4 className="font-normal">
                              {user.profile.firstName}
                            </h4>
                          </div>
                          <div>
                            <Link to={routes.editProfile}>
                              <HiOutlinePencil className="text-indigo-600 hover:bg-none" />
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li className="border-b mb-5">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex space-x-5">
                            <h4 className="font-light">Last Name</h4>
                            <h4 className="font-normal">
                              {user.profile.lastName}
                            </h4>
                          </div>
                          <div>
                            <Link to={routes.editProfile}>
                              <HiOutlinePencil className="text-indigo-600 hover:bg-none" />
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li className="border-b mb-5">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex space-x-5">
                            <h4 className="font-light">Email</h4>
                            <h4 className="font-normal lowercase">
                              {user.email}
                            </h4>
                          </div>
                          <div>
                            <Link to={routes.editProfile}>
                              <HiOutlinePencil className="text-indigo-600 hover:bg-none" />
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-5">
                            <h4 className="font-light">Mobile</h4>
                            <h4 className="font-normal">{user.mobile}</h4>
                          </div>
                          <div>
                            <Link to={routes.editProfile}>
                              <HiOutlinePencil className="text-indigo-600 hover:bg-none" />
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
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
      </section>
    </main>
  );
};

export default UserProfilePage;
