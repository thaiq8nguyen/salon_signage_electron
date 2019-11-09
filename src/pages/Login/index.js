import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { AppBar, Button, Grid, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

const LoginLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
));

const useStyles = makeStyles(theme => ({
  root: {},
  appBar: {
    top: "auto",
    bottom: 0
  },
  toolBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  }
}));
const Login = () => {
  const [time, setTime] = useState(format(new Date(), "EEEE, MM/dd/yyyy p"));

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = format(now, "EEEE, MM/dd/yyyy p");
      setTime(formattedTime);
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, []);

  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <Typography
            alignt="center"
            color="primary"
            gutterBottom
            variant={"h1"}
          >
            Sugar Nails Digital Signage
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Button
            color="primary"
            variant="contained"
            component={LoginLink}
            to="/signage"
            size="large"
          >
            Login
          </Button>
        </Grid>

        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <Typography>{time}</Typography>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
};

export default Login;
