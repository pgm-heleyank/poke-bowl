import React from "react";
import { Button, DishCard, Steps } from "../components";

const MakeYourOwnPage = () => {
  return (
    <>
      <div className="main-layout__left-column">
        <ul className="bowl__container">
          <DishCard make />
        </ul>
      </div>
      <div className="main-layout__right-column">
        <Steps />
      </div>
    </>
  );
};

export default MakeYourOwnPage;
