import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";

import Img from "../components/Img/Img";

const MAin = () => {
  return (
    <div>
      <Header></Header>
      <Img></Img>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MAin;
