import React from "react";
import styles from "./Footer.module.css";
import { Button } from "../index.js";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <h2 className={styles.footer_title}>Your order</h2>
      <div>order</div>
      <div>price total</div>
      <Button size="small">check out</Button>
    </div>
  );
};

export default Footer;
