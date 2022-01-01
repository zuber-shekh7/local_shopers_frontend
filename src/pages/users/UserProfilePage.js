import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import Loader from "../../components/shared/Loader";
import Message from "../../components/shared/Message";

const UserProfilePage = ({ history }) => {
  const { loading, error, userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (!userInfo) {
      history.push("/users/login");
    }
  }, [userInfo, history]);

  return (
    <main className="mt-4 text-center">
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}
      {userInfo && (
        <h1>
          Welcome {userInfo.user.firstName} {userInfo.user.lastName}
        </h1>
      )}
    </main>
  );
};

export default UserProfilePage;
