import React from "react";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";
import Destination from "./Destination";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="leftSide">
        <Link to="/space-tour">
          <img src={logo} />
        </Link>
      </div>
      <div className="rightSide">
        <Link to="/space-tour">Home</Link>
        <br />
        <Link to={Destination}>Destination</Link>
        <br />
        <Link to="/space-tour/space-tour/Crew">Crew</Link>
        <br />
        <Link to="/space-tour/Techonology">Technology</Link>
      </div>
    </div>
  );
};

export default NavBar;
