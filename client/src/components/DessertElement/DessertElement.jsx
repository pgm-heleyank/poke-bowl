import React from "react";
import Button from "../Button/Button";
import Mochi_box from "../../assets/img/mochi_box.png";
import styles from "./DessertElement.module.css";
import { ROUTES } from "../../constants/routes";

const DessertElement = () => {
  return (
    <div className={styles.dessert_element}>
      <img src={Mochi_box} alt="" />
      <Button selected link={`/${ROUTES.DESSERTS}`} size="small">
        Yes, please!
      </Button>
    </div>
  );
};

export default DessertElement;
