import React from "react";
import { CircularProgress, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {},
  progressContainer: {
    display: "flex",
    flexDirection: "column",

    alignItems: "center"
  }
}));
const Loading = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid className={classes.progressContainer} item xs={4}>
          <CircularProgress size={50} />
          <Typography variant="h4" style={{ marginTop: "30px" }}>
            Loading Content
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Loading;
