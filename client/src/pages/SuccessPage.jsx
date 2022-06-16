import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/img/logoPoke.png";
import { ROUTES } from "../constants/routes";
import { motion } from "framer-motion";

const SuccessPage = () => {
  let navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/${ROUTES.PAYMENT}`, { replace: true });
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);
  /* animation */
  const svg = {
    initial: { rotate: -180 },
    animate: {
      rotate: 0,
      transition: { duration: 1, delay: 0.5 },
    },
  };
  const path = {
    initial: { opacity: 0, pathLength: 0 },
    animate: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut", delay: 0.5 },
    },
  };

  return (
    <div className="pay-page">
      <img className="pay-page__logo" src={Logo} alt="poke bowl logo" />
      <h2 className="pay-page__title">Success</h2>
      <motion.svg
        variants={svg}
        initial="initial"
        animate="animate"
        xmlns="http://www.w3.org/2000/svg"
        width="190.782"
        height="187.682"
        viewBox="0 0 190.782 187.682"
      >
        <g
          id="Icon_feather-check-circle"
          data-name="Icon feather-check-circle"
          transform="translate(5.017 5.111)"
        >
          <motion.path
            variants={path}
            id="Path_125"
            data-name="Path 125"
            d="M174.451,80.883v7.887a85.725,85.725,0,1,1-50.835-78.353"
            transform="translate(0 0)"
            fill="none"
            stroke="#8ca213"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
          <motion.path
            variants={path}
            id="Path_126"
            data-name="Path 126"
            d="M124.943,6,39.218,91.811,13.5,66.093"
            transform="translate(49.508 14.189)"
            fill="none"
            stroke="#8ca213"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          />
        </g>
      </motion.svg>
    </div>
  );
};

export default SuccessPage;
