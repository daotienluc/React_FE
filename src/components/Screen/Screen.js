// Điện gia dụng
import { TabGroup, TabPanel, TabPanels } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

function Screen() {
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
          (product) => product.displayLocation === "Screen"
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
      <div className="bg-accessory">
        <h2 className="text-white pl-3 font-bold py-4 border-b-1">MÀN HÌNH</h2>
        <TabGroup>
          <TabPanels>
            <TabPanel>
              <div className="grid grid-cols-5 py-3 gap-3 ml-3">
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

export default Screen;
