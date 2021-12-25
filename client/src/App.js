import React from "react";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Product from "./pages/Product";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
const App = () => {
  const user = false;
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:category" element={<ProductList />} />
        <Route path="product/*" element={<Product />} />
        <Route path="cart/*" element={<Cart />} />
        <Route
          path="login/*"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route path="register/*" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
