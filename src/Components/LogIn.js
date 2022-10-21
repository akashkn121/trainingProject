import React, { useState } from "react";
// import { Link } from "react-router-dom";
import SignUp from "./SignUp";
import Layout from "./Layout";

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
    backgroundColor: "white",
    height: "max-content",
    width: "23%",
    padding: "56px",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "10px",
  },
};

const LogIn = ({ userDetails, setUserDetails }) => {
  const [userToLogIn, setUserToLogIn] = useState({ emailId: "", password: "" });
  const [logIn, setLogIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const handleChange = (value, fieldName) => {
    setUserToLogIn({ ...userToLogIn, [fieldName]: value });
  };

  const selectedUser = userDetails.filter(
    (item) => item.emailId === userToLogIn.emailId
  );

  const handleClick = () => {
    if (userToLogIn.emailId === "" || userToLogIn.password === "") {
      alert(" EmailId and Password should not be empty");
    } else if (selectedUser[0].password === userToLogIn.password) {
      setLogIn(true);
    } else {
      alert("Invalid EmailId or Password");
    }
  };

  return (
    <div style={logInCss.main}>
      <div style={logInCss.formStyle}>
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
            type="text"
            value={userToLogIn.password}
            onChange={(e) => handleChange(e.target.value, "password")}
          />
        </div>
        <div style={logInCss.buttons}>
          <button onClick={() => setOpenSignUp(true)}>Sign Up</button>
          <button onClick={() => handleClick()}>Submit</button>
        </div>
      </div>
      {logIn && <Layout />}
      {openSignUp && (
        <SignUp
          setUserDetails={setUserDetails}
          userDetails={userDetails}
          onClose={() => setOpenSignUp(false)}
        />
      )}
    </div>
  );
};
export default LogIn;
