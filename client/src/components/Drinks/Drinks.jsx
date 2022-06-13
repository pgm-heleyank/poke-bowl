import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import Drink from "../Drink/Drink";
import styles from "./Drinks.module.scss";

const Drinks = ({ highlighted }) => {
  const [{ drinks }] = useContext(DataContext);
  const [numb, setNumb] = useState([]);

  useEffect(() => {
    const randomNumbers = new Set();
    while (randomNumbers.size !== 3) {
      randomNumbers.add(Math.floor(Math.random() * drinks.length));
    }
    setNumb([...randomNumbers]);
  }, [drinks]);

  const drinksEl = numb.map((item) => drinks[item]);
  const mapElement = highlighted ? drinksEl : drinks;

  return (
    <ul className={styles.drinks__items}>
      {mapElement?.map((drink) => (
        <Drink key={drink.id} drink={drink} />
      ))}
    </ul>
  );
};

export default Drinks;
