import React, { useState } from "react";
import Logo from "./../../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchIcon } from "./SearchIcon";
import { Button, Input, Link, User } from "@nextui-org/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { UilUserCircle, UilFileBlockAlt } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

function Header() {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate("/cartpage");
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    toast.success("Đăng xuất thành công!");
    navigate("/");
  };

  const searchProducts = async (searchQuery) => {
    console.log("từ khóa tìm kiếm là:", searchQuery);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/products/search?q=${searchQuery}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Lỗi tìm kiếm sản phẩm", error);
    }
  };

  const handleSearch = async () => {
    const result = await searchProducts(searchQuery);
    setProducts(result);
  };

  return (
    <div className="container mx-auto border-b-1 fixed z-10 bg-white">
      <div className="flex items-center justify-between h-24">
        <Link className="cursor-pointer" as={RouterLink} to="/">
          <img src={Logo} alt="logo" className="w-8 h-8 mr-4" />
          <span className="text-blue-500 font-bold">LL.VN</span>
        </Link>
        <div className="w-1/2 h-10">
          <Input
            isClearable
            radius="lg"
            onChange={(e) => setSearchQuery(e.target.value)}
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-black/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focus=true]:bg-default-200/50",
                "dark:group-data-[focus=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
            placeholder="Nhập từ khóa cần tìm"
            startContent={
              <SearchIcon
                onClick={handleSearch}
                className="text-black/50 mb-0.5 dark:text-black/90 text-slate-400 cursor-pointer"
              />
            }
          />
          <ul className="bg-white p-3 rounded-lg">
            {Array.isArray(products) &&
              products.map((product) => (
                <li key={product._id}>{product.name}</li>
              ))}
          </ul>
        </div>
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

        <FontAwesomeIcon icon="fa-regular fa-bell" className="text-2xl" />
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
  );
}

export default Header;
