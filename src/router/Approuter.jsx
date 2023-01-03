import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/nav/Navbar";

const Approuter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default Approuter;
