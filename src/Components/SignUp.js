import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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
  inputContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "10px",
  },
  cnlBtn: {
    backgroundColor: "#f76f6f",
    height: "30px",
    width: "70px",
    borderRadius: "10px",
  },
  sbtBtn: {
    backgroundColor: "limeGreen",
    height: "30px",
    width: "70px",
    borderRadius: "10px",
  },
};

const SignUp = ({ setUserDetails, userDetails }) => {
  const history = useHistory();
  const [tempObj, setTempObj] = useState({
    userName: "",
    emailId: "",
    password: "",
  });

  const handleChange = (value, fieldName) => {
    setTempObj({ ...tempObj, [fieldName]: value });
  };

  const handleClick = () => {
    if (tempObj.emailId !== "" && tempObj.password !== "") {
      setUserDetails([...userDetails, tempObj]);
      history.push("/");
    } else {
      alert("enter Email and Password");
    }
  };

  return (
    <div style={signUpCss.main}>
      <div style={signUpCss.subContainer}>
        <h3 style={{ color: "cadetblue" }}>Sign Up First!</h3>
        <div style={signUpCss.inputContent}>
          <p>UserName</p>
          <input
            type="text"
            value={tempObj.userName}
            onChange={(e) => handleChange(e.target.value, "userName")}
          />
        </div>
        <div style={signUpCss.inputContent}>
          <p>EmailId</p>
          <input
            type="text"
            value={tempObj.emailId}
            onChange={(e) => handleChange(e.target.value, "emailId")}
          />
        </div>
        <div style={signUpCss.inputContent}>
          <p>Password</p>
          <input
            type="password"
            value={tempObj.password}
            onChange={(e) => handleChange(e.target.value, "password")}
          />
        </div>
        <div style={signUpCss.buttons}>
          <button onClick={() => history.push("/")} style={signUpCss.cnlBtn}>
            Cancel
          </button>
          <button onClick={() => handleClick()} style={signUpCss.sbtBtn}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
