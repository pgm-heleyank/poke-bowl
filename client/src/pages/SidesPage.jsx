import React, { useContext } from "react";
import { DataContext } from "../App";
import { DishCard, Drinks, PageTransitions } from "../components";

const SidesPage = () => {
  const [{ sides }] = useContext(DataContext);
  return (
    <>
      <PageTransitions>
        <ul className="bowl__container">
          {sides.map((side) => (
            <DishCard key={side.id} data={side} type="side" />
          ))}
        </ul>
      </PageTransitions>
      <div className="main-layout__right-column">
        <h3 className="main-layout__right-title">Thirsty?</h3>
        <Drinks highlighted />
      </div>
    </>
  );
};

export default SidesPage;
