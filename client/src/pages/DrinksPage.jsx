import React from "react";
import { Button, DessertElement, Drinks } from "../components";

const DrinksPage = () => {
  return (
    <>
      <div className="main-layout__left-column">
        <Drinks />
        <Button size="small" secondary>
          add to order
        </Button>
      </div>
      <div className="main-layout__right-column">
        <h3 className="main-layout__right-title">Dessert?</h3>
        <DessertElement />
      </div>
    </>
  );
};

export default DrinksPage;