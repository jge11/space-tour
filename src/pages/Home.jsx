import React from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import woman from "../assets/crew/image-anousheh-ansari.png";
import explore from "../assets/shared/logo.svg";
import Stack from "@mui/material/Stack";

const Home = () => {
  return (
    <main>
      <div className="home flex">
        <Grid
          container
          className="parent"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item className="intro" xs={2} lg={12}>
            <Typography xs={2} lg={12} variant="h3" id="title">
              SO, YOU WANT TO TRAVEL TO{" "}
              <Typography id="space">SPACE</Typography>
            </Typography>
            <span id="subtitle">
              {" "}
              <p id="subtitle-text">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
              <p id="explore">Explore</p>
            </span>
            {/* <Grid item className="explore-cirlce"> */}
            {/* </Grid> */}
          </Grid>
        </Grid>
      </div>
    </main>
  );
};

export default Home;
