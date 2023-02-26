import React from "react";
import { TextField, Button, Alert, AlertTitle } from "@mui/material";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

function Signin() {
  const [usernameValue, setUsernameValue] = React.useState("");
  const [passwordValue, setPasswordValue] = React.useState("");
  const [cookie, setCookie] = useCookies(["username", "password"]);
  const [valid, setValid] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleSignin = () => {
    console.log(usernameValue, passwordValue);
    if (usernameValue || passwordValue !== "") {
      setError(false);
      setCookie("username", usernameValue);
      setCookie("password", passwordValue);
      setValid(true);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <h1>Expense Tracker</h1>
      <TextField
        fullWidth
        id="username"
        label="Username"
        variant="standard"
        value={usernameValue}
        onChange={(e) => setUsernameValue(e.target.value)}
      />
      <br />
      <br />
      <TextField
        fullWidth
        id="password"
        type={"password"}
        label="Password"
        variant="standard"
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <br />
      <br />
      <Button variant="contained" size="medium" onClick={handleSignin}>
        SignIn
      </Button>
      {valid && (
        <nav>
          <br />
          <Link to="/pageone">Page One</Link>
        </nav>
      )}
      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          <strong>Empty Values</strong>
        </Alert>
      )}
    </>
  );
}

export default Signin;
