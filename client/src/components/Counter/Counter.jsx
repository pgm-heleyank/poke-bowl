import React, { useContext } from "react";
import styles from "./Counter.module.css";
import MinusSvg from "../../assets/img/minus.svg";
import PlusSvg from "../../assets/img/plus.svg";
import { DataContext, OrderContext } from "../../App";

const Counter = ({ ticket, amount, type }) => {
  const [order, setOrder] = useContext(OrderContext);
  const [{ drinks, bowls, sides }] = useContext(DataContext);
  const handleAdd = (e) => {
    let itemBuy = "";
    if (type === "drinks") {
      itemBuy = drinks.find(
        (drink) =>
          drink.id === e.target.parentNode.parentNode.parentNode.dataset.id
      );
    } else if (type === "bowl") {
      itemBuy = bowls.find(
        (bowl) =>
          bowl.id === e.target.parentNode.parentNode.parentNode.dataset.id
      );
    } else if (type === "side") {
      itemBuy = sides.find(
        (side) =>
          side.id === e.target.parentNode.parentNode.parentNode.dataset.id
      );
    }

    const dubble = order?.find((i) => i.id === itemBuy.id);
    const up = order?.filter((i) => i.id !== itemBuy.id);
    let dub = null;
    if (dubble) {
      dub = [...dubble.items, itemBuy];
    }
    const newItems = !order
      ? [{ id: itemBuy.id, items: [itemBuy], type: `${type}` }]
      : !dubble
      ? [...order, { id: itemBuy.id, items: [itemBuy], type: `${type}` }]
      : [...up, { id: itemBuy.id, items: [...dub], type: `${type}` }];
    setOrder(newItems);
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
  };
  return (
    <div className={styles.counter}>
      {!ticket && (
        <button onClick={(e) => handleRemove(e)}>
          <img src={MinusSvg} alt="remove one dish" />
        </button>
      )}
      <p className={styles.counter__number}>{amount}</p>
      {!ticket && (
        <button onClick={(e) => handleAdd(e)}>
          <img src={PlusSvg} alt="add one dish" />
        </button>
      )}
    </div>
  );
};

export default Counter;
