import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ButtonAppBar from "../HomePage/ButtonAppBar";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
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
  return (
    <Paper>
      <ButtonAppBar />
      <Box>
        <div>
          <h1>Forgotten Password</h1>
        </div>
      </Box>
      <Copyright />
    </Paper>
  );
}
