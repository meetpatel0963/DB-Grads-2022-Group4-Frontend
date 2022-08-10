import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { Navigate } from "react-router";
import CircularProgress from "@mui/material/CircularProgress";

import "./signUp.css";
import { signup } from "./../../services/UserServices";

const Copyright = () => {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{ marginTop: "10px" }}
    >
      {"Copyright © "}
      Bonds Management {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (e) => {
    const emailreg =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    if (!e.target.value.match(emailreg))
      setEmailError("Please enter a valid email address!");
    else setEmailError("");
    setEmail(e.target.value);
  };

  const validatePassword = (e) => {
    const passwordreg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%#*?&])[A-Za-z\d@$!%#*?&]{8,}$/;
    if (!e.target.value.match(passwordreg))
      setPasswordError(
        "Use 8 or more characters with a mix of letters, numbers & symbols :)"
      );
    else setPasswordError("");
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    signup(firstName, lastName, username, email, password, [
      { name: "ADMIN", id: 1 },
    ]).then((res) => {
      setSignedUp(true);
    });
  };

  if (signedUp) return <Navigate to="/signin" />;

  return (
    <Grid align="center" className="signup-container">
      <Paper className="signup-paper">
        <Grid align="center">
          <Avatar className="signup-avatar">
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 className="signup-title">Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <div className="signup-name-container">
            <TextField
              fullWidth
              id="firstName"
              name="firstName"
              label="First Name"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              autoFocus
              required
              style={{ margin: "5px 0px" }}
            />
            <TextField
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={{ margin: "5px 0px" }}
            />
          </div>
          <TextField
            fullWidth
            id="username"
            label="Username"
            name="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ margin: "5px 0px" }}
          />
          <TextField
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            helperText={emailError}
            onChange={(e) => validateEmail(e)}
            error={emailError.length > 0}
            style={{ margin: "5px 0px" }}
          />
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter your password"
            name="password"
            type="password"
            id="password"
            value={password}
            helperText={passwordError}
            onChange={(e) => validatePassword(e)}
            error={passwordError.length > 0}
            style={{ margin: "5px 0px" }}
          />
          <FormControlLabel
            style={{ marginTop: "20px" }}
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions."
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "10px" }}
          >
            {loading ? (
              <CircularProgress size={"23px"} style={{ color: "white" }} />
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>
        <Copyright />
      </Paper>
    </Grid>
  );
};

export default SignUp;
