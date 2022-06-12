import React, { useContext } from "react";
import { DessertsContext } from "../../App";
import Mochi from "../../assets/img/mochi.svg";
import styles from "./FlavorElement.module.css";

const FlavorElement = () => {
  const [desserts] = "";
  return (
    <ul className={styles.flavor_element__container}>
      {desserts?.map((dessert) => (
        <li key={dessert.id} className={styles.flavor_element}>
          <img
            src={dessert.svg.url}
            alt={`${dessert.name} flavor mochi`}
            className={styles.flavor_element__img}
          />
          <span className={styles.flavor_element__flavor}>{dessert.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default FlavorElement;
