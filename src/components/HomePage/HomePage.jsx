import ButtonAppBar from "../ButtonAppBar";
import ComplexGrid from "./Card_styles";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const HomePage = () => {
  return (
    <Paper>
      <ButtonAppBar />
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 9 }}>
        <Grid item xs={3}>
          <ComplexGrid />
        </Grid>
        <Grid item xs={3}>
          <ComplexGrid />
        </Grid>
        <Grid item xs={3}>
          <ComplexGrid />
        </Grid>
        <Grid item xs={3}>
          <ComplexGrid />
        </Grid>
        <Grid item xs={3}>
          <ComplexGrid />
        </Grid>
        <Grid item xs={3}>
          <ComplexGrid />
        </Grid>
        <Grid item xs={3}>
          <ComplexGrid />
        </Grid>
        <Grid item xs={3}>
          <ComplexGrid />
        </Grid>
        <Grid item xs={3}>
          <ComplexGrid />
        </Grid>
        <Grid item xs={3}>
          <ComplexGrid />
        </Grid>
        <Grid item xs={3}>
          <ComplexGrid />
        </Grid>
        <Grid item xs={3}>
          <ComplexGrid />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HomePage;
