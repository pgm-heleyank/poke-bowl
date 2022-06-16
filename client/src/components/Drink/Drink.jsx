import React, { useContext, useEffect, useState } from "react";
import { DataContext, OrderContext } from "../../App";
import Counter from "../Counter/Counter";
import styles from "./Drink.module.scss";
import { motion } from "framer-motion";

const Drink = ({ drink }) => {
  const [{ drinks }] = useContext(DataContext);
  const [order, setOrder] = useContext(OrderContext);
  let [amount, setAmount] = useState(0);

  const handleClick = (e) => {
    const itemBuy = drinks.find((drink) => drink.id === e.target.dataset.id);
    const dubble = order?.find((i) => i.id === itemBuy.id);
    const up = order?.filter((i) => i.id !== itemBuy.id);
    let dub = null;
    /* create correct format*/
    if (dubble) {
      dub = [...dubble.items, itemBuy];
    }
    const newItems = !order
      ? [{ id: itemBuy.id, items: [itemBuy], type: "drinks" }]
      : !dubble
      ? [...order, { id: itemBuy.id, items: [itemBuy], type: "drinks" }]
      : [...up, { id: itemBuy.id, items: [...dub], type: "drinks" }];
    setOrder(newItems);
  };

  const specificItem = order?.find((order) => order.id === drink.id);
  const newAmount = specificItem?.items.length;
  useEffect(() => {
    setAmount(newAmount);
  }, [newAmount]);

  return (
    <motion.li
      whileTap={{ scale: 0.9 }}
      key={drink.id}
      value={amount}
      className={styles.drink}
      data-id={drink.id}
    >
      {amount ? <Counter amount={amount} type="drinks" /> : undefined}
      <button
        onClick={(e) => handleClick(e)}
        data-id={drink.id}
        className={styles.drink__item}
        value={amount}
      >
        <img
          data-id={drink.id}
          src={drink.svg.url}
          alt={`a can of"${drink.name}`}
          className={styles.drink__image}
        />
        <span data-id={drink.id} className={styles.drink__price}>
          €{drink.price.toFixed(2)}
        </span>
        <span data-id={drink.id} className={styles.drink__name}>
          {drink.name}
        </span>
      </button>
    </motion.li>
  );
};

export default Drink;
