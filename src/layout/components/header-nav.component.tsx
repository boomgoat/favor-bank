import React from "react";
import { NavLink } from "react-router-dom";
import LogoutIcon from "../../assets/icons/logout.svg";
import "../styles/header-nav.style.css";

export const HeaderNav = () => {
  return (
    <div className="header-nav">
      <div className="header-nav-left">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/gettingStarted">Getting Started</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="header-nav-right">
        <NavLink to="#">
          <button className="login-btn">Login</button>
        </NavLink>
        <NavLink to="#">
          <img src={LogoutIcon} alt="" />
        </NavLink>
      </div>
    </div>
  );
};
