import React, { useContext, useEffect, useState } from "react";
import { DataContext, OrderContext } from "../../App";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";
import Dish from "../Dish/Dish";
import styles from "./DishCard.module.scss";
import Mochi2 from "../../assets/img/mochi2.svg";
import Mochi4 from "../../assets/img/mochi4.svg";

const DishCard = ({
  data,
  plate,
  dessert,
  make,
  type,
  setCustomOrder,
  customOrder,
  extraPrice,
  setExtraPrice,
  boxSize,
  setBoxSize,
  dessertOrder,
  setDessertOrder,
}) => {
  const [{ bowls, sides, plates }] = useContext(DataContext);
  const [bowlSize, setBowlSize] = useState(plates[0]);
  const [order, setOrder] = useContext(OrderContext);
  let [amount, setAmount] = useState(0);

  /* animation controls*/
  const [animateDishItems, setAnimateDishItems] = useState({
    y: 0,
    scale: 1,
    opacity: 1,
  });
  const [animateDishImage, setAnimateDishImage] = useState({ scale: 1 });

  /* extract product amount */
  const specificItem = order?.find((order) => order?.id === data.id);
  const newAmount = specificItem?.items.length;
  useEffect(() => {
    setAmount(newAmount);
  }, [newAmount]);

  /* handle click of dish card*/
  const handleClick = (e) => {
    /* check type*/
    let itemBuy = "";
    if (type === "bowl") {
      itemBuy = bowls.find(
        (bowl) => bowl.id === e.target.parentNode.dataset.id
      );
    } else if (type === "side") {
      itemBuy = sides.find(
        (side) => side.id === e.target.parentNode.dataset.id
      );
    } else if (make || dessert) {
      itemBuy = data;
    }
    /* change to correct data format*/
    let changedId = {};
    if (!dessert) {
      changedId = {
        ...itemBuy,
        id: itemBuy.id + bowlSize.id,
        price: itemBuy.price + bowlSize.price,
      };
    } else {
      changedId = {
        ...itemBuy,
        id: itemBuy.id + bowlSize.id,
        price: bowlSize.price,
      };
    }

    const addBowlSize = { ...changedId, bowlSize: bowlSize };

    const dubble = order?.find((i) => i.id === addBowlSize.id);
    const up = order?.filter((i) => i.id !== addBowlSize.id);
    let dub = null;
    if (dubble) {
      dub = [...dubble.items, addBowlSize];
    }
    const newItems = !order
      ? [{ id: addBowlSize.id, items: [addBowlSize], type: `${type}` }]
      : !dubble
      ? [
          ...order,
          { id: addBowlSize.id, items: [addBowlSize], type: `${type}` },
        ]
      : [...up, { id: addBowlSize.id, items: [...dub], type: `${type}` }];
    /* set order*/
    setOrder(newItems);
    /*wait with resetting data after animation is done*/
    setTimeout(() => {
      setCustomOrder && setCustomOrder([]);
      setAnimateDishItems({
        y: 0,
        scale: 1,
        opacity: 1,
      });
      setAnimateDishImage({ scale: 1 });
    }, 1000);
    /*reset en set data*/
    extraPrice && setExtraPrice(0);
    setDessertOrder && setDessertOrder([]);
    setBowlSize(plates[0]);
    setBoxSize && setBoxSize(null);
    setAnimateDishItems({ y: "35%", scale: 0.4, opacity: 0 });
    setAnimateDishImage({ scale: [1, 0.8, 1] });
  };

  /* set dish size and add extra costs*/
  const handleSize = (e) => {
    if (e.target.value === "small") {
      setBowlSize(plates[0]);
    } else if (e.target.value === "large") {
      setBowlSize(plates[1]);
    } else if (e.target.value === "small-box") {
      setBowlSize(plates[2]);
      setBoxSize(plates[2]);
    } else if (e.target.value === "large-box") {
      setBowlSize(plates[3]);
      setBoxSize(plates[3]);
    }
  };
  return (
    <>
      {make && (
        <Dish
          bowlSize={bowlSize}
          customOrder={customOrder}
          setCustomOrder={setCustomOrder}
          extraPrice={extraPrice}
          setExtraPrice={setExtraPrice}
          animateDishItems={animateDishItems}
          animateDishImage={animateDishImage}
        />
      )}
      <li
        key={data?.id}
        className="bowl__item"
        data-id={data?.id}
        value={amount}
      >
        {amount ? <Counter amount={amount} type={type} /> : undefined}
        <div
          className={`${styles.dish_card} ${
            !make && !dessert && styles.dish_card__height
          }`}
        >
          <div className={styles.dish_card__header}>
            <p className={styles.dish_card__price}>
              €
              {!dessert
                ? (data?.price
                    ? data?.price + bowlSize.price
                    : 0 + bowlSize.price
                  ).toFixed(2)
                : bowlSize.price}
            </p>
            {!make && !dessert && <img src={data.svg.url} alt={data.name} />}
            {dessert && boxSize?.name !== "big box" ? (
              <img src={Mochi2} alt="small box" />
            ) : (
              dessert &&
              boxSize?.name === "big box" && <img src={Mochi4} alt="big box" />
            )}
          </div>
          {make ? (
            <h3 className={styles.dish_card__title}>Your custom bowl</h3>
          ) : (
            <>
              <h3 className={styles.dish_card__title}>
                {dessert ? `Tropical Ice Cream Treats` : data?.name}
              </h3>
              {dessert ? (
                <>
                  <p className={styles.dish_card__dessert_flavors}>
                    {dessertOrder?.map((dessert) => dessert.name).join(", ")}
                  </p>
                  {dessertOrder?.length === 2 && (
                    <p className={styles.dish_card__dessert_more}>want more?</p>
                  )}
                  <div className={styles.dish_card__btns}>
                    <p className={styles.dish_card__dessert_size}>
                      Choose box size
                    </p>
                    {dessertOrder?.length < 2 && (
                      <Button
                        handleClick={(e) => handleSize(e)}
                        size="small"
                        selected={
                          bowlSize.id === "cl3sjx4boe6id0elctwhka8hg"
                            ? true
                            : false
                        }
                        value="small-box"
                      >
                        2pc box
                      </Button>
                    )}
                    <Button
                      handleClick={(e) => handleSize(e)}
                      size="small"
                      selected={
                        bowlSize.id === "cl3sjyl2re7bf0elciw9xps63"
                          ? true
                          : false
                      }
                      value="large-box"
                    >
                      4pc box
                    </Button>
                  </div>
                </>
              ) : (
                <p>{data.description}</p>
              )}
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
    </>
  );
};

export default DishCard;
