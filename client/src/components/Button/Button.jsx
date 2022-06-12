import React from "react";
import styles from "./Button.module.css";

const button = ({ children, size, link, secondary }) => {
  const handleSize = (size) => {
    let style = null;
    switch (size) {
      case "medium":
        style = styles.button_md;
        break;
      case "small":
        style = styles.button_small;
        break;

      default:
        style = null;
        break;
    }
    return style;
  };
  return link ? (
    <a
      href={link}
      className={`${styles.button} ${size ? handleSize(size) : undefined} ${
        secondary && styles.button__secondary
      }`}
    >
      {children}
    </a>
  ) : (
    <button
      className={`${styles.button} ${size ? handleSize(size) : undefined} ${
        secondary && styles.button__secondary
      }`}
    >
      {children}
    </button>
  );
};

export default button;
