import React, { useContext } from "react";
import { ROUTES } from "../../constants/routes";
import CheckOutItems from "../CheckOutItems/CheckOutItems";
import ExtraInfo from "../ExtraInfo/ExtraInfo";
import Button from "../Button/Button";
import styles from "./CheckOut.module.scss";
import { Link } from "react-router-dom";
import { OrderContext } from "../../App";
const CheckOut = ({ ticket }) => {
  const [order] = useContext(OrderContext);
  const prices = [];
  order?.map((ord) => ord.items.map((item) => prices.push(item.price)));
  const totalPrice =
    order &&
    prices.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
  return (
    <div className={`${styles.check_out} ${ticket && styles.ticket}`}>
      <h1 className="title">Your order</h1>
      <CheckOutItems ticket={ticket} />
      {ticket ? (
        <ExtraInfo label="Thank you for your order">
          <address>
            <div>
              <span>Vlaanderenstraat 116</span>
              <span> 9000 Gent</span>
              <span> Belgie</span>
            </div>
            <div>vlaanderenstraat@hawaiian.be</div>
          </address>
        </ExtraInfo>
      ) : (
        <ExtraInfo label="Did you forget anything">
          <Link className="link" to={`/${ROUTES.BOWLS}`}>
            Yes?
          </Link>
        </ExtraInfo>
      )}

      <div className={styles.check_out__footer}>
        <p className={styles.check_out__price}>€{totalPrice.toFixed(2)}</p>
        {!ticket && (
          <Button selected size="medium" link={`/${ROUTES.PAY}`}>
            Pay
          </Button>
        )}
      </div>
    </div>
  );
};

export default CheckOut;
