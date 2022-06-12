import React from "react";
import styles from "./Order.module.css";
import deleteSvg from "../../assets/img/delete.svg";

const Order = () => {
  return (
    <div className={styles.order__container}>
      <button className={styles.order__delete_btn}>
        <img src={deleteSvg} alt="delete menu item" />
      </button>
      <div className={styles.order__dish_container}>dish</div>
      <dl className={styles.order__dish_details}>
        <dt className={styles.order__dish_name}>Spicy Chicken</dt>
        <dd className={styles.order__dish_price}>$12</dd>
      </dl>
    </div>
  );
};

export default Order;
