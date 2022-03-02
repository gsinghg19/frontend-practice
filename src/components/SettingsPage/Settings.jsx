import * as React from "react";
import Paper from "@mui/material/Paper";
import ButtonAppBar from "../HomePage/ButtonAppBar";
import Box from "@mui/material/Box";

const SettingsPage = () => {
  return (
    <>
      <ButtonAppBar />
      <Box>
        <Paper
          sx={{
            p: 1,
            margin: 3,
            maxWidth: "100%",
            minHeight: "100%",
            flexgrow: 1,
          }}
        >
          <div>
            <h1>Settings page</h1>
          </div>
        </Paper>
      </Box>
    </>
  );
};

export default SettingsPage;
