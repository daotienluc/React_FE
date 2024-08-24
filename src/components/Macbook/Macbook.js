import React, { useEffect, useState } from "react";
import bg_macbook from "./../../assets/img/bg_Macbook.jpg";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import classNames from "classnames";
import axios from "axios";
import ProductCard from "./ProductCard";

function Macbook() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("MacbookM3");

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
        setProducts(response.data);
      } catch (error) {
        console.error("Lỗi lấy danh sách sản phẩm", error);
      }
    };
    fetchProducts();
  }, []);

  // Lọc sản phẩm theo danh mục đã chọn
  const filteredProducts = products.filter((product) => {
    return product.displayLocation === selectedCategory;
  });

  return (
    <div className="container py-10">
      <div className="relative">
        <img src={bg_macbook} alt="" className="w-full rounded-lg" />
        <TabGroup className="absolute top-0 w-full">
          <TabList className="flex justify-between bg-white">
            <Tab
              className={({ selected }) =>
                classNames(
                  "font-bold h-14 w-4/12 rounded-tl-lg rounded-tr-lg focus:outline-none focus:ring-0 border-none",
                  selected ? "bg-black text-white" : " text-black bg-white"
                )
              }
              onClick={() => setSelectedCategory("MacbookM3")}
            >
              Macbook M3 giảm thêm 300K
              <p className="text-xs line-clamp-3">
                tặng thêm Balo cho Macbook Air
              </p>
            </Tab>

            <Tab
              className={({ selected }) =>
                classNames(
                  "font-bold h-14 w-4/12 rounded-tl-lg rounded-tr-lg focus:outline-none focus:ring-0 border-none",
                  selected ? "bg-black text-white" : " text-black bg-white"
                )
              }
              onClick={() => setSelectedCategory("MacbookM2")}
            >
              MacBook M2 giảm thêm 200K
              <p className="text-xs line-clamp-3">
                tặng thêm Balo cho MacBook Air
              </p>
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "font-bold h-14 w-4/12 rounded-tl-lg rounded-tr-lg focus:outline-none focus:ring-0 border-none",
                  selected ? "bg-black text-white" : " text-black bg-white"
                )
              }
              onClick={() => setSelectedCategory("Deal hot")}
            >
              Deal HOT trong tuần
              <p className="text-xs line-clamp-3">Giảm đến 35%</p>
            </Tab>
          </TabList>
          <TabPanels className=" absolute w-full">
            <TabPanel className="ml-64">
              <div className="grid grid-cols-5 py-3 gap-3 ml-3">
                {filteredProducts.map((product, index) => (
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
            <TabPanel className="ml-64">
              <div className="grid grid-cols-5 py-3 gap-3 ml-3">
                {filteredProducts.map((product, index) => (
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
            <TabPanel className="ml-64">
              <div className="grid grid-cols-5 py-3 gap-3 ml-3">
                {filteredProducts.map((product, index) => (
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

export default Macbook;
