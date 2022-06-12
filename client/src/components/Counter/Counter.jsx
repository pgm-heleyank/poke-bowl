import React from "react";
import styles from "./Counter.module.css";
import MinusSvg from "../../assets/img/minus.svg";
import PlusSvg from "../../assets/img/plus.svg";

const Counter = ({ ticket }) => {
  return (
    <div className={styles.counter}>
      {!ticket && (
        <button>
          <img src={MinusSvg} alt="remove one dish" />
        </button>
      )}
      <p className={styles.counter__number}>1</p>
      {!ticket && (
        <button>
          <img src={PlusSvg} alt="add one dish" />
        </button>
      )}
    </div>
  );
};

export default Counter;
