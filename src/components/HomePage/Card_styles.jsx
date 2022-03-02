import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ComplexGrid() {
  return (
    <Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 125, height: 130 }}>
            <Img
              alt="Film Poster"
              src="https://image.shutterstock.com/z/stock-vector-movie-retro-posters-and-flyers-set-vintage-cinema-promotional-printing-collection-can-be-used-for-513802834.jpg"
              //use real movie images for the images. Store these images locally.
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Film Title
              </Typography>
              <Typography variant="body2" color="text.secondary">
                screening credits
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                Brief movie description, which is continued when the user clicks
                on a expand button
              </Typography>
            </Grid>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
