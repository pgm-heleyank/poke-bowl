import React, { useContext } from "react";
import { DataContext } from "../App";
import { Button, DishCard, FlavorElement } from "../components";

const DessertsPage = () => {
  const [{ plates }] = useContext(DataContext);
  return (
    <>
      <div className="main-layout__left-column">
        <ul className="bowl__container">
          <DishCard key={plates[2].id} data={plates[2]} plate dessert />

          <DishCard key={plates[3].id} data={plates[3]} plate dessert />
        </ul>
      </div>
      <div className="main-layout__right-column">
        <h3 className="main-layout__right-title">Flavors</h3>
        <FlavorElement />
      </div>
    </>
  );
};

export default DessertsPage;
