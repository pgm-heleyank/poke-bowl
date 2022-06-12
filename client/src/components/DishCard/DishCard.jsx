import React from "react";
import editSvg from "../../assets/img/edit.svg";
import Button from "../Button/Button";
import Dish from "../Dish/Dish";
import styles from "./DishCard.module.css";

const DishCard = ({ data }) => {
  return (
    <div className={styles.dish_card}>
      <div className={styles.dish_card__header}>
        <p className={styles.dish_card__price}>€{data.price}</p>
        <Dish />
        <button>
          <img src={editSvg} alt="edit dish" />
        </button>
      </div>
      <h3 className={styles.dish_card__title}>{data.name}</h3>
      <p>
        Juicy grilled Farm chicken with healthy avocado, corn, jalapeños, feta
        cheese & sweet potato. Dressed with homemade chili mayo and topped off
        with chili flakes, spring onions & nachos
      </p>
      <div className={styles.dish_card__btns}>
        <Button size="small">small bowl</Button>
        <Button size="small">large bowl</Button>
      </div>
    </div>
  );
};

export default DishCard;
