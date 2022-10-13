import React, { useState } from "react";
import AddEmployee from "./AddEmployee";

const list = {
  listStyle: "none",
};
const lists = {
  disply: "flex",
};
const mng = {
  paddingLeft: "32px",
};
const loc = {
  paddingLeft: "80px",
};
const dName = {
  paddingLeft: "11px",
};
const forEmployee = {
  display: "flex",
  justifyContent: "space-between",
  width: "65%",
};
const body = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
};
const btn = {
  width: "120px",
  height: "max-content",
  borderRadius: "8px",
  backgroundColor: "#0101f7a6",
  color: "white",
};

const Body = (props) => {
  const { selectedDept } = props;
  const [addEmployee, setAddEmployee] = useState(false);

  // const[dailogOpen,SetDailogOpen]=useState(false);

  return (
    <div style={body}>
      <ul style={list}>
        <h3>Department Details</h3>
        <li>
          <b>Department Name :</b>
          <span style={dName}>{selectedDept.deptName}</span>
        </li>

        <li style={lists}>
          <b>Manager Name :</b>
          <span style={mng}>{selectedDept.managerName}</span>
        </li>

        <li style={lists}>
          <b>Location :</b> <span style={loc}>{selectedDept.location}</span>
        </li>

        <div style={forEmployee}>
          <li>
            <b>No of Employee :</b>
          </li>
          <button style={btn} onClick={() => setAddEmployee(true)}>
            Add Employee
          </button>
        </div>
      </ul>

      {addEmployee && <AddEmployee onClick={() => setAddEmployee(false)} />}
    </div>
  );
};

export default Body;
