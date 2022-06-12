import React from "react";
import Logo from "../assets/img/logoPoke.png";
import DownSvg from "../assets/img/down.svg";

const PayPage = () => {
  return (
    <div className="pay-page">
      <img className="pay-page__logo" src={Logo} alt="poke bowl logo" />
      <h2 className="pay-page__title">Thank you</h2>
      <p className="pay-page__instruction">
        Please follow the instructions on the terminal
      </p>
      <img
        className="pay-page__arrow"
        src={DownSvg}
        alt="instruction are on the payment machine"
      />
    </div>
  );
};

export default PayPage;
