import React, { useContext } from "react";
import { DataContext } from "../App";
import { Button, DishCard, Drinks } from "../components";

const SidesPage = () => {
  const [{ sides }] = useContext(DataContext);
  return (
    <>
      <div className="main-layout__left-column">
        <ul className="bowl__container">
          {sides.map((side) => (
            <li key={side.id} className="bowl__item">
              <DishCard data={side} />
              <Button size="small" secondary>
                add to order
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className="main-layout__right-column">
        <h3 className="main-layout__right-title">Thirsty?</h3>
        <Drinks highlighted />
      </div>
    </>
  );
};

export default SidesPage;
