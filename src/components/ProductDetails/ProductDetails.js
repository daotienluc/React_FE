import React, { useEffect, useState } from "react";
import Header from "./../header/header";
import Footer from "./../Footer/Footer";

import test from "./../../assets/img/laptopgaming01.jpg";
import logo from "./../../assets/img/logo.png";
import { Button } from "@nextui-org/react";
import {
  UilCheckCircle,
  UilTruck,
  UilShieldCheck,
  UilExchange,
  UilCog,
} from "@iconscout/react-unicons";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/auth/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Lỗi lấy chi tiết sản phẩm", error);
      }
    };
    fetchProduct();
  }, [id]);

  const formatCurrency = (value) => {
    if (!value) return "";
    return new Intl.NumberFormat("vi-VN").format(value) + "đ";
  };

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header />
      <div className="container py-32 bg-background">
        <div className="flex">
          <div className="w-3/4  pr-4">
            <div className="flex bg-white p-6 rounded-md gap-3">
              <div className="w-2/5">
                <div className="flex justify-center">
                  <img
                    src={`${process.env.REACT_APP_API_URL}/${product.image}`}
                    class="w-full h-80 object-cover rounded-md"
                    alt=""
                  />
                </div>
                <div className="flex justify-around py-4 border-b-1">
                  <img
                    src={test}
                    class="rounded-md w-14 object-cover hover:border-1 border-blue-500 cursor-pointer "
                    alt=""
                  />
                  <img
                    src={test}
                    class="rounded-md w-14 object-cover hover:border-1 border-blue-500 cursor-pointer "
                    alt=""
                  />
                  <img
                    src={test}
                    class="rounded-md w-14 object-cover hover:border-1 border-blue-500 cursor-pointer "
                    alt=""
                  />
                  <img
                    src={test}
                    class="rounded-md w-14 object-cover hover:border-1 border-blue-500 cursor-pointer "
                    alt=""
                  />
                  <img
                    src={test}
                    class="rounded-md w-14 object-cover hover:border-1 border-blue-500 cursor-pointer "
                    alt=""
                  />
                </div>
                <div className="mt-7 text-xs">
                  - CPU: AMD Ryzen 5 7535HS
                  <br />
                  - Màn hình: 16" IPS (1920 x 1200),165Hz
                  <br />
                  - RAM: 1 x 8GB DDR5 4800MHz
                  <br />
                  - Đồ họa: GeForce RTX 4050 6GB GDDR6 / AMD Radeon 660M
                  <br />
                  - Lưu trữ: 512GB SSD M.2 NVMe /
                  <br />
                  - Hệ điều hành: Windows 11 Home SL
                  <br />
                  - Pin: 4 cell 90 Wh Pin liền
                  <br />
                  - Khối lượng: 2.6kg
                  <br />- Chuẩn AMD
                </div>
              </div>
              <div className="w-3/5">
                <h2 className="font-semibold text-lg">{product.description}</h2>
                <p className="text-xs text-title">
                  Thương hiệu{" "}
                  <span className="text-sm text-blue-500">{product.name}</span>
                </p>
                <p className="uppercase text-xs font-semibold text-title mt-2">
                  Màu sắc Laptop (filter): Đen
                </p>
                <div className="mt-5 mb-10">
                  <span className="mr-3 p-2 rounded-md bg-wihte text-black border-1.5 border-blue-500 cursor-pointer">
                    Đen
                  </span>
                  <span className="mr-3 p-2 rounded-md bg-wihte text-black border-1.5 border-blue-500 cursor-pointer">
                    Trắng
                  </span>
                </div>
                <p className="font-bold text-blue-600 border-b-1 pb-6">
                  {formatCurrency(product.price)}
                </p>
                <div className="flex gap-3 pt-3">
                  <Button className="w-1/2" color="primary" variant="solid">
                    Mua ngay
                  </Button>
                  <Button className="w-1/2" color="primary" variant="bordered">
                    Thêm vào giỏ hàng
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <div className="bg-white p-4 rounded-md">
              <div className="flex items-center">
                <div className="mr-3">
                  <img src={logo} alt="" className="w-12 rounded-full " />
                </div>
                <div className="flex">
                  <h5 className="font-semibold text-sm relative">
                    CÔNG TY CỔ PHẦN THƯƠNG MẠI DỊCH VỤ LL
                    <UilCheckCircle class=" absolute w-4 left-20 -bottom-1 text-green-500" />
                  </h5>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md mt-4">
              <h2 className="text-sm font-medium">Chính sách bán hàng</h2>
              <div className="flex my-2 items-center">
                <UilTruck className="w-8 mr-1" />
                <p className="text-xs">
                  Miễn phí giao hàng cho đơn hàng từ 5 triệu{" "}
                  <span className="text-blue-500 cursor-pointer">
                    Xem chi tiết
                  </span>
                </p>
              </div>
              <div className="flex my-2 items-center">
                <UilShieldCheck className="w-8 " />
                <p className="text-xs">Cam kết hàng chính hãng 100% </p>
              </div>
              <div className="flex my-2 items-center">
                <UilExchange className="w-8 " />
                <p className="text-xs">
                  Đổi trả trong vòng 10 ngày{" "}
                  <span className="text-blue-500 cursor-pointer">
                    Xem chi tiết
                  </span>
                </p>
              </div>
              <h2 className="text-sm font-medium mt-10">Dịch vụ khác</h2>
              <div className="flex my-2 items-center">
                <UilCog className="w-8 " />
                <p className="text-xs">
                  Gói dịch vụ bảo hành/ Sửa chữa tận nơi{" "}
                  <span className="text-blue-500 cursor-pointer">
                    Xem chi tiết
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
