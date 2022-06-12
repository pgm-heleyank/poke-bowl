import React, { useState } from "react";
import editSvg from "../../assets/img/edit.svg";
import Button from "../Button/Button";
import Dish from "../Dish/Dish";
import styles from "./DishCard.module.css";

const DishCard = ({ data, plate, dessert, make }) => {
  const [bowlSize, setBowlSize] = useState("small");
  const handleSize = (e) => {
    setBowlSize(e.target.value);
  };
  return (
    <div className={styles.dish_card}>
      <div className={styles.dish_card__header}>
        <p className={styles.dish_card__price}>€{data?.price}</p>
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
            selected={bowlSize === "small" ? true : false}
            value="small"
          >
            small bowl
          </Button>
          <Button
            handleClick={(e) => handleSize(e)}
            size="small"
            selected={bowlSize === "large" ? true : false}
            value="large"
          >
            large bowl
          </Button>
        </div>
      )}
    </div>
  );
};

export default DishCard;
