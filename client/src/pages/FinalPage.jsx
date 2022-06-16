import React, { useEffect } from "react";

const FinalPage = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 10000);
    return () => clearTimeout(timer);
  }, []);
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
