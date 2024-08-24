import React from "react";
import Slider from "react-slick";
import banner1 from "./../../assets/img/banner1.jpg";
import banner2 from "./../../assets/img/banner2.jpg";
import banner3 from "./../../assets/img/banner3.jpg";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled(Slider)`
  .slick-dots {
    bottom: 12px;
  }
`;

const MultipleItems = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full pt-24">
      <StyledSlider {...settings}>
        <div>
          <img src={banner1} alt="" />
        </div>
        <div>
          <img src={banner2} alt="" />
        </div>
        <div>
          <img src={banner3} alt="" />
        </div>
      </StyledSlider>
    </div>
  );
};

export default MultipleItems;
