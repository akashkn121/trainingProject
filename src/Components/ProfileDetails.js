import React from "react";
const main = {
  position: "fixed",
  zIndex: "1",
  right: "0",
  top: "0",
  width: "20%",
  listStyle: "none",
  paddingTop: "30px",
  border: "1px solid",
  height: "100vh",
  padding: "5px",
};

function ProfileDetails({ userUsing }) {
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
