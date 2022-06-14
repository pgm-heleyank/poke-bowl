import React, { useContext } from "react";
import { DataContext } from "../../App";
import styles from "./StepItem.module.scss";

const StepItem = ({ items, customOrder, setCustomOrder }) => {
  const [{ ingredients }] = useContext(DataContext);

  const addItem = (e) => {
    const itemId =
      e.target.parentNode.dataset.id ||
      e.target.parentNode.parentNode.dataset.id;
    const item = ingredients.filter((ingredient) => ingredient.id === itemId);
    let newItem = [{ label: item[0].label, items: [...item] }];
    const labelFilter = customOrder?.filter((o) => o.label === item[0].label);
    const filteredArr = customOrder?.filter((o) => o.label !== item[0].label);
    if (labelFilter.length > 0) {
      newItem = [
        {
          label: labelFilter[0].label,
          items: [...labelFilter[0].items, ...item],
        },
      ];
      setCustomOrder([...filteredArr, ...newItem]);
    }

    if (labelFilter.length === 0) {
      setCustomOrder([...customOrder, ...newItem]);
    }
  };
  return items.map((item) => {
    return (
      <li key={item.id} data-id={item.id}>
        <button onClick={(e) => addItem(e)} className={styles.step}>
          <p className={styles.step__item_price}>+€{item.price.toFixed(1)}</p>
          <img
            src={item.svg.url}
            alt="rice"
            className={styles.step__item_img}
          />
          <p className={styles.step__item_name}>{item.name}</p>
        </button>
      </li>
    );
  });
};

export default StepItem;
