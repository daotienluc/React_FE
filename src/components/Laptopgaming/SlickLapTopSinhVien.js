import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./../ProductCard/ProductCard";
import axios from "axios";

const StyledSlider = styled(Slider)`
  .slick-dots li button:before {
    font-size: 8px;
  }
`;

const MultipleItems = () => {
  const settings = {
    infinite: false,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [products, setProducts] = useState([]);
  const selectedCategory = "LAPTOP SINH VIÊN";

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

  const filteredProducts = products.filter((product) => {
    return product.displayLocation === selectedCategory;
  });

  // Chia các sản phẩm thành các nhóm, mỗi nhóm chứa tối đa 5 sản phẩm
  const groupedProducts = [];
  for (let i = 0; i < filteredProducts.length; i += 5) {
    groupedProducts.push(filteredProducts.slice(i, i + 5));
  }

  return (
    <div className="w-full">
      <StyledSlider {...settings}>
        {groupedProducts.map((group, index) => (
          <div key={index} className="!flex gap-3">
            {group.map((product, productIndex) => (
              <ProductCard
                key={productIndex}
                id={product._id}
                image={`${process.env.REACT_APP_API_URL}/${product.image}`}
                discount={product.discount}
                name={product.name}
                description={product.description}
                price={formatCurrency(product.price)}
              />
            ))}
          </div>
        ))}
      </StyledSlider>
    </div>
  );
};

export default MultipleItems;
