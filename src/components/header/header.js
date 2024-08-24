import React from "react";
import Logo from "./../../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchIcon } from "./SearchIcon";
import { Input, Link, User } from "@nextui-org/react";
import { Link as RouterLink } from "react-router-dom";

function Header() {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  return (
    <div className="container mx-auto border-b-1 fixed z-10 bg-white">
      <div className="flex items-center justify-between h-24">
        <Link className="cursor-pointer">
          <img src={Logo} alt="logo" className="w-8 h-8 mr-4" />
          <span className="text-blue-500 font-bold">LL.VN</span>
        </Link>
        <div className="w-1/2 h-10">
          <Input
            isClearable
            radius="lg"
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
              <SearchIcon className="text-black/50 mb-0.5 dark:text-black/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>
        <div>
          {token ? (
            <User
              name={username}
              description="Product Designer"
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
              }}
            />
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
        <div className="flex items-center">
          <FontAwesomeIcon
            icon="fa-solid fa-cart-shopping"
            className="text-2xl mr-2"
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
