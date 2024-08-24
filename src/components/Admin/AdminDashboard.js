import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "./AdminLayout/AdminLayout.js";

function AdminDashboard() {
  const role = localStorage.getItem("role");

  const navigate = useNavigate();

  // Kiểm tra role có phải là admin không ?
  useEffect(() => {
    if (role !== "admin") {
      navigate("/admin/login");
    }
  }, [navigate, role]);

  return (
    <>
      <AdminLayout>
        <h1>Admin Dashboard</h1>
      </AdminLayout>
    </>
  );
}

export default AdminDashboard;
