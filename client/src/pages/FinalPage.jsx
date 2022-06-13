import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FinalPage = () => {
  let navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 8000);
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="primary-background final-page">
      <iframe
        title="cooking your food animation"
        className="primary-background__animation"
        src="https://embed.lottiefiles.com/animation/25523"
      ></iframe>
      <h1>Preparing your meal...</h1>
      <p>Order:#2022</p>
    </div>
  );
};

export default FinalPage;
