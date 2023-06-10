import React from "react";
import logo from "../assets/shared/logo.svg";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="leftSide">
        <Link to="/space-tour">
          <img src={logo} />
        </Link>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <div className="rightSide">
            <Link to="/space-tour">00 Home</Link>
            <br />
            <Link to="/space-tour/Destination">01 Destination</Link>
            <br />
            <Link to="/space-tour/Crew">03 Crew</Link>
            <br />
            <Link to="/space-tour/Techonology">04 Technology</Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default NavBar;
