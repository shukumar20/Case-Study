import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Product from "../Product/Product";
import SignIn from "../SignIn/SignIn";
import SignUpPage from "../SignUpPage/SignUpPage";

const Container = () => {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/product" element={<Product />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};

export default Container;
