import React, { useContext } from "react";
import styles from "./Counter.module.scss";
import MinusSvg from "../../assets/img/minus.svg";
import PlusSvg from "../../assets/img/plus.svg";
import { DataContext, OrderContext } from "../../App";
import { motion } from "framer-motion";

const Counter = ({ ticket, amount, type }) => {
  const [order, setOrder] = useContext(OrderContext);
  const [{ drinks }] = useContext(DataContext);

  /* handle function when adding item*/
  const handleAdd = (e) => {
    let itemBuy = "";
    if (type === "drinks") {
      itemBuy = drinks.find(
        (drink) =>
          drink.id === e.target.parentNode.parentNode.parentNode.dataset.id
      );
    }
    /* find dubble items to correctly add to data*/
    const dubble = order?.find((i) => i.id === itemBuy.id);
    const up = order?.filter((i) => i.id !== itemBuy.id);
    let dub = null;
    if (dubble) {
      dub = [...dubble.items, itemBuy];
    }
    /* create new order*/
    const newItems = !order
      ? [{ id: itemBuy.id, items: [itemBuy], type: `${type}` }]
      : !dubble
      ? [...order, { id: itemBuy.id, items: [itemBuy], type: `${type}` }]
      : [...up, { id: itemBuy.id, items: [...dub], type: `${type}` }];
    setOrder(newItems);
  };
  /* handle function when removing item*/
  const handleRemove = (e) => {
    const minus = order.find(
      (i) => i.id === e.target.parentNode.parentNode.parentNode.dataset.id
    );
    const change = order.filter(
      (i) => i.id !== e.target.parentNode.parentNode.parentNode.dataset.id
    );
    minus.items.pop();
    let newItems = null;
    /* set data in correct format*/
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
        <motion.button
          onClick={(e) => handleRemove(e)}
          whileTap={{ scale: 0.9 }}
        >
          <img src={MinusSvg} alt="remove one dish" />
        </motion.button>
      )}
      <p className={styles.counter__number}>{amount}</p>
      {!ticket && type === "drinks" && (
        <motion.button onClick={(e) => handleAdd(e)} whileTap={{ scale: 0.9 }}>
          <img src={PlusSvg} alt="add one dish" />
        </motion.button>
      )}
    </div>
  );
};

export default Counter;
