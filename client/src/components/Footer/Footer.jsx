import React, { useContext } from "react";
import styles from "./Footer.module.css";
import { Button } from "../index.js";
import Order from "../Order/Order";
import { ROUTES } from "../../constants/routes";
import { OrderContext } from "../../App";

const Footer = () => {
  const [order] = useContext(OrderContext);
  console.log(order);
  return order && order?.length !== 0 ? (
    <div className={styles.footer_container}>
      <h2 className={styles.footer_title}>Your order</h2>
      <ul className={styles.footer_order__container}>
        <li>
          <Order />
        </li>
      </ul>
      <div className={styles.footer_price_container}>
        <p className={styles.footer_price}>$ price total</p>
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
