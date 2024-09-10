// Chuột gaming
import { TabGroup, TabPanel, TabPanels } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import ProductCard from "./../ProductCard/ProductCard";
import axios from "axios";

function Houseware() {
  const [products, setProducts] = useState([]);

  const formatCurrency = (value) => {
    if (!value) return "";
    return new Intl.NumberFormat("vi-VN").format(value) + "đ";
  };

  useEffect(() => {
    // Hàm lấy danh sách sản phẩm từ API
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/auth/get-products-user`
        );
        const productsData = response.data.data;
        const filteredProducts = productsData.filter(
          (product) => product.displayLocation === "GamingMouse"
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách sản phẩm:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="container py-10">
      <div className="bg-houseware">
        <h2 className="text-white pl-3 font-bold py-4 border-b-1">
          GAMING GEAR
        </h2>
        <TabGroup>
          <TabPanels>
            <TabPanel>
              <div className="flex py-3 gap-3 mx-3">
                {products.map((product, index) => (
                  <ProductCard
                    key={index}
                    id={product._id}
                    image={`${process.env.REACT_APP_API_URL_IMAGE}/${product.image}`}
                    discount={product.discount}
                    name={product.name}
                    descriptionShort={product.descriptionShort}
                    price={formatCurrency(product.price)}
                  />
                ))}
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}

export default Houseware;
