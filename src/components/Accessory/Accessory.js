// Linh kiện
import { TabGroup, TabPanel, TabPanels } from "@headlessui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./../ProductCard/ProductCard";

function Accessory() {
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
          (product) => product.displayLocation === "Accessory"
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
        <h2 className="text-white pl-3 font-bold py-4 border-b-1">LINH KIỆN</h2>
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

export default Accessory;
