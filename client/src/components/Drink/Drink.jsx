import React, { useContext, useState } from "react";
import { DataContext, OrderContext } from "../../App";
import Counter from "../Counter/Counter";
import styles from "./Drink.module.css";

const Drink = ({ drink }) => {
  const [{ drinks }] = useContext(DataContext);
  const [order, setOrder] = useContext(OrderContext);
  let [amount, setAmount] = useState(0);
  const handleClick = (e) => {
    const oldVal = e.target.value || e.target.parentNode.value;
    let oldValNumber = parseInt(oldVal, 10);
    const itemBuy = drinks.find((drink) => drink.id === e.target.dataset.id);
    const dubble = order?.find((i) => i.id === itemBuy.id);
    const up = order?.filter((i) => i.id !== itemBuy.id);
    let dub = null;
    if (dubble) {
      dub = [...dubble.items, itemBuy];
    }
    const newItems = !order
      ? [{ id: itemBuy.id, items: [itemBuy] }]
      : !dubble
      ? [...order, { id: itemBuy.id, items: [itemBuy] }]
      : [...up, { id: itemBuy.id, items: [...dub] }];
    setOrder(newItems);
    setAmount(oldValNumber + 1);
  };

  return (
    <li
      key={drink.id}
      value={amount}
      className={styles.drinks__wrapper}
      data-id={drink.id}
    >
      {amount ? <Counter value={amount} setAmount={setAmount} /> : undefined}
      <button
        onClick={(e) => handleClick(e)}
        data-id={drink.id}
        className={styles.drinks__item}
        value={amount}
      >
        <img
          data-id={drink.id}
          src={drink.svg.url}
          alt={`a can of"${drink.name}`}
          className={styles.drinks__image}
        />
        <span data-id={drink.id} className={styles.drinks__price}>
          €{drink.price}
        </span>
        <span data-id={drink.id} className={styles.drinks__name}>
          {drink.name}
        </span>
      </button>
    </li>
  );
};

export default Drink;
