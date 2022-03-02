import * as React from "react";
import Paper from "@mui/material/Paper";
import ButtonAppBar from "../HomePage/ButtonAppBar";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";

const Profile_Page = () => {
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
            <h1>Profile page</h1>
          </div>
          <div>
            <AccountCircle />
            <body>test</body>
          </div>
        </Paper>
      </Box>
    </>
  );
};

export default Profile_Page;
