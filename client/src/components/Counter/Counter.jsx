import React, { useContext } from "react";
import styles from "./Counter.module.css";
import MinusSvg from "../../assets/img/minus.svg";
import PlusSvg from "../../assets/img/plus.svg";
import { DataContext, OrderContext } from "../../App";

const Counter = ({ ticket, value, setAmount }) => {
  const [order, setOrder] = useContext(OrderContext);
  const [{ drinks }] = useContext(DataContext);
  const handleAdd = (e) => {
    const itemBuy = drinks.find(
      (drink) =>
        drink.id === e.target.parentNode.parentNode.parentNode.dataset.id
    );
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
    setAmount(value + 1);
  };
  const handleRemove = (e) => {
    const minus = order.find(
      (i) => i.id === e.target.parentNode.parentNode.parentNode.dataset.id
    );
    const change = order.filter(
      (i) => i.id !== e.target.parentNode.parentNode.parentNode.dataset.id
    );
    minus.items.pop();
    let newItems = null;
    if (minus.items.length === 0) {
      newItems = null;
    } else {
      newItems = minus;
    }
    !newItems ? setOrder([...change]) : setOrder([...change, newItems]);
    setAmount(value - 1);
  };
  return (
    <div className={styles.counter}>
      {!ticket && (
        <button onClick={(e) => handleRemove(e)}>
          <img src={MinusSvg} alt="remove one dish" />
        </button>
      )}
      <p className={styles.counter__number}>{value}</p>
      {!ticket && (
        <button onClick={(e) => handleAdd(e)}>
          <img src={PlusSvg} alt="add one dish" />
        </button>
      )}
    </div>
  );
};

export default Counter;
