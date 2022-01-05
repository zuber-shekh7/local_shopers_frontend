import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const AdminDashboardPage = ({ history }) => {
  const { adminInfo } = useSelector((state) => state.adminLogin);

  useEffect(() => {
    if (!adminInfo) {
      history.push("/admin/login");
    }
  }, [history, adminInfo]);

  return (
    <main>
      <h1>Admin Dashboard</h1>
    </main>
  );
};

export default AdminDashboardPage;
