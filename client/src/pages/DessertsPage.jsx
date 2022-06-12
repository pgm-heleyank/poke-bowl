import React from "react";
import { FlavorElement } from "../components";

const DessertsPage = () => {
  return (
    <>
      <div className="main-layout__left-column">left</div>
      <div className="main-layout__right-column">
        <h3 className="main-layout__right-title">Flavors</h3>
        <FlavorElement />
      </div>
    </>
  );
};

export default DessertsPage;
