import * as React from "react";
import Paper from "@mui/material/Paper";
import ButtonAppBar from "../HomePage/ButtonAppBar";

const WatchListPage = () => {
  return (
    <>
      <ButtonAppBar />
      <Paper>
        <div>
          <h1>Watchlist Page</h1>
        </div>
        <div>
          <body>
            A place for users to keep a track of movies they are interested in.
          </body>
        </div>
      </Paper>
    </>
  );
};

export default WatchListPage;
