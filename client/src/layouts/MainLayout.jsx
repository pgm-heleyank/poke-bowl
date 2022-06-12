import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="main-layout__main-container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
