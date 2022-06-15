import React from "react";
import styles from "./Dish.module.scss";
import uuid from "react-uuid";
import DeleteSvg from "../../assets/img/delete.svg";

const Dish = ({
  bowlSize,
  customOrder,
  setCustomOrder,
  extraPrice,
  setExtraPrice,
}) => {
  const ingredients = [];
  customOrder?.map((category) =>
    category.items.map((ingredient) => ingredients.push(ingredient))
  );
  const handleDelete = (e) => {
    const filteredOrder = customOrder?.map((category) => {
      return {
        ...category,
        items: category.items.filter(
          (ingredient) =>
            ingredient.id !== e.target.parentNode.parentNode.dataset.id
        ),
      };
    });
    setCustomOrder(filteredOrder);
    const filteredIngredient = customOrder?.map((category) =>
      category.items.filter(
        (ingredient) =>
          ingredient.id === e.target.parentNode.parentNode.dataset.id
      )
    );
    const handleMinus = () => {
      const filteredIngredientArr = filteredIngredient.filter(
        (array) => array.length > 0
      );
      const prices = [];
      filteredIngredientArr[0].map((i) => prices.push(i.price));
      const minus = -prices.reduce(
        (previousValue, currentValue) => previousValue + currentValue
      );
      if (extraPrice < -minus) {
        setExtraPrice(0);
      } else {
        const newPrice = extraPrice + minus;
        setExtraPrice(newPrice);
      }
    };

    /* filter labels in custom order */
    const customBase = customOrder.filter((order) => order.label === "base");
    const customProtein = customOrder.filter(
      (order) => order.label === "protein"
    );
    const customMixin = customOrder.filter((order) => order.label === "mixin");
    const customDressing = customOrder.filter(
      (order) => order.label === "dressing"
    );
    const customTopping = customOrder.filter(
      (order) => order.label === "topping"
    );

    const filteredIngredientArr = filteredIngredient.filter(
      (array) => array.length > 0
    );
    if (filteredIngredientArr[0][0]?.label === "base") {
      const chosenBaseItems = customBase[0]?.items.length;
      if (chosenBaseItems >= 2) {
        handleMinus();
      }
    }
    if (filteredIngredientArr[0][0]?.label === "protein") {
      const chosenProteinItems = customProtein[0]?.items.length;
      if (chosenProteinItems >= 2) {
        handleMinus();
      }
    }
    if (filteredIngredientArr[0][0]?.label === "mixin") {
      const chosenMixinItems = customMixin[0]?.items.length;
      if (chosenMixinItems >= 6) {
        handleMinus();
      }
    }
    if (filteredIngredientArr[0][0]?.label === "dressing") {
      const chosenDressingItems = customDressing[0]?.items.length;
      if (chosenDressingItems >= 2) {
        handleMinus();
      }
    }
    if (filteredIngredientArr[0][0]?.label === "topping") {
      const chosenToppingItems = customTopping[0]?.items.length;
      if (chosenToppingItems >= 4) {
        handleMinus();
      }
    }
  };

  return (
    <div className={styles.dish_container}>
      <ul className={styles.dish}>
        {ingredients?.map((ingredient) => {
          return (
            <li
              key={uuid()}
              data-id={ingredient.id}
              className={styles.dish__container}
            >
              <button onClick={(e) => handleDelete(e)}>
                <img src={DeleteSvg} alt="delete ingredient" />
              </button>
              <span>{ingredient.name}</span>
              <img
                src={ingredient.svg.url}
                alt="delete"
                className={styles.dish__img}
              />
            </li>
          );
        })}
      </ul>

      <img src={bowlSize.svg.url} alt="" className={styles.dish__bowl} />
    </div>
  );
};

export default Dish;
