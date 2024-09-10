import React, { useState, useEffect } from "react";
import { Button, CircularProgress, Input } from "@nextui-org/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { UilSearch, UilUsdCircle } from "@iconscout/react-unicons";
import useDebounce from "./../Hooks/useDebounce";

export default function HeaderSearch() {
  const [results, setResults] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const debouncedSearchItem = useDebounce(searchItem, 1000);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchItem(event.target.value);
  };

  useEffect(() => {
    const searchProducts = async () => {
      if (searchItem.trim() === "") {
        setResults([]);
        return;
      }

      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/auth/search-products?nameT=${searchItem}`
        );
        setResults(response.data.data);
      } catch (error) {
        console.error("Lỗi tìm kiếm sản phẩm:", error);
        setResults([]);
      }
    };

    searchProducts();
  }, [debouncedSearchItem]);

  const handleResultClick = (product) => {
    setSearchItem("");
    navigate(`/product/productdetails/${product._id}/${product.name}`);
  };

  const formatCurrency = (value) => {
    if (!value) return "";
    return new Intl.NumberFormat("vi-VN").format(value) + "đ";
  };
  return (
    <div className="w-2/4 relative">
      <Input
        type="text"
        value={searchItem}
        placeholder="Nhập sản phẩm cần tìm kiếm"
        onChange={handleInputChange}
        endContent={<UilSearch />}
      />
      {results.length > 0 ? (
        <ul className="bg-white absolute w-full rounded-md h-80 overflow-y-scroll">
          <p className="pl-2 py-2 bg-gray-300 text-sm rounded-t-md">
            Sản phẩm gợi ý
          </p>
          {results.map((product) => (
            <li
              key={product._id}
              onClick={() => handleResultClick(product)}
              className="flex py-3 border-b-2 hover:bg-slate-100 cursor-pointer"
            >
              <img
                src={`${process.env.REACT_APP_API_URL_IMAGE}/${product.image}`}
                alt={product.name}
                className="w-16 mx-3 object-cover"
              />
              <div>
                <p>{product.name}</p>
                <p className="flex text-xs items-center">
                  <UilUsdCircle className="w-4 text-red-400 mr-1" />
                  Online giá rẻ quá
                </p>
                <p className="text-red-500 font-medium text-sm">
                  {formatCurrency(product.price)}₫
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : searchItem.trim() !== "" ? (
        <div className="absolute bg-white p-3 rounded-lg shadow-lg w-full">
          <CircularProgress size="sm" aria-label="Loading..." />
        </div>
      ) : null}
    </div>
  );
}
