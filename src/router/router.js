import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./../components/main/login.js";
import Register from "./../components/main/register.js";
import GamingMouse from "./../components/GamingMouse/GamingMouse.js";
import Home from "./../home.js";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/GamingMouse" element={<GamingMouse />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
