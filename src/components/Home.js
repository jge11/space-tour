import React from "react";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import woman from "../assets/crew/image-anousheh-ansari.png";
import explore from "../assets/shared/logo.svg";
import Stack from "@mui/material/Stack";

const Home = () => {
  return (
    <div className="home flex">
      <Stack
        sx={{ border: "10px solid red", width: "100%", height: "100%" }}
        id="test"
        direction="column"
      >
        <Grid container className="parent">
          <Grid item className="intro" xs={2} lg={12}>
            <Typography xs={2} lg={12} variant="h3" id="title">
              SO, YOU WANT TO TRAVEL TO{" "}
              <Typography id="space">SPACE</Typography>
            </Typography>
            <span id="subtitle">
              {" "}
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </span>
          </Grid>
          <Grid className="explore" item xs={2} sm={2} md={8} lg={12}>
            <text>Explore</text>
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
};

export default Home;
