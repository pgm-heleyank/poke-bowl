import React from "react";
import Logo from "../assets/img/logoPoke.png";
import SuccessSvg from "../assets/img/success.svg";

const SuccesPage = () => {
  return (
    <div className="pay-page">
      <img className="pay-page__logo" src={Logo} alt="poke bowl logo" />
      <h2 className="pay-page__title">Success</h2>
      <img src={SuccessSvg} alt="payment is successful" />
    </div>
  );
};

export default SuccesPage;
