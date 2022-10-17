import React, { useState } from "react";
import SideBar from "./SideBar";
import Body from "./Body";

const styleObj = {
  main: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  header: {
    height: "50px",
    backgroundColor: "antiquewhite",
    border: "1px solid",
  },
  content: {
    display: "flex",
  },
  sidebar: {
    display: "flex",
    width: "15%",
    height: "86vh",
    border: "1px solid",
  },
  body: {
    display: "flex",
    width: "85%",
    height: "86vh",
    border: "1px solid",
  },
};

const Layout = () => {
  const [selectedDeptId, setSelectedDeptId] = useState(null);
  const [deptDetails, setDeptDetails] = useState([]);

  return (
    <div style={styleObj.main}>
      <div style={styleObj.header}></div>

      <div style={styleObj.content}>
        <div style={styleObj.sidebar}>
          <SideBar
            deptDetails={deptDetails}
            setSelectedDeptId={setSelectedDeptId}
            setDeptDetails={setDeptDetails}
          />
        </div>

        <div style={styleObj.body}>
          {selectedDeptId && (
            <Body
              selectedDeptId={selectedDeptId}
              deptDetails={deptDetails}
              setDeptDetails={setDeptDetails}
              setSelectedDeptId={setSelectedDeptId}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
