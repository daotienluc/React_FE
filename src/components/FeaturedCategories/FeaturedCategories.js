// Danh mục nôi bật
import React from "react";
import { Link } from "react-router-dom";
import laptop from "./../../assets/img/FeaturedCategories-laptop.jpg";
import apple from "./../../assets/img/FeaturedCategories-apple.jpg";
import dienmay from "./../../assets/img/FeaturedCategories-dienmay.jpg";
import linhkien from "./../../assets/img/FeaturedCategories-linhkien.jpg";
import pc from "./../../assets/img/FeaturedCategories-pc.jpg";
import phukien from "./../../assets/img/FeaturedCategories-phukien.jpg";
import thietbianninh from "./../../assets/img/FeaturedCategories-thietbianninh.jpg";
import thietbimang from "./../../assets/img/FeaturedCategories-thietbimang.jpg";
import thietbivanphong from "./../../assets/img/FeaturedCategories-thietbivanphong.jpg";
import manhinh from "./../../assets/img/FeaturedCategories.manhinh.jpg";

function FeaturedCategories() {
  return (
    <div className="container">
      <div className="bg-gray-50 p-3 rounded-lg">
        <h2 className="font-bold ">Danh mục nổi bật</h2>
        <div className="flex justify-between mx-5">
          <div className="p-5 text-center">
            <Link className="w-16 h-16">
              <img src={laptop} alt="" />
              <p className="text-xs mt-3">LapTop</p>
            </Link>
          </div>
          <div className="p-5 text-center">
            <Link className="w-16 h-16">
              <img src={apple} alt="" />
              <p className="text-xs mt-3">Apple</p>
            </Link>
          </div>
          <div className="p-5 text-center">
            <Link className="w-16 h-16">
              <img src={pc} alt="" />
              <p className="text-xs mt-3">PC</p>
            </Link>
          </div>
          <div className="p-5 text-center">
            <Link className="w-16 h-16">
              <img src={linhkien} alt="" />
              <p className="text-xs mt-3">Linh kiện</p>
            </Link>
          </div>
          <div className="p-5 text-center">
            <Link className="w-16 h-16">
              <img src={manhinh} alt="" />
              <p className="text-xs mt-3">Màn hình</p>
            </Link>
          </div>
          <div className="p-5 text-center">
            <Link className="w-16 h-16">
              <img src={phukien} alt="" />
              <p className="text-xs mt-3">Phụ kiện</p>
            </Link>
          </div>
          <div className="p-5 text-center">
            <Link className="w-16 h-16">
              <img src={thietbimang} alt="" />
              <p className="text-xs mt-3">Thiết bị mạng </p>
            </Link>
          </div>
          <div className="p-5 text-center">
            <Link className="w-16 h-16">
              <img src={thietbianninh} alt="" />
              <p className="text-xs mt-3">Thiết bị an ninh</p>
            </Link>
          </div>
          <div className="p-5 text-center">
            <Link className="w-16 h-16">
              <img src={thietbivanphong} alt="" />
              <p className="text-xs mt-3">Thiết bị văn phòng</p>
            </Link>
          </div>
          <div className="p-5 text-center">
            <Link className="w-16 h-16">
              <img src={dienmay} alt="" />
              <p className="text-xs mt-3">Điện máy - Điện gia dụng</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCategories;
