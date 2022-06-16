import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckOut } from "../components";
import { ROUTES } from "../constants/routes";
import { motion } from "framer-motion";

const PaymentPage = () => {
  let navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/${ROUTES.FINAL}`, { replace: true });
    }, 3500);
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: "100vh",
      }}
      transition={{ duration: 3, delay: 0.5 }}
    >
      <CheckOut ticket />;
    </motion.div>
  );
};

export default PaymentPage;
