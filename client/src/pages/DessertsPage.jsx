import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";
import { DishCard, FlavorElement } from "../components";
import uuid from "react-uuid";
import Mochi2 from "../assets/img/mochi2.svg";
import Mochi4 from "../assets/img/mochi4.svg";

const DessertsPage = () => {
  const [{ plates }] = useContext(DataContext);
  const [dessertOrder, setDessertOrder] = useState([]);
  const [customData, setCustomData] = useState([]);
  const [boxSize, setBoxSize] = useState(null);
  useEffect(() => {
    setCustomData({
      id: uuid(),
      name: "Your dessert",
      price: boxSize?.price,
      svg: {
        id: "cl3sefpfsdgen0bmiuc80k9fy",
        url: boxSize?.name !== "big box" ? `${Mochi2}` : `${Mochi4}`,
      },
      ingredients: [...dessertOrder],
    });
  }, [boxSize, dessertOrder]);
  return (
    <>
      <div className="main-layout__left-column">
        <ul className="bowl__container">
          <DishCard
            key={plates[2].id}
            data={customData}
            plate
            dessert
            boxSize={boxSize}
            setBoxSize={setBoxSize}
            dessertOrder={dessertOrder}
            setDessertOrder={setDessertOrder}
          />
        </ul>
      </div>
      <div className="main-layout__right-column">
        {console.log("this", boxSize, dessertOrder.length)}
        {boxSize && boxSize?.inPriceItems !== dessertOrder.length && (
          <>
            <h3 className="main-layout__right-title">Flavors</h3>
            <FlavorElement
              dessertOrder={dessertOrder}
              setDessertOrder={setDessertOrder}
              boxSize={boxSize}
              setBoxSize={setBoxSize}
            />
          </>
        )}
      </div>
    </>
  );
};

export default DessertsPage;
