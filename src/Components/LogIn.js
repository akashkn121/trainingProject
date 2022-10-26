import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { getUserList } from "./redux/reducer/login";
// import { getUser } from "./redux/action/login";

const logInCss = {
  main: {
    width: "100%",
    height: "100vh",
    backgroundColor: "gray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formStyle: {
    backgroundColor: "lightyellow",
    height: "max-content",
    width: "23%",
    padding: "56px",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
  },
};

const LogIn = () => {
  const history = useHistory();
  // const dispatch = useDispatch();
  const userLists = useSelector(getUserList);
  // const userLists_2 = useDispatch(getUser);
  const [userToLogIn, setUserToLogIn] = useState({ emailId: "", password: "" });

  const handleChange = (value, fieldName) => {
    setUserToLogIn({ ...userToLogIn, [fieldName]: value });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {
    if (userToLogIn.emailId === "" || userToLogIn.password === "") {
      alert(" EmailId and Password should not be empty");
    } else {
      const selectedUser = userLists.filter(
        (item) =>
          item.emailId === userToLogIn.emailId &&
          item.password === userToLogIn.password
      );
      // setUserUsing(selectedUser);

      selectedUser.length > 0
        ? history.push("/home")
        : alert("Invalid EmailId or Password");
    }
  };

  return (
    <Box sx={logInCss.main}>
      <Box sx={logInCss.formStyle}>
        <Typography sx={{ color: "purple" }} variant="h5">
          Log In Here!
        </Typography>
        <TextField
          label="EmailId:"
          variant="outlined"
          sx={{ marginTop: "10px", width: "315px" }}
          value={userToLogIn.emailId}
          onChange={(e) => handleChange(e.target.value, "emailId")}
        />

        <TextField
          label="Password"
          variant="outlined"
          sx={{ marginTop: "10px", width: "315px" }}
          value={userToLogIn.password}
          onChange={(e) => handleChange(e.target.value, "password")}
          onKeyPress={(event) => handleKeyPress(event)}
        />

        <Box sx={logInCss.buttons}>
          <Button
            variant="outlined"
            sx={{ color: "blue", height: "25px" }}
            onClick={() => history.push("/signUp")}
          >
            Sign Up
          </Button>
          <Button
            variant="text"
            sx={{ color: "green" }}
            onClick={() => handleClick()}
            underline="hover"
          >
            <u> Log In</u>
          </Button>
        </Box>
        <Typography sx={{ color: "purple" }} varient="h4">
          Did you signup?
        </Typography>
      </Box>
    </Box>
  );
};
export default LogIn;
