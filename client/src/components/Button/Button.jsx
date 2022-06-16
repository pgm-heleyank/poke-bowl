import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import { motion } from "framer-motion";

const button = ({
  children,
  size,
  link,
  secondary,
  handleClick,
  selected,
  value,
}) => {
  /* handle size of button*/
  const handleSize = (size) => {
    let style = null;
    switch (size) {
      case "medium":
        style = styles.button__md;
        break;
      case "small":
        style = styles.button__small;
        break;

      default:
        style = null;
        break;
    }
    return style;
  };
  /* change button in link if it is a link*/
  return link ? (
    <motion.div whileTap={{ scale: 0.9 }}>
      <Link
        to={link}
        className={`${styles.button} ${size ? handleSize(size) : undefined} ${
          selected ? styles.selected : ""
        }  ${secondary && styles.button__secondary}`}
      >
        {children}
      </Link>
    </motion.div>
  ) : (
    <motion.button
      whileTap={{ scale: 0.9 }}
      value={value}
      onClick={(e) => handleClick && handleClick(e)}
      className={`${styles.button} ${size ? handleSize(size) : undefined} ${
        selected ? styles.selected : ""
      } ${secondary && styles.button__secondary}`}
    >
      {children}
    </motion.button>
  );
};

export default button;
