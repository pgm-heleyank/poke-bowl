import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <nav className={styles.nav}>
      <NavLink className={styles.nav__item} to={ROUTES.BOWLS}>
        Bowls
      </NavLink>
      <NavLink className={styles.nav__item} to={ROUTES.MAKE_YOUR_OWN}>
        Make your own
      </NavLink>
      <NavLink className={styles.nav__item} to={ROUTES.SIDES}>
        Sides
      </NavLink>
      <NavLink className={styles.nav__item} to={ROUTES.DESSERTS}>
        Desserts
      </NavLink>
      <NavLink className={styles.nav__item} to={ROUTES.DRINKS}>
        Drinks
      </NavLink>
    </nav>
  );
};

export default Header;
