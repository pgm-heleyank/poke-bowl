import React from "react";
import Counter from "../Counter/Counter";
import styles from "./CheckOutItems.module.css";

const CheckOutItems = ({ ticket }) => {
  return (
    <ul className={styles.check_out_items}>
      <li>
        <ul className={`${styles.check_out_item} ${ticket && styles.ticket}`}>
          <li className={styles.check_out_item__counter}>
            <Counter ticket={ticket} />
          </li>
          {!ticket && (
            <li className={styles.check_out_item__img}>
              <div>dish</div>
            </li>
          )}
          <li className={styles.check_out_item__name}>Spicy Chicken</li>
          <li className={styles.check_out_item__price}>price</li>
        </ul>
      </li>
      <li>
        <ul className={`${styles.check_out_item} ${ticket && styles.ticket}`}>
          <li className={styles.check_out_item__counter}>
            <Counter ticket={ticket} />
          </li>
          {!ticket && (
            <li className={styles.check_out_item__img}>
              <div>dish</div>
            </li>
          )}
          <li className={styles.check_out_item__name}>Spicy Chicken</li>
          <li className={styles.check_out_item__price}>price</li>
        </ul>
      </li>
      <li>
        <ul className={`${styles.check_out_item} ${ticket && styles.ticket}`}>
          <li className={styles.check_out_item__counter}>
            <Counter ticket={ticket} />
          </li>
          {!ticket && (
            <li className={styles.check_out_item__img}>
              <div>dish</div>
            </li>
          )}
          <li className={styles.check_out_item__name}>Spicy Chicken</li>
          <li className={styles.check_out_item__price}>price</li>
        </ul>
      </li>
    </ul>
  );
};

export default CheckOutItems;
