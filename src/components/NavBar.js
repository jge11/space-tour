import React from "react";
import logo from "../assets/shared/logo.svg";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="leftSide">
        <img src={logo} />
      </div>
      <div className="rightSide"></div>
    </div>
  );
};

export default NavBar;
