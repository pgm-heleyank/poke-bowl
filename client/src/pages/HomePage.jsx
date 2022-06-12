import React from "react";
import logo from "../assets/img/logoPoke.png";
import { Button } from "../components";
import { ROUTES } from "../constants/routes";

const HomePage = () => {
  return (
    <div className="home">
      <img src={logo} alt="logo poke bowl" />
      <Button link={ROUTES.BOWLS}>Order here</Button>
    </div>
  );
};

export default HomePage;
