import React, { useState } from "react";
import SideBar from "../Sidebars";
import "./index.css";
import Body from "../Body";

const Layout = () => {
  const [selectedDept, setSelectedDept] = useState(null);
  const [deptDetails, setDeptDetails] = useState([]);

  return (
    <div id="main">
      <div id="header"></div>

      <div id="content">
        <div id="sidebar">
          <SideBar
            deptDetails={deptDetails}
            setSelectedDept={setSelectedDept}
            setDeptDetails={setDeptDetails}
          />
        </div>

        <div id="body">
          {selectedDept && (
            <Body
              selectedDeptId={selectedDept}
              deptDetails={deptDetails}
              setDeptDetails={setDeptDetails}
              // setSelectedDept={setSelectedDept}
              // departmentId={departmentId}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
