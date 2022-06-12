import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const button = ({
  children,
  size,
  link,
  secondary,
  handleClick,
  selected,
  value,
}) => {
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
    <Link
      to={link}
      className={`${styles.button} ${size ? handleSize(size) : undefined} ${
        selected ? styles.selected : ""
      }  ${secondary && styles.button__secondary}`}
    >
      {children}
    </Link>
  ) : (
    <button
      value={value}
      onClick={(e) => handleClick && handleClick(e)}
      className={`${styles.button} ${size ? handleSize(size) : undefined} ${
        selected ? styles.selected : ""
      } ${secondary && styles.button__secondary}`}
    >
      {children}
    </button>
  );
};

export default button;
