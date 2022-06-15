import React from "react";
import styles from "./Flavor.module.scss";

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
  console.log(dessertOrder);
  return (
    <li key={dessert.id} data-id={dessert.id} className={styles.flavor_element}>
      <button onClick={(e) => handleClick(e)}>
        <img
          src={dessert.svg.url}
          alt={`${dessert.name} flavor mochi`}
          className={styles.flavor_element__img}
        />
        <span className={styles.flavor_element__flavor}>{dessert.name}</span>
      </button>
    </li>
  );
};

export default Flavor;
