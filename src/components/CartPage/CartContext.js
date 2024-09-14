// CartContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [dataQuantity, setDataQuantity] = useState({});
  const [userId, setUserId] = useState("");
  const [username, setUserName] = useState("");
  let length = 0;
  if (dataQuantity.items) {
    length = dataQuantity.items.length;
  }

  useEffect(() => {
    const token = localStorage.getItem("LL-token-react");
    if (token) {
      const decoded = jwtDecode(token);
      setUserId(decoded.id);
      setUserName(decoded.username);
    }
  }, []);

  useEffect(() => {
    if (userId) {
      const fetchProducts = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/auth/get-cart/${userId}`
          );
          setDataQuantity(response.data);
          setProducts(response.data.items);
        } catch (error) {
          console.error("Lỗi hiển thị sản phẩm", error);
        }
      };
      fetchProducts();
    }
  }, [userId]);

  return (
    <CartContext.Provider
      value={{
        products,
        dataQuantity,
        setProducts,
        setDataQuantity,
        setUserId,
        userId,
        username,
        length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
