import React from "react";
import { Button, DishCard, Steps } from "../components";

const MakeYourOwnPage = () => {
  return (
    <>
      <div className="main-layout__left-column">
        <ul className="bowl__container">
          <p className="bowl__item">
            <DishCard make />
            <Button size="small" secondary>
              add to order
            </Button>
          </p>
        </ul>
      </div>
      <div className="main-layout__right-column">
        <Steps />
      </div>
    </>
  );
};

export default MakeYourOwnPage;
