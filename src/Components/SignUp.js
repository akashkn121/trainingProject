import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { addUser } from "./redux/action/login";
import axios from "axios";
import { API_PATH, SIGN_UP } from "../config/const";

const signUpCss = {
  main: {
    position: "fixed",
    top: "0",
    left: "0",
    backgroundColor: "rgb(0,0,0,0.4)",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "1",
  },
  subContainer: {
    backgroundColor: "wheat",
    width: "29%",
    padding: "30px",
  },

  buttons: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "10px",
  },
};

const SignUp = () => {
  const history = useHistory();
  // const dispatch = useDispatch();
  const [tempObj, setTempObj] = useState({
    userName: "",
    emailId: "",
    password: "",
  });

  const handleChange = (value, fieldName) => {
    setTempObj({ ...tempObj, [fieldName]: value });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {
    if (tempObj.emailId !== "" && tempObj.password !== "") {
      // setUserDetails([...userDetails, tempObj]);
      // dispatch(addUser(tempObj));
      axios
        .post(`${API_PATH}${SIGN_UP}`, {
          params: {
            action: "SIGNUP",
            user_email: tempObj.emailId.trim(),
            user_name: tempObj.userName.trim(),
            user_password: tempObj.password.trim(),
          },
        })
        .then((res) => console.log("data send"))
        .catch(console.error());
      history.push("/");
    } else {
      alert("enter Email and Password");
    }
  };

  return (
    <Box sx={signUpCss.main}>
      <Box sx={signUpCss.subContainer}>
        <Typography variant="h5" sx={{ color: "blueviolet" }}>
          Sign Up First!
        </Typography>
        <TextField
          variant="outlined"
          label="User Name"
          sx={{ width: "400px", marginTop: "10px" }}
          value={tempObj.userName}
          onChange={(e) => handleChange(e.target.value, "userName")}
          onKeyPress={(event) => handleKeyPress(event)}
        />
        <TextField
          label="Email Id"
          sx={{ width: "400px", marginTop: "10px" }}
          value={tempObj.emailId}
          onChange={(e) => handleChange(e.target.value, "emailId")}
          onKeyPress={(event) => handleKeyPress(event)}
        />
        <TextField
          label="Password"
          sx={{ width: "400px", marginTop: "10px" }}
          value={tempObj.password}
          onChange={(e) => handleChange(e.target.value, "password")}
          onKeyPress={(event) => handleKeyPress(event)}
        />
        <Box sx={signUpCss.buttons}>
          <Button
            onClick={() => history.push("/")}
            variant="outlined"
            sx={{ color: "red" }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleClick()}
            variant="outlined"
            sx={{ color: "green" }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default SignUp;
