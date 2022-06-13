import React from "react";
import Logo from "../../assets/img/logoPoke.png";
import styles from "./ExtraInfo.module.scss";

const ExtraInfo = ({ label, children }) => {
  return (
    <div className={styles.ExtraInfo}>
      <img src={Logo} alt="hawaiian poke bowl super awesome logo" />
      <div>
        <h2 className={styles.ExtraInfo__label}>{label}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ExtraInfo;
