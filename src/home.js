import React from "react";
import Header from "./components/header/header.js";
import Slick from "./components/frameworks/slick.js";
import Laptopgaming from "./components/Laptopgaming/Laptopgaming.js";
import Macbook from "./components/Macbook/Macbook.js";
import FeaturedCategories from "./components/FeaturedCategories/FeaturedCategories.js";
import Accessory from "./components/Accessory/Accessory.js";
import Sale from "./components/Sale/Sale.js";
import Houseware from "./components/Houseware/Houseware.js";
import Screen from "./components/Screen/Screen.js";
import GamingMouse from "./components/GamingMouse/GamingMouse.js";
import OutstandingProducts from "./components/OutstandingProducts/OutstandingProducts.js";
import Footer from "./components/Footer/Footer.js";
import BackToTop from "./components/frameworks/BackToTop.js";

function Home() {
  return (
    <>
      <Header />
      <Slick />
      <Laptopgaming />
      <Macbook />
      <FeaturedCategories />
      <Accessory />
      <Sale />
      <Houseware />
      <Screen />
      <GamingMouse />
      <OutstandingProducts />
      <Footer />
      <BackToTop />
    </>
  );
}

export default Home;
