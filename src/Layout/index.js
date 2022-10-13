import React, { useState } from "react";
import SideBar from "../Sidebars";
import "./index.css";
import Body from "../Body";

const Layout = () => {
  const [selectedDept, setSelectedDept] = useState(null);

  return (
    <div id="main">
      <div id="header"></div>

      <div id="content">
        <div id="sidebar">
          <SideBar setSelectedDept={setSelectedDept} />
        </div>

        <div id="body">
          {selectedDept && <Body selectedDept={selectedDept}  />}
        </div>
      </div>
    </div>
  );
};

export default Layout;
