import React, { useState } from "react";
import { DishCard, Steps } from "../components";

const MakeYourOwnPage = () => {
  const [customOrder, setCustomOrder] = useState([]);
  console.log("test", customOrder);
  return (
    <>
      <div className="main-layout__left-column">
        <ul className="bowl__container">
          <DishCard make data={[]} />
        </ul>
      </div>
      <div className="main-layout__right-column">
        <Steps customOrder={customOrder} setCustomOrder={setCustomOrder} />
      </div>
    </>
  );
};

export default MakeYourOwnPage;
