import React, { useContext, useEffect, useState } from "react";
import { DataContext, OrderContext } from "../../App";
import editSvg from "../../assets/img/edit.svg";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";
import Dish from "../Dish/Dish";
import styles from "./DishCard.module.scss";

const DishCard = ({ data, plate, dessert, make, type }) => {
  const [{ bowls, sides, plates }] = useContext(DataContext);
  const [bowlSize, setBowlSize] = useState(plates[0]);
  const [order, setOrder] = useContext(OrderContext);
  let [amount, setAmount] = useState(0);

  const specificItem = order?.find((order) => order?.id === data.id);
  const newAmount = specificItem?.items.length;
  useEffect(() => {
    setAmount(newAmount);
  }, [newAmount]);

  const handleClick = (e) => {
    let itemBuy = "";
    if (type === "bowl") {
      itemBuy = bowls.find(
        (bowl) => bowl.id === e.target.parentNode.dataset.id
      );
    } else if (type === "side") {
      itemBuy = sides.find(
        (side) => side.id === e.target.parentNode.dataset.id
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

  const handleSize = (e) => {
    if (e.target.value === "small") {
      setBowlSize(plates[0]);
    } else {
      setBowlSize(plates[1]);
    }
  };
  return (
    <li key={data?.id} className="bowl__item" data-id={data?.id} value={amount}>
      {amount ? <Counter amount={amount} type={type} /> : undefined}
      <div className={styles.dish_card}>
        <div className={styles.dish_card__header}>
          <p className={styles.dish_card__price}>€{data?.price?.toFixed(2)}</p>
          {plate ? (
            <img src={data.svg.url} alt={data.name} />
          ) : (
            <Dish bowlSize={bowlSize} />
          )}
          <button>
            <img src={editSvg} alt="edit dish" />
          </button>
        </div>
        {make ? (
          <input
            placeholder="name"
            className={styles.dish_card__input}
            type="text"
          />
        ) : (
          <>
            <h3 className={styles.dish_card__title}>
              {dessert ? `${data.inPriceItems}x` : ""} {data?.name}
            </h3>
            <p>
              Juicy grilled Farm chicken with healthy avocado, corn, jalapeños,
              feta cheese & sweet potato. Dressed with homemade chili mayo and
              topped off with chili flakes, spring onions & nachos
            </p>
          </>
        )}

        {dessert ? (
          ""
        ) : (
          <div className={styles.dish_card__btns}>
            <Button
              handleClick={(e) => handleSize(e)}
              size="small"
              selected={
                bowlSize.id === "cl3sjrvzhe4xq0elcnnjhracv" ? true : false
              }
              value="small"
            >
              small bowl
            </Button>
            <Button
              handleClick={(e) => handleSize(e)}
              size="small"
              selected={
                bowlSize.id !== "cl3sjrvzhe4xq0elcnnjhracv" ? true : false
              }
              value="large"
            >
              large bowl
            </Button>
          </div>
        )}
      </div>
      <Button handleClick={handleClick} size="small" secondary>
        add to order
      </Button>
    </li>
  );
};

export default DishCard;
