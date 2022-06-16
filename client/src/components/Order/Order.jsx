import React, { useContext } from "react";
import styles from "./Order.module.scss";
import deleteSvg from "../../assets/img/delete.svg";
import { OrderContext } from "../../App";
import { motion } from "framer-motion";

const Order = ({ item, amount }) => {
  const [order, setOrder] = useContext(OrderContext);
  const handleDelete = () => {
    const del = order.filter((order) => order.id !== item.id);
    setOrder(del);
  };
  return (
    <div className={styles.order}>
      <motion.button
        whileTap={{ scale: 0.9 }}
        className={styles.order__delete_btn}
        onClick={() => handleDelete()}
      >
        <img src={deleteSvg} alt="delete menu item" />
      </motion.button>
      <div className={styles.order__dish_container}>
        <img src={item.svg.url} alt={item.name} />
      </div>
      <dl className={styles.order_details}>
        <dt className={styles.order_details__name}>
          <span className={styles.order_details__amount}>{amount}x</span>{" "}
          {item.name}
          {item.bowlSize && (
            <span className={styles.order_details__bowl_size}>
              {" "}
              ({item.bowlSize?.name})
            </span>
          )}
        </dt>
        <dd className={styles.order_details__price}>
          €{(amount * item.price).toFixed(2)}
        </dd>
      </dl>
    </div>
  );
};

export default Order;
