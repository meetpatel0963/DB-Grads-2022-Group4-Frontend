import React, { useState, useContext } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material/";
import { Navigate } from "react-router";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import { AuthContext } from "../../authContext";

import "./signIn.css";
import { signin } from "../../services/UserServices";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const appContext = useContext(AuthContext);
  const { login, setLogin } = appContext;

  const handleSignIn = (e) => {
    e.preventDefault();
    setLoading(true);
    signin(username, password).then((res) => {
      localStorage.setItem("access-token", res.data.accessToken);
      localStorage.setItem("login", true);
      localStorage.setItem("username", username);
      setLogin(true);
    });
  };

  if (login) return <Navigate to="/" />;

  return (
    <Grid align="center" className="signin-container">
      <Paper className="signin-paper">
        <Grid align="center">
          <Avatar className="signin-avatar">
            <LockOutlinedIcon />
          </Avatar>
          <h2 className="signin-title">Sign In</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter your username"
          id="username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
          fullWidth
          required
          style={{ margin: "5px 0px" }}
        />
        <TextField
          label="Password"
          placeholder="Enter your password"
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
          style={{ margin: "5px 0px" }}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          className="signin-btn"
          onClick={handleSignIn}
          fullWidth
        >
          {loading ? (
            <CircularProgress size={"23px"} style={{ color: "white" }} />
          ) : (
            "Sign In"
          )}
        </Button>
        <Typography>
          Do you have an account?
          <Link href="/signup" style={{ margin: "5px", cursor: "pointer" }}>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default SignIn;
