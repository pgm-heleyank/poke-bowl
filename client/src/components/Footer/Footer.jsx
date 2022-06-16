import React, { useContext } from "react";
import styles from "./Footer.module.scss";
import { Button } from "../index.js";
import Order from "../Order/Order";
import { ROUTES } from "../../constants/routes";
import { OrderContext } from "../../App";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [order] = useContext(OrderContext);
  /* create prices array to calculate total price */
  const prices = [];
  order?.map((ord) => ord.items.map((item) => prices.push(item.price)));
  const totalPrice =
    order &&
    prices.length > 0 &&
    prices.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
  return (
    <div className={styles.footer_wrapper}>
      <AnimatePresence>
        {order && order?.length !== 0 && (
          <motion.div
            className={styles.footer}
            initial={{ opacity: 0, y: "100vh" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100vh" }}
            transition={{ ease: "easeInOut", duration: 0.35 }}
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Footer;
