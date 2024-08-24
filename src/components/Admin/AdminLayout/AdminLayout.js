import React from "react";
import Sidebar from "./../LayOuts/Sidebar.js";
import HeaderAdmin from "../LayOuts/HeaderAdmin.js";

function AdminLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-4/5">
        <HeaderAdmin />
        <div className="m-5">{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
