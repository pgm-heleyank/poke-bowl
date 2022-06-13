import React, { useEffect } from "react";
import Logo from "../assets/img/logoPoke.png";
import DownSvg from "../assets/img/down.svg";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";

const PayPage = () => {
  let navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/${ROUTES.SUCCESS}`, { replace: true });
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

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
