import React, { useContext, useState } from "react";
import { DataContext } from "../../App";
import StepItem from "../StepItem/StepItem";
import styles from "./Steps.module.scss";

const Steps = ({ customOrder, setCustomOrder, extraPrice, setExtraPrice }) => {
  const [{ ingredients }] = useContext(DataContext);
  /* divide items into labels to display in correct container*/
  const base = ingredients.filter((ingredient) => ingredient.label === "base");
  const protein = ingredients.filter(
    (ingredient) => ingredient.label === "protein"
  );
  const mixin = ingredients.filter(
    (ingredient) => ingredient.label === "mixin"
  );
  const dressing = ingredients.filter(
    (ingredient) => ingredient.label === "dressing"
  );
  const topping = ingredients.filter(
    (ingredient) => ingredient.label === "topping"
  );

  const [step, setStep] = useState(1);
  const handleClick = (s) => {
    return setStep(s);
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
  const chosenBaseItems = customBase[0]?.items.length;
  const chosenProteinItems = customProtein[0]?.items.length;
  const chosenMixinItems = customMixin[0]?.items.length;
  const chosenDressingItems = customDressing[0]?.items.length;
  const chosenToppingItems = customTopping[0]?.items.length;
  return (
    <div className={styles.steps}>
      <div className={`${styles.step} ${step === 1 ? styles.open : undefined}`}>
        <h3 className={styles.step__name}>
          <button onClick={() => handleClick(1)}>Stap 1</button>
        </h3>
        <div className={styles.step__info}>
          <p className={styles.step__description}>Your base</p>
          <p className={styles.step__items_to_choose}>
            {customBase[0] ? chosenBaseItems : 0}/1
          </p>
          <ul className={styles.step__items}>
            <StepItem
              items={base}
              customOrder={customOrder}
              setCustomOrder={setCustomOrder}
              price={chosenBaseItems >= 1 ? true : false}
              extraPrice={extraPrice}
              setExtraPrice={setExtraPrice}
            />
          </ul>
        </div>
      </div>
      <div className={`${styles.step} ${step === 2 ? styles.open : undefined}`}>
        <h3 className={styles.step__name}>
          <button onClick={() => handleClick(2)}>Stap 2</button>
        </h3>
        <div className={styles.step__info}>
          <p className={styles.step__description}>Your mix-ins</p>
          <p className={styles.step__items_to_choose}>
            {customMixin[0] ? chosenMixinItems : 0}/5
          </p>
          <ul className={styles.step__items}>
            <StepItem
              items={mixin}
              customOrder={customOrder}
              setCustomOrder={setCustomOrder}
              price={chosenMixinItems >= 5 ? true : false}
              extraPrice={extraPrice}
              setExtraPrice={setExtraPrice}
            />
          </ul>
        </div>
      </div>
      <div className={`${styles.step} ${step === 3 ? styles.open : undefined}`}>
        <h3 className={styles.step__name}>
          <button onClick={() => handleClick(3)}>Stap 3</button>
        </h3>
        <div className={styles.step__info}>
          <p className={styles.step__description}>Your protein</p>
          <p className={styles.step__items_to_choose}>
            {customProtein[0] ? chosenProteinItems : 0}/1
          </p>
          <ul className={styles.step__items}>
            <StepItem
              items={protein}
              customOrder={customOrder}
              setCustomOrder={setCustomOrder}
              price={chosenProteinItems >= 1 ? true : false}
              extraPrice={extraPrice}
              setExtraPrice={setExtraPrice}
            />
          </ul>
        </div>
      </div>
      <div className={`${styles.step} ${step === 4 ? styles.open : undefined}`}>
        <h3 className={styles.step__name}>
          <button onClick={() => handleClick(4)}>Stap 4</button>
        </h3>
        <div className={styles.step__info}>
          <p className={styles.step__description}>Your dressing</p>
          <p className={styles.step__items_to_choose}>
            {customDressing[0] ? chosenDressingItems : 0}/1
          </p>
          <ul className={styles.step__items}>
            <StepItem
              items={dressing}
              customOrder={customOrder}
              setCustomOrder={setCustomOrder}
              price={chosenDressingItems >= 1 ? true : false}
              extraPrice={extraPrice}
              setExtraPrice={setExtraPrice}
            />
          </ul>
        </div>
      </div>
      <div className={`${styles.step} ${step === 5 ? styles.open : undefined}`}>
        <h3 className={styles.step__name}>
          <button onClick={() => handleClick(5)}>Stap 5</button>
        </h3>
        <div className={styles.step__info}>
          <p className={styles.step__description}>Your topping</p>
          <p className={styles.step__items_to_choose}>
            {customTopping[0] ? chosenToppingItems : 0}/3
          </p>
          <ul className={styles.step__items}>
            <StepItem
              items={topping}
              customOrder={customOrder}
              setCustomOrder={setCustomOrder}
              price={chosenToppingItems >= 3 ? true : false}
              extraPrice={extraPrice}
              setExtraPrice={setExtraPrice}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Steps;
