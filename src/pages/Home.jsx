import React from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import woman from "../assets/crew/image-anousheh-ansari.png";
import explore from "../assets/shared/logo.svg";
import Stack from "@mui/material/Stack";

const Home = () => {
  return (
    <main>
      <div width="100%" height="auto" className="home flex">
        <Grid
          container
          className="parent"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item className="intro">
            <Typography
              xs={2}
              lg={12}
              variant="h3"
              id="title"
              sx={{ fontSize: "clamp(1rem, 5vw, 2rem)" }}
            >
              SO, YOU WANT TO TRAVEL TO{" "}
              <Typography
                xs={2}
                lg={12}
                id="space"
                sx={{ fontSize: "clamp(4rem, 25vw, 10rem)" }}
              >
                SPACE
              </Typography>
              <Typography id="subtitle-text" variant="h5">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </Typography>
            </Typography>
            <Typography id="explore">Explore</Typography>
          </Grid>
        </Grid>
      </div>
    </main>
  );
};

export default Home;
