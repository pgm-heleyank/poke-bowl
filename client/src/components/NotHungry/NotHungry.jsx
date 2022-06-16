import React from "react";
import styles from "./NotHungry.module.scss";

const NotHungry = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>Not hungry anymore?</h1>
      <iframe
        title="not hungry animation"
        className={styles.container__iframe}
        src="https://embed.lottiefiles.com/animation/57876"
      ></iframe>
    </div>
  );
};

export default NotHungry;
