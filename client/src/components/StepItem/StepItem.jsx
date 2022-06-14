import React from "react";
import styles from "./StepItem.module.scss";

const StepItem = ({ items }) => {
  return items.map((item) => {
    return (
      <li key={item.id} className={styles.step}>
        <p className={styles.step__item_price}>+€{item.price.toFixed(1)}</p>
        <img src={item.svg.url} alt="rice" className={styles.step__item_img} />
        <p className={styles.step__item_name}>{item.name}</p>
      </li>
    );
  });
};

export default StepItem;
