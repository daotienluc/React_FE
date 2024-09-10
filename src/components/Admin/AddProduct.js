import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminLayout from "./AdminLayout/AdminLayout";
import { toast } from "react-toastify";
import { setHeaders } from "../api/setHeaders";
import DynamicDescriptionInput from "./AdminLayout/DynamicDescriptionInput";
import { brands } from "../lib/brands";
import Categorys from "../lib/Category";

function AddProduct() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [discount, setDiscount] = useState("");
  const [description, setDescription] = useState([]);
  const [descriptionShort, setDescriptionShort] = useState("");
  const [displayLocation, setDisplayLocation] = useState();

  const navigate = useNavigate();
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
      formData.append("brand", brand);
      formData.append("price", price);
      if (image) {
        formData.append("image", image);
      }
      formData.append("discount", discount);
      formData.append("descriptionShort", descriptionShort);
      formData.append("description", JSON.stringify(description));
      formData.append("displayLocation", displayLocation);

      await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/create-products`,
        formData,
        setHeaders()
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
          value={formatCurrency(discount)}
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
          placeholder="Giá sản phẩm"
          value={formatCurrency(price)}
          onChange={handlePriceChange}
        />

        <Input
          type="text"
          placeholder="Mô tả"
          value={descriptionShort}
          onChange={(e) => setDescriptionShort(e.target.value)}
        />

        <DynamicDescriptionInput
          description={description}
          setDescription={setDescription}
        />
        <Select
          label="Thương hiệu"
          variant="bordered"
          value={brand}
          className="w-auto-md"
          onChange={(e) => setBrand(e.target.value)}
        >
          {brands.map((t) => (
            <SelectItem key={t.value}>{t.label}</SelectItem>
          ))}
        </Select>

        <Select
          label="Các danh mục"
          variant="bordered"
          value={displayLocation}
          className="w-auto-md"
          onChange={(e) => setDisplayLocation(e.target.value)}
        >
          {Categorys.map((item) => (
            <SelectItem key={item.value}>{item.lable}</SelectItem>
          ))}
        </Select>
        <Button onClick={handleAddProduct}>Thêm</Button>
      </AdminLayout>
    </div>
  );
}

export default AddProduct;
