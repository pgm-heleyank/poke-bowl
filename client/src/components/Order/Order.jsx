import React, { useContext } from "react";
import styles from "./Order.module.css";
import deleteSvg from "../../assets/img/delete.svg";
import { OrderContext } from "../../App";

const Order = ({ item, amount }) => {
  const [order, setOrder] = useContext(OrderContext);
  const handleDelete = () => {
    const del = order.filter((order) => order.id !== item.id);
    setOrder(del);
  };
  return (
    <div className={styles.order__container}>
      <button
        className={styles.order__delete_btn}
        onClick={() => handleDelete()}
      >
        <img src={deleteSvg} alt="delete menu item" />
      </button>
      <div className={styles.order__dish_container}>
        <img src={item.svg.url} alt={item.name} />
      </div>
      <dl className={styles.order__dish_details}>
        <dt className={styles.order__dish_name}>
          <span className={styles.order__dish_amount}>{amount}x</span>{" "}
          {item.name}
        </dt>
        <dd className={styles.order__dish_price}>
          €{(amount * item.price).toFixed(2)}
        </dd>
      </dl>
    </div>
  );
};

export default Order;
