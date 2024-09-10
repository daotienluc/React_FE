// Sản phẩm nổi bật
import { TabGroup, TabPanel, TabPanels } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import ProductCard from "./../ProductCard/ProductCard";
import { Pagination } from "@nextui-org/react";
import axios from "axios";

function OutstandingProducts() {
  const [products, setProducts] = useState([]);

  const formatCurrency = (value) => {
    if (!value) return "";
    return new Intl.NumberFormat("vi-VN").format(value) + "đ";
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/auth/get-products-user`
        );
        const productsData = response.data.data;
        const filteredProducts = productsData.filter(
          (product) => product.displayLocation === "OutstandingProducts"
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách sản phẩm:", error);
      }
    };

    fetchProducts();
  }, []); // Chạy một lần khi component mount

  return (
    <div className="container py-10">
      <div className="bg-gray-50">
        <h2 className="text-black pl-3 font-bold py-4 border-b-1">
          SẢN PHẨM NỔI BẬT
        </h2>
        <TabGroup>
          <TabPanels>
            <TabPanel>
              <div className="flex gap-3 py-3 mx-3">
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
      <div className="flex justify-center mt-3">
        <Pagination isCompact showControls total={10} initialPage={1} />
      </div>
    </div>
  );
}

export default OutstandingProducts;
