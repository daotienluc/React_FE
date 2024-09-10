import React, { useState, useEffect } from "react";
import Logo from "./../../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Link, User } from "@nextui-org/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { UilUserCircle, UilFileBlockAlt } from "@iconscout/react-unicons";
import { jwtDecode } from "jwt-decode";
import HeaderSearch from "./HeaderSearch";

function Header() {
  const token = localStorage.getItem("LL-token-react");
  let username = "";

  if (token) {
    const decoded = jwtDecode(token);
    username = decoded.username;
  }

  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate("/cartpage");
  };

  const handleLogOut = () => {
    localStorage.removeItem("LL-token-react");
    navigate("/login");
  };

  return (
    <div className="container mx-auto border-b-1 fixed z-10 bg-white">
      <div className="flex justify-between items-center h-24">
        <Link className="cursor-pointer " as={RouterLink} to="/">
          <img src={Logo} alt="logo" className="w-8 h-8 mr-4" />
          <span className="text-blue-500 font-bold">LL.VN</span>
        </Link>
        <HeaderSearch />
        <div className="flex items-center">
          <div>
            {token ? (
              <div className="relative cursor-pointer group">
                <User
                  name={username}
                  description="Product Designer"
                  avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                  }}
                />
                <ul className="absolute w-40 hidden group-hover:block  bg-white py-3 rounded-lg shadow-lg">
                  <li className="flex">
                    <img
                      src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                      alt=""
                      className="w-10 mx-3"
                    />
                    {username}
                  </li>
                  <li className="flex justify-evenly my-3 items-center hover:bg-slate-100 cursor-pointer">
                    <UilUserCircle />
                    <p className="text-xs">Thông tin tài khoản</p>
                  </li>
                  <li className="flex justify-evenly my-3 items-center hover:bg-slate-100 cursor-pointer">
                    <UilFileBlockAlt />
                    <p className="text-xs">Quản lý đơn hàng</p>
                  </li>
                  <Button
                    onClick={handleLogOut}
                    color="primary"
                    variant="bordered"
                    className="w-11/12 mx-2"
                  >
                    Đăng xuất
                  </Button>
                </ul>
              </div>
            ) : (
              <>
                <Link as={RouterLink} to="/register" className="block">
                  Đăng kí
                </Link>
                <Link as={RouterLink} to="/login">
                  Đăng nhập
                </Link>
              </>
            )}
          </div>

          <FontAwesomeIcon
            icon="fa-regular fa-bell"
            className="text-2xl mx-10"
          />
          <div
            onClick={handleAddProduct}
            className="flex items-center cursor-pointer hover:text-blue-700"
          >
            <FontAwesomeIcon
              icon="fa-solid fa-cart-shopping"
              className="text-2xl mr-2 "
            />
            <div className="text-sm">
              <p>Giỏ hàng của bạn</p>
              <p>(0) sản phẩm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
