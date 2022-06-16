import React, { useContext } from "react";
import styles from "./Dish.module.scss";
import { DataContext } from "../../App";
import DishItem from "../DishItem/DishItem";
import { motion } from "framer-motion";

const Dish = ({
  bowlSize,
  customOrder,
  setCustomOrder,
  extraPrice,
  setExtraPrice,
  animateDishItems,
  animateDishImage,
}) => {
  const [{ ingredients }] = useContext(DataContext);

  return (
    <div className={styles.dish_container}>
      <motion.ul className={`${styles.dish} dish`} animate={animateDishItems}>
        {ingredients?.map((ingredient) => {
          return (
            <DishItem
              key={ingredient.id}
              setCustomOrder={setCustomOrder}
              extraPrice={extraPrice}
              setExtraPrice={setExtraPrice}
              customOrder={customOrder}
              ingredient={ingredient}
            />
          );
        })}
      </motion.ul>

      <motion.img
        src={bowlSize.svg.url}
        alt=""
        className={styles.dish__bowl}
        animate={animateDishImage}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default Dish;
