import { Link } from "@nextui-org/react";
import { Link as RouterLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-1/5 bg-slate-700">
      <div className="w-1/5 bg-slate-700 z-20 h-screen fixed">
        <h2 className=" w-full text-center font-bold text-slate-300 py-5 border-b-1">
          ADMIN
        </h2>
        <div className="flex flex-col">
          <Link as={RouterLink} to="/admin/dashboard">
            Dashboard
          </Link>
          <Link as={RouterLink} to="/admin/products/add">
            Thêm sản phẩm
          </Link>
          <Link as={RouterLink} to="/admin/products">
            Quản lý sản phẩm
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
