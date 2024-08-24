import React from "react";
import bgSale from "./../../assets/img/banner-sale.jpg";
import { Link } from "react-router-dom";

function Sale() {
  return (
    <div className="container">
      <Link>
        <img src={bgSale} alt="" className="w-full rounded-lg" />
      </Link>
    </div>
  );
}

export default Sale;
