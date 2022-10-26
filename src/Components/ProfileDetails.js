// import React, { useContext } from "react";
// import { myContext } from "../App";
const main = {
  paddingTop: "30px",
  padding: "5px",
  display: "flex",
  justyfyContent: "center",
};

function ProfileDetails({ userUsing }) {
  // const contextData = useContext(myContext);
  return (
    <div style={main}>
      <li>
        user Name:
        <span style={{ paddingLeft: "20px" }}>{userUsing[0].userName}</span>
      </li>
      <li>
        Email Id:
        <span style={{ paddingLeft: "40px" }}>{userUsing[0].emailId}</span>
      </li>
    </div>
  );
}

export default ProfileDetails;
