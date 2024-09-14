// components/ProductCard.js
import React, { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Link } from "@nextui-org/react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import CartContext from "../CartPage/CartContext";

const ProductCard = ({
  id,
  image,
  discount,
  name,
  descriptionShort,
  price,
}) => {
  const { setProducts, setDataQuantity } = useContext(CartContext);
  const token = localStorage.getItem("LL-token-react");
  let userId = "";

  if (token) {
    const decoded = jwtDecode(token);
    userId = decoded.id;
  }

  const quantity = 1;

  const handleAddProductCart = async () => {
    if (!userId) {
      toast.error("Vui lòng đăng nhập để thêm sản phẩm !");
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/add-to-cart`,
        {
          userId,
          productId: id,
          quantity,
        }
      );
      setDataQuantity(response.data);
      toast.success("Thêm sản phẩm vào giỏ hàng thành công !");
    } catch (error) {
      console.error("Lỗi thêm sản phẩm:");
    }
  };
  return (
    <>
      <div className="bg-white p-5 w-1/5">
        <Link
          as={RouterLink}
          to={`/product/productdetails/${id}/${name}`}
          className="block"
        >
          <div className="relative w-full">
            <img src={image} alt="" className="w-full h-48 object-cover" />
            <div className="absolute bg-bg-sale bottom-0 h-9 left-0 bg-cover bg-center bg-no-repeat px-2 rounded-md">
              <p className="font-bold text-xs text-sale">TIẾT KIỆM</p>
              <p className="font-bold text-white text-sm">{discount}</p>
            </div>
          </div>
          <div className="flex justify-between flex-col ">
            <h6 className="text-sm font-semibold text-title my-3 line-clamp-2">
              {name}
            </h6>
            <p className="text-xs line-clamp-3 h-12 text-content break-words">
              {descriptionShort}
            </p>
            <p className="font-bold text-blue-600 mt-2">{price}</p>
          </div>
        </Link>
        <Button
          onClick={handleAddProductCart}
          className="w-full py-2 border-2 mt-3 rounded-md text-blue-700 font-bold"
        >
          Thêm vào giỏ
        </Button>
      </div>
    </>
  );
};

export default ProductCard;
