import React from "react";
import styles from "./Flavor.module.scss";

const Flavor = ({ dessert }) => {
  return (
    <li key={dessert.id} className={styles.flavor_element}>
      <img
        src={dessert.svg.url}
        alt={`${dessert.name} flavor mochi`}
        className={styles.flavor_element__img}
      />
      <span className={styles.flavor_element__flavor}>{dessert.name}</span>
    </li>
  );
};

export default Flavor;
