import ButtonAppBar from "../ButtonAppBar";
import ComplexGrid from "./Card_styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";

export default function HomePage() {
  return (
    <Paper>
      <ButtonAppBar />
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
}
