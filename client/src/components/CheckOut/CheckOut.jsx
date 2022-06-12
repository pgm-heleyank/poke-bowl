import React from "react";
import { ROUTES } from "../../constants/routes";
import CheckOutItems from "../CheckOutItems/CheckOutItems";
import ExtraInfo from "../ExtraInfo/ExtraInfo";
import Button from "../Button/Button";
import styles from "./CheckOut.module.css";
const CheckOut = ({ ticket }) => {
  return (
    <div className={`${styles.check_out} ${ticket && styles.ticket}`}>
      <h1 className="title">Your order</h1>
      <CheckOutItems ticket={ticket} />
      {ticket ? (
        <ExtraInfo label="Thank you for your order">
          <address>
            <div>
              <span>Vlaanderenstraat 116</span>
              <span>9000 Gent</span>
              <span>Belgie</span>
            </div>
            <div>vlaanderenstraat@hawaiian.be</div>
          </address>
        </ExtraInfo>
      ) : (
        <ExtraInfo label="Did you forget anything">
          <a className="link" href={ROUTES.BOWLS}>
            Yes?
          </a>
        </ExtraInfo>
      )}

      <div className={styles.check_out__footer}>
        <p className={styles.check_out__price}>Price</p>
        {!ticket && (
          <Button size="medium" link={ROUTES.PAY}>
            Pay
          </Button>
        )}
      </div>
    </div>
  );
};

export default CheckOut;
