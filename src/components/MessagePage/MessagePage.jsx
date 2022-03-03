import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ButtonAppBar from "../HomePage/ButtonAppBar";

function MessagePage() {
  return (
    <>
      <ButtonAppBar />
      <Box>
        <Paper
          sx={{
            p: 2,
            margin: 2,
            maxWidth: "100%",
            maxHeight: "100%",
            flexGrow: 1,
          }}
        >
          <div>MessagePage</div>
        </Paper>
      </Box>
    </>
  );
}

export default MessagePage;
