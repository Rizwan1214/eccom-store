import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../shared/Header";
import Home from "../pages/Home";
import Collection from "../pages/Collection";
import Product from "../pages/Product";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";

const RoutesElement = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RoutesElement;
