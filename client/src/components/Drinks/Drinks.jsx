import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import styles from "./Drinks.module.css";

const Drinks = ({ highlighted }) => {
  const [{ drinks }] = useContext(DataContext);
  const [numb, setNumb] = useState([]);
  useEffect(() => {
    /* const nums = new Set();
    while(nums.size !== 8) {
      nums.add(Math.floor(Math.random() * 100) + 1);
    }
    */

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
        <li key={drink.id} className={styles.drinks__item}>
          <img
            src={drink.svg.url}
            alt={`a can of"${drink.name}`}
            className={styles.drinks__image}
          />
          <span className={styles.drinks__price}> €{drink.price}</span>
          <span className={styles.drinks__name}>{drink.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default Drinks;
