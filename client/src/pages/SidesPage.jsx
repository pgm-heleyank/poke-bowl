import React, { useContext } from "react";
import { DataContext } from "../App";
import { Drinks } from "../components";

const SidesPage = () => {
  const [{ sides }] = useContext(DataContext);
  console.log(sides);
  return (
    <>
      <div className="main-layout__left-column">left</div>
      <div className="main-layout__right-column">
        <h3 className="main-layout__right-title">Thirsty?</h3>
        <Drinks highlighted />
      </div>
    </>
  );
};

export default SidesPage;
