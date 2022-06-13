import React, { useContext } from "react";
import { OrderContext } from "../../App";
import Counter from "../Counter/Counter";
import styles from "./CheckOutItems.module.css";

const CheckOutItems = ({ ticket }) => {
  const [order] = useContext(OrderContext);

  console.log(order);
  return (
    <ul className={styles.check_out_items}>
      {order?.map((or) => {
        const tPrices = [];
        or.items.map((item) => tPrices.push(item.price));
        const total = tPrices.reduce(
          (previousValue, currentValue) => previousValue + currentValue
        );
        console.log(or.type);
        return (
          <li key={or.id}>
            <ul
              className={`${styles.check_out_item} ${ticket && styles.ticket}`}
            >
              <li data-id={or.id} className={styles.check_out_item__counter}>
                <Counter
                  amount={or.items.length}
                  ticket={ticket}
                  type={or.type}
                />
              </li>
              {!ticket && (
                <li className={styles.check_out_item__img}>
                  <div>
                    <img src={or.items[0].svg.url} alt={or.items[0].name} />
                  </div>
                </li>
              )}
              <li className={styles.check_out_item__name}>
                {or.items[0].name}
              </li>
              <li className={styles.check_out_item__price}>
                €{total.toFixed(2)}
              </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default CheckOutItems;
