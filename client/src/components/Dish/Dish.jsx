import React from "react";
import styles from "./Dish.module.css";
import cucumber from "../../assets/img/cucumber.svg";
import mango from "../../assets/img/mango.svg";
import nachos from "../../assets/img/nachos.svg";
import rice from "../../assets/img/rice.svg";
import tomatoes from "../../assets/img/tomatoes.svg";
import chicken from "../../assets/img/chicken.svg";
import chilliMayo from "../../assets/img/chilli_mayo.svg";
import spring from "../../assets/img/spring.svg";
import bowl from "../../assets/img/bowl.svg";
const Dish = () => {
  return (
    <div className={styles.dish_container}>
      <ul className={styles.dish}>
        <div className={`${styles.dish__base}`}>
          <li className={styles.dish__base__item}>
            <img className={styles.dish__base__img} src={rice} alt="" />
          </li>
          <li className={styles.dish__base__item}>
            <img src={nachos} alt="" className={styles.dish__base__img} />
          </li>
        </div>
        <div className={styles.dish__protein}>
          <li className={styles.dish__base__item}>
            <img
              src={chicken}
              alt=""
              className={`${styles.dish__base__img} ${styles.chicken}`}
            />
          </li>
        </div>
        <div className={styles.dish__mix_in}>
          <li className={styles.dish__mix_in__item}>
            <img className={styles.dish__base__img} src={mango} alt="" />
          </li>
          <li className={styles.dish__mix_in__item}>
            <img src={tomatoes} alt="" className={styles.dish__base__img} />
          </li>
          <li className={styles.dish__mix_in__item}>
            <img src={cucumber} alt="" className={styles.dish__base__img} />
          </li>
          <li className={styles.dish__mix_in__item}>
            <img src={tomatoes} alt="" className={styles.dish__base__img} />
          </li>
          <li className={styles.dish__mix_in__item}>
            <img src={cucumber} alt="" className={styles.dish__base__img} />
          </li>
        </div>
        <div className={styles.dish__dressing}>
          <li className={styles.dish__base__item}>
            <img src={chilliMayo} alt="" className={styles.dish__base__img} />
          </li>
        </div>
        <div className={styles.dish__topping}>
          <li className={styles.dish__base__item}>
            <img src={spring} alt="" className={styles.dish__base__img} />
          </li>
        </div>
      </ul>
      <img src={bowl} alt="" className={styles.dish__bowl} />
    </div>
  );
};

export default Dish;
