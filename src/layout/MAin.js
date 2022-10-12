import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Home from "../components/Home/Home";
import Img from "../components/Img/Img";

const MAin = () => {
  return (
    <div>
      <Header></Header>
      <Img></Img>
      <Outlet></Outlet>
    </div>
  );
};

export default MAin;
