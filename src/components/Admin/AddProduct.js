import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminLayout from "./AdminLayout/AdminLayout";
import { toast } from "react-toastify";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [discount, setDiscount] = useState("");
  const [description, setDescription] = useState("");
  const [displayLocation, setDisplayLocation] = useState();

  const navigate = useNavigate();

  // Hàm định dạng giá trị thành tiền tệ
  const formatCurrency = (value) => {
    if (!value) return "";
    const numericValue = value.replace(/\D/g, "");
    return new Intl.NumberFormat("vi-VN").format(numericValue) + "đ";
  };

  const handlePriceChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, "");
    setPrice(numericValue);
  };

  const handleAddProduct = async () => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      if (image) {
        formData.append("image", image);
      }
      formData.append("discount", discount);
      formData.append("description", description);
      formData.append("displayLocation", displayLocation);

      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/products`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("Thêm sản phẩm thành công !");
      navigate("/admin/products");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
      <AdminLayout>
        <h1 className="font-bold text-xl">Thêm sản phẩm mới</h1>
        <Input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <Input
          type="text"
          placeholder="Giá tiết kiệm"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Tên sản phẩm"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Mô tả sản phẩm"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Giá sản phẩm"
          value={formatCurrency(price)}
          onChange={handlePriceChange}
        />
        <select
          placeholder="Chọn nơi hiển thị sản phẩm"
          value={displayLocation}
          onChange={(e) => setDisplayLocation(e.target.value)}
        >
          <option>Các danh mục</option>
          <option value="GamingMouse">Chuột Gaming</option>
          <option value="OutstandingProducts">Sản phẩm nổi bật</option>
          <option value="Screen">Màn hình</option>
          <option value="Accessory">Linh kiện</option>
          <option value="Houseware">Điện gia dụng</option>
          <option value="MacbookM3">MacbookM3</option>
          <option value="MacbookM2">MacbookM2</option>
          <option value="Deal hot">DeaL HOT</option>
          <option value="LAPTOP GAMING">LAPTOP GAMING</option>
          <option value="LAPTOP AI">LAPTOP AI</option>
          <option value="LAPTOP VĂN PHÒNG">LAPTOP VĂN PHÒNG</option>
          <option value="LAPTOP SINH VIÊN">LAPTOP SINH VIÊN</option>
          <option value="LAPTOP MỎNG NHẸ">LAPTOP MỎNG NHẸ</option>
        </select>
        <Button onClick={handleAddProduct}>Thêm</Button>
      </AdminLayout>
    </div>
  );
}

export default AddProduct;
