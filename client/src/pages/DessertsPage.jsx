import React, { useContext } from "react";
import { DataContext } from "../App";
import { Button, DishCard, FlavorElement } from "../components";

const DessertsPage = () => {
  const [{ plates }] = useContext(DataContext);
  return (
    <>
      <div className="main-layout__left-column">
        <ul className="bowl__container">
          <li key={plates[2].id} className="bowl__item">
            <DishCard data={plates[2]} plate dessert />
            <Button size="small" secondary>
              add to cart
            </Button>
          </li>
          <li key={plates[3].id} className="bowl__item">
            <DishCard data={plates[3]} plate dessert />
            <Button size="small" secondary>
              add to order
            </Button>
          </li>
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
