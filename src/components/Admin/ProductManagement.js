import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Select, SelectItem, Chip } from "@nextui-org/react";
import AdminLayout from "./AdminLayout/AdminLayout";
import { toast } from "react-toastify";
import { setHeaders } from "../api/setHeaders";
import ProductCardAdmin from "./LayOuts/ProductCardAdmin";

function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("TẤT CẢ SẢN PHẨM");

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/get-products`,
        setHeaders()
      );
      setProducts(response.data.data);
    } catch (error) {
      console.error("Lỗi khi lấy danh sách sản phẩm:", error);
    }
  };

  useEffect(() => {
    // Hàm lấy danh sách sản phẩm từ API
    fetchProducts();
  }, []);

  const handleChangeStatus = async (productId, newStatus) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/change-product-status/${productId}`,
        { newStatus },
        setHeaders()
      );
      if (response.data.success) {
        toast.success("Cập nhật trạng thái đề thi thành công");
        fetchProducts();
      } else {
        toast.error("Cập nhật lỗi");
      }
    } catch (error) {
      console.error("Error fetching quizzes:", error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/auth/delete-products/${productId}`,
        setHeaders()
      );
      toast.success("Xóa sản phẩm thành công !");
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);
    }
  };

  // Lọc sản phẩm theo danh mục đã chọn
  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "TẤT CẢ SẢN PHẨM") return true;
    return product.displayLocation === selectedCategory;
  });

  return (
    <>
      <AdminLayout>
        <h1 className="font-bold text-xl">Danh mục sản phẩm</h1>
        <div className="my-3">
          <Select
            label="Chọn danh mục"
            className="max-w-xs"
            selectedKey={selectedCategory}
            onSelectionChange={(key) => {
              const selectedValue = Array.from(key).join("");
              setSelectedCategory(selectedValue);
            }}
          >
            <SelectItem key="TẤT CẢ SẢN PHẨM">TẤT CẢ SẢN PHẨM</SelectItem>
            <SelectItem key="OutstandingProducts">SẢN PHẨM NỔI BẬT</SelectItem>
            <SelectItem key="GamingMouse">GAMING GEAR</SelectItem>
            <SelectItem key="Screen">MÀN HÌNH</SelectItem>
            <SelectItem key="Accessory">LINH KIỆN</SelectItem>
            <SelectItem key="Houseware">ĐIỆN GIA DỤNG</SelectItem>
            <SelectItem key="MacbookM3">MacbookM3</SelectItem>
            <SelectItem key="MacbookM2">MacbookM2</SelectItem>
            <SelectItem key="Deal hot">DeaL HOT</SelectItem>
            <SelectItem key="LAPTOP GAMING">LAPTOP GAMING</SelectItem>
            <SelectItem key="LAPTOP AI">LAPTOP AI</SelectItem>
            <SelectItem key="LAPTOP VĂN PHÒNG">LAPTOP VĂN PHÒNG</SelectItem>
            <SelectItem key="LAPTOP SINH VIÊN">LAPTOP SINH VIÊN</SelectItem>
            <SelectItem key="LAPTOP MỎNG NHẸ">LAPTOP MỎNG NHẸ</SelectItem>
          </Select>
        </div>
        <div className="grid grid-cols-5 gap-3 bg-gray-50">
          {filteredProducts.map((product) => (
            <ProductCardAdmin
              key={product._id}
              product={product}
              deleteProduct={deleteProduct}
              handleChangeStatus={handleChangeStatus}
            />
          ))}
        </div>
      </AdminLayout>
    </>
  );
}

export default ProductManagement;

// <div className="bg-white p-5 w-full">
//       <div className="relative">
//         <img src={image} alt="" />
//         <div className="absolute bg-bg-sale bottom-0 h-9 left-0 bg-cover bg-center bg-no-repeat px-2 rounded-md">
//           <p className="font-bold text-xs text-sale">TIẾT KIỆM</p>
//           <p className="font-bold text-white text-sm ">{discount}</p>
//         </div>
//       </div>
//       <div className="flex justify-between flex-col h-48">
//         <h6 className="text-sm font-semibold text-title my-3 line-clamp-2">
//           {name}
//         </h6>
//         <p className="text-xs line-clamp-3 h-12">{description}</p>
//         <p className="font-bold text-blue-600 mt-2">{price}</p>
//         <Button className="w-full py-2 border-2 mt-3 rounded-md text-blue-700 font-bold">
//           Thêm vào giỏ
//         </Button>
//       </div>
//     </div>
