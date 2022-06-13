import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckOut } from "../components";
import { ROUTES } from "../constants/routes";

const PaymentPage = () => {
  let navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/${ROUTES.FINAL}`, { replace: true });
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);
  return <CheckOut ticket />;
};

export default PaymentPage;
