import React from "react";
import styles from "./Footer.module.css";
import { Button } from "../index.js";
import Order from "../Order/Order";
import { ROUTES } from "../../constants/routes";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <h2 className={styles.footer_title}>Your order</h2>
      <ul className={styles.footer_order__container}>
        <li>
          <Order />
        </li>
      </ul>
      <div className={styles.footer_price_container}>
        <p className={styles.footer_price}>$ price total</p>
        <Button link={ROUTES.CHECK_OUT} size="small">
          check out
        </Button>
      </div>
    </div>
  );
};

export default Footer;
