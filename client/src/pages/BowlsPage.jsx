import React, { useContext } from "react";
import { DataContext } from "../App";
import { DishCard, Drinks } from "../components";

const BowlsPage = () => {
  const [{ bowls }] = useContext(DataContext);

  return (
    <>
      <div className="main-layout__left-column">
        <ul className="bowl__container">
          {bowls?.map((bowl) => (
            <DishCard key={bowl.id} data={bowl} type="bowl" />
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

export default BowlsPage;
