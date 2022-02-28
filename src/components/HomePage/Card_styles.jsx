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
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="Film Poster" src="/static/images/grid/FilmPoster.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Film Title
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description of film
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                Add expand button here to expand movie description
              </Typography>
            </Grid>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
