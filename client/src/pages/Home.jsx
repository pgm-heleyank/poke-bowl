import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logoPoke.png";
import { Button } from "../components";
import { ROUTES } from "../constants/routes";

const Home = () => {
  return (
    <div className="home">
      <img src={logo} alt="logo poke bowl" />
      <Button>
        <NavLink to={ROUTES.BOWLS}>Order here</NavLink>
      </Button>
    </div>
  );
};

export default Home;
