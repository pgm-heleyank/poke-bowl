import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/img/logoPoke.png";
import SuccessSvg from "../assets/img/success.svg";
import { ROUTES } from "../constants/routes";

const SuccesPage = () => {
  let navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/${ROUTES.PAYMENT}`, { replace: true });
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="pay-page">
      <img className="pay-page__logo" src={Logo} alt="poke bowl logo" />
      <h2 className="pay-page__title">Success</h2>
      <img src={SuccessSvg} alt="payment is successful" />
    </div>
  );
};

export default SuccesPage;
