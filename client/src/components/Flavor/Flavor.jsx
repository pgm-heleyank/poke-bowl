import React from "react";
import styles from "./Flavor.module.scss";
import { motion } from "framer-motion";

const Flavor = ({
  dessert,
  dessertOrder,
  setDessertOrder,
  boxSize,
  setBoxSize,
}) => {
  const handleClick = (e) => {
    setDessertOrder([...dessertOrder, dessert]);
  };

  return (
    <motion.li
      whileTap={{ scale: 0.9 }}
      key={dessert.id}
      data-id={dessert.id}
      className={styles.flavor_element}
    >
      <button onClick={(e) => handleClick(e)}>
        <img
          src={dessert.svg.url}
          alt={`${dessert.name} flavor mochi`}
          className={styles.flavor_element__img}
        />
        <span className={styles.flavor_element__flavor}>{dessert.name}</span>
      </button>
    </motion.li>
  );
};

export default Flavor;
