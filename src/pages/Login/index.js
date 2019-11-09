import React from "react";
import { Button, Grid } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const LoginLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
));
const Login = () => {
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={4}>
          <Button
            color="primary"
            variant="contained"
            component={LoginLink}
            to="/signage"
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
