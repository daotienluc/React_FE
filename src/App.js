import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import "./styles/globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./home.js";
import LoginPage from "./components/main/login.js";
import RegisterPage from "./components/main/register.js";

import AdminDashboard from "./components/Admin/AdminDashboard.js";
import ProductManagement from "./components/Admin/ProductManagement.js";
import AddProduct from "./components/Admin/AddProduct.js";
import Login from "./components/Admin/AdminLogin.js";
import ProductDetails from "./components/ProductDetails/ProductDetails.js";

import CartPage from "./components/CartPage/CartPage.js";

function App() {
  return (
    <NextUIProvider>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cartpage" element={<CartPage />} />

          <Route
            path="/product/productdetails/:id"
            element={<ProductDetails />}
          />

          {/* Routes cho trang quản trị */}
          <Route path="/admin/Login" element={<Login />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/products" element={<ProductManagement />} />
          <Route path="/admin/products/add" element={<AddProduct />} />
        </Routes>
      </Router>
    </NextUIProvider>
  );
}

export default App;
