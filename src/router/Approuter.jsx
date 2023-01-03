import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import News from "../pages/news/News";

const Approuter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Approuter;
