import React, { useEffect, useState } from "react";
import { DishCard, PageTransitions, Steps } from "../components";
import uuid from "react-uuid";

const MakeYourOwnPage = () => {
  const [customOrder, setCustomOrder] = useState([]);
  const [customData, setCustomData] = useState([]);
  const [extraPrice, setExtraPrice] = useState(0);

  useEffect(() => {
    /* create correct data format */
    setCustomData({
      id: uuid(),
      name: "Your custom bowl",
      price: 9.9 + extraPrice,
      svg: {
        id: "cl3sefpfsdgen0bmiuc80k9fy",
        url: "https://media.graphassets.com/FsgBVq4TZGKvzeHE4Vg0",
      },
      ingredients: [...customOrder],
    });
  }, [extraPrice, customOrder]);
  return (
    <>
      <PageTransitions>
        <div className="main-layout__left-column main-layout__left-column--flex-end ">
          <ul className="bowl__container">
            <DishCard
              make
              data={customData}
              setCustomOrder={setCustomOrder}
              customOrder={customOrder}
              extraPrice={extraPrice}
              setExtraPrice={setExtraPrice}
            />
          </ul>
        </div>
      </PageTransitions>
      <div className="main-layout__right-column">
        <Steps
          customOrder={customOrder}
          setCustomOrder={setCustomOrder}
          extraPrice={extraPrice}
          setExtraPrice={setExtraPrice}
        />
      </div>
    </>
  );
};

export default MakeYourOwnPage;
