import React from "react";
import { DessertElement, Drinks, PageTransitions } from "../components";

const DrinksPage = () => {
  return (
    <>
      <PageTransitions>
        <Drinks />
      </PageTransitions>
      <div className="main-layout__right-column">
        <h3 className="main-layout__right-title">Dessert?</h3>
        <DessertElement />
      </div>
    </>
  );
};

export default DrinksPage;
