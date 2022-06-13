import React, { useContext } from "react";
import { DataContext } from "../../App";
import Flavor from "../Flavor/Flavor";
import styles from "./FlavorElement.module.scss";

const FlavorElement = () => {
  const [{ desserts }] = useContext(DataContext);
  return (
    <ul className={styles.flavor_element__container}>
      {desserts.map((dessert) => (
        <Flavor key={dessert.id} dessert={dessert} />
      ))}
    </ul>
  );
};

export default FlavorElement;
