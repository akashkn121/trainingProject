import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const logInCss = {
  main: {
    width: "100%",
    height: "100vh",
    backgroundColor: "gray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  userId: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  psswrd: {
    display: "flex",
    justifyContent: "space-between",
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
    justifyContent: "space-between",
  },
  signUpBtn: {
    backgroundColor: "salmon",
    height: "30px",
    width: "70px",
    borderRadius: "10px",
  },
  logInBtn: {
    backgroundColor: "limeGreen",
    height: "30px",
    width: "70px",
    borderRadius: "10px",
  },
};

const LogIn = ({ userDetails }) => {
  const history = useHistory();
  const [userToLogIn, setUserToLogIn] = useState({ emailId: "", password: "" });

  const handleChange = (value, fieldName) => {
    setUserToLogIn({ ...userToLogIn, [fieldName]: value });
  };

  const handleClick = () => {
    if (userToLogIn.emailId === "" || userToLogIn.password === "") {
      alert(" EmailId and Password should not be empty");
    } else {
      const selectedUser = userDetails.filter(
        (item) =>
          item.emailId === userToLogIn.emailId &&
          item.password === userToLogIn.password
      );

      selectedUser.length > 0
        ? history.push("/home")
        : alert("Invalid EmailId or Password");
    }
  };

  return (
    <div style={logInCss.main}>
      <div style={logInCss.formStyle}>
        <h3 style={{ color: "purple" }}>Log In Here!</h3>
        <div style={logInCss.userId}>
          <p>Email Id:</p>
          <input
            type="text"
            value={userToLogIn.emailId}
            onChange={(e) => handleChange(e.target.value, "emailId")}
          />
        </div>
        <div style={logInCss.psswrd}>
          <p>Password:</p>
          <input
            type="password"
            value={userToLogIn.password}
            onChange={(e) => handleChange(e.target.value, "password")}
          />
        </div>
        <h4 style={{ color: "purple" }}>Did you signup?</h4>
        <div style={logInCss.buttons}>
          <button
            onClick={() => history.push("/signUp")}
            style={logInCss.signUpBtn}
          >
            Sign Up
          </button>
          <button onClick={() => handleClick()} style={logInCss.logInBtn}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
