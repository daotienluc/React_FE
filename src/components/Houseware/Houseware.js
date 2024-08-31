// Điện gia dụng
import { TabGroup, TabPanel, TabPanels } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./../ProductCard/ProductCard";

function Houseware() {
  const [products, setProducts] = useState([]);

  const formatCurrency = (value) => {
    if (!value) return "";
    return new Intl.NumberFormat("vi-VN").format(value) + "đ";
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/auth/products`
        );
        const filteredProducts = response.data.filter(
          (product) => product.displayLocation === "Houseware"
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Lỗi lấy danh sách sản phẩm:", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="container py-10">
      <div className="bg-houseware">
        <h2 className="text-white pl-3 font-bold py-4 border-b-1">
          ĐIỆN GIA DỤNG
        </h2>
        <TabGroup>
          <TabPanels>
            <TabPanel>
              <div className="flex py-3 gap-3 mx-3">
                {products.map((product, index) => (
                  <ProductCard
                    key={index}
                    image={`${process.env.REACT_APP_API_URL}/${product.image}`}
                    discount={product.discount}
                    name={product.name}
                    description={product.description}
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
