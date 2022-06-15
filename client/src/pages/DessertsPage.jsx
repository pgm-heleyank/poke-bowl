import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";
import { DishCard, FlavorElement, PageTransitions } from "../components";
import uuid from "react-uuid";
import { motion, AnimatePresence } from "framer-motion";
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
      <PageTransitions>
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
      </PageTransitions>
      <AnimatePresence>
        {boxSize && boxSize?.inPriceItems !== dessertOrder.length && (
          <motion.div
            className="main-layout__right-column"
            initial={{ opacity: 0, x: "100vw" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100vw" }}
            transition={{ type: "spring", bounce: 0.3 }}
          >
            <h3 className="main-layout__right-title">Flavors</h3>
            <FlavorElement
              dessertOrder={dessertOrder}
              setDessertOrder={setDessertOrder}
              boxSize={boxSize}
              setBoxSize={setBoxSize}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DessertsPage;
