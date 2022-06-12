import React from "react";
import styles from "./StepItem.module.css";

const StepItem = ({ items }) => {
  return items.map((item) => {
    return (
      <li key={item.id} className={styles.step__item}>
        <p className={styles.step__item_price}>+€{item.price}</p>
        <img src={item.svg.url} alt="rice" className={styles.step__item_img} />
        <p className={styles.step__item_name}>{item.name}</p>
      </li>
    );
  });
};

export default StepItem;
