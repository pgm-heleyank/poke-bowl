import React, { useContext } from "react";
import styles from "./Footer.module.scss";
import { Button } from "../index.js";
import Order from "../Order/Order";
import { ROUTES } from "../../constants/routes";
import { OrderContext } from "../../App";

const Footer = () => {
  const [order] = useContext(OrderContext);
  const prices = [];
  order?.map((ord) => ord.items.map((item) => prices.push(item.price)));
  const totalPrice =
    order &&
    prices.length > 0 &&
    prices.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
  return order && order?.length !== 0 ? (
    <div className={styles.footer}>
      <h2 className={styles.footer__title}>Your order</h2>
      <ul className={styles.footer__order_container}>
        {order.map((item) => {
          return (
            <li key={item.id}>
              <Order item={item.items[0]} amount={item.items.length} />
            </li>
          );
        })}
      </ul>
      <div className={styles.footer__price_container}>
        <p className={styles.footer__price}>€{totalPrice.toFixed(2)}</p>
        <Button selected link={ROUTES.CHECK_OUT} size="small">
          check out
        </Button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Footer;
