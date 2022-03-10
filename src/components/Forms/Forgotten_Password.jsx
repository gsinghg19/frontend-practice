import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ButtonAppBar from "../HomePage/ButtonAppBar";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Avatar, TextField, Button } from "@mui/material";
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/gsinghg19">
        guppy tech industries
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default function Forgotten_Password() {
  const handleSubmit = (event) => {
    event.preventDefauilt();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
    });
  };

  return (
    <Paper>
      <ButtonAppBar />
      <Grid container component='main' sx={{height: "100vh"}}>
        <CssBaseline />
        <Grid item xs={50} sm={20} md={20} elevation={18} square>
      <Box sx={{
        my:6,
        mx:4,
        display:"flex",
        flexDirection:"column",
        alignItems: "center",
      }}>
        <Avatar sx={{m:3, bgcolor: "secondary.main"}}><ContactSupportOutlinedIcon/></Avatar>
        <Typography component="h1" variant="h5">
          Create Account
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{mt:1}}>
          <TextField 
          margin="normal"
          required
          fullWidth
          id="Email"
          label="Email"
          name="Email"
          autoComplete="Email"
          autoFocus
          />
          <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
          >Submit</Button>
        </Box>
      </Box>
      </Grid>
      </Grid>
      <Copyright sx={{ mt: 5 }} />
    </Paper>
  );
}
