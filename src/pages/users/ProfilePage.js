import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
        {user && (
          <div>
            <h1 className="text-4xl font-semibold mb-4">Your Profile</h1>
            <div className="bg-gray-50 border-2 border-gray-50 px-10 py-5 rounded-lg shadow-lg">
              <ul>
                <li>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">First Name</h4>
                      <p className="">{user.firstName}</p>
                    </div>
                    <Link
                      className="bg-indigo-500 text-white py-2 px-3 rounded-lg hover:bg-indigo-400"
                      to={routes.editUserProfile}
                    >
                      Edit
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">Last Name</h4>
                      <p className="">{user.lastName}</p>
                    </div>
                    <Link
                      className="bg-indigo-500 text-white py-2 px-3 rounded-lg hover:bg-indigo-400"
                      to={routes.editUserProfile}
                    >
                      Edit
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="">{user.email}</p>
                    </div>
                    <Link
                      className="bg-indigo-500 text-white py-2 px-3 rounded-lg hover:bg-indigo-400"
                      to={routes.editUserProfile}
                    >
                      Edit
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">Mobile</h4>
                      <p className="">{user.mobile ? user.mobile : "N/A"}</p>
                    </div>
                    <Link
                      className="bg-indigo-500 text-white py-2 px-3 rounded-lg hover:bg-indigo-400"
                      to={routes.editUserProfile}
                    >
                      Edit
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">Password</h4>
                      <p className="">***********</p>
                    </div>
                    <Link
                      className="bg-indigo-500 text-white py-2 px-3 rounded-lg hover:bg-indigo-400"
                      to={routes.editUserProfile}
                    >
                      Edit
                    </Link>
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
