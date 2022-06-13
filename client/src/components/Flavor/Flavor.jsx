import React from "react";
import { useDrag } from "react-dnd";
import styles from "./Flavor.module.scss";

const Flavor = ({ dessert }) => {
  const [, drag] = useDrag(() => ({
    type: "moochi",
    item: [dessert],
  }));
  return (
    <li ref={drag} key={dessert.id} className={styles.flavor_element}>
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
