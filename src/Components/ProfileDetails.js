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
};

function ProfileDetails({ userUsing }) {
  return (
    <div style={main}>
      <li>user Name: {userUsing[0].userName}</li>
      <li> Email Id:{userUsing[0].emailId}</li>
    </div>
  );
}

export default ProfileDetails;
