import React from "react";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div className="primary-background">
      <Outlet />
    </div>
  );
};

export default BaseLayout;
