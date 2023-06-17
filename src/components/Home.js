import React from "react";
import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import woman from "../assets/crew/image-anousheh-ansari.png";
const Home = () => {
  return (
    <div className="home flex">
      <Grid container>
        <Grid className="intro" item xs={2} lg={12}>
          <Typography xs={2} lg={12} variant="h3" id="title">
            SO, YOU WANT TO TRAVEL TO <p id="space">SPACE</p>
          </Typography>
          <Typography variant="h5" id="subtitle">
            {" "}
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Typography>
        </Grid>
        <Grid className="explore" item xs={4}>
          <img src={woman} alt="" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
