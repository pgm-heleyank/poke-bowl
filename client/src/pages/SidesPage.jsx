import React, { useContext } from "react";
import { DataContext } from "../App";
import { DishCard, Drinks } from "../components";

const SidesPage = () => {
  const [{ sides }] = useContext(DataContext);
  return (
    <>
      <div className="main-layout__left-column">
        <ul className="bowl__container">
          {sides.map((side) => (
            <DishCard key={side.id} data={side} type="side" />
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
