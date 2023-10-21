import React, { useState } from "react";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/styles.css";

const NavBar = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleMenu = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navBar">
      <nav className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/space-tour">
          <img src={logo} alt="logo" />
        </Link>
        <nav className="hiddenLinks">
          <Link to="/space-tour">00 Home</Link>
          <br />
          <Link to="/space-tour/Destination">01 Destination</Link>
          <br />
          <Link to="/space-tour/Crew">03 Crew</Link>
          <br />
          <Link to="/space-tour/Techonology">04 Technology</Link>
        </nav>
      </nav>
      <div className="rightSide">
        <Link to="/space-tour">00 Home</Link>
        <br />
        <Link to="/space-tour/Destination">01 Destination</Link>
        <br />
        <Link to="/space-tour/Crew">03 Crew</Link>
        <br />
        <Link to="/space-tour/Techonology">04 Technology</Link>
        <button onClick={toggleMenu}>
          <MenuIcon />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
