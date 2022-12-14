import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editData } from "./redux/action/department";
import { getDeptList } from "./redux/reducer/deparment";

const mainContainer = {
  position: "fixed",
  zIndex: "1",
  backgroundColor: "rgb(0,0,0,0.4)",
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: "0",
  left: "0",
  //   paddingTop: "7%",
};

const subContainer = {
  backgroundColor: "white",
  margin: "auto",
  width: "max-content",
  padding: "20px",
  height: "max-content",
  display: "flex",
  flexDirection: "column",
};

const inputcontent = {
  display: "flex",
};
const inputId = {
  height: "25px",
  width: "300px",
  margin: "auto",
  justifyContent: "center",
  marginLeft: "86px",
};

const inputloc = {
  height: "25px",
  width: "300px",
  margin: "auto",
  justifyContent: "center",
  marginLeft: "39px",
};

const inputPhno = {
  height: "25px",
  width: "300px",
  margin: "auto",
  justifyContent: "center",
  marginLeft: "63px",
};

const inputEmail = {
  height: "25px",
  width: "300px",
  margin: "auto",
  justifyContent: "center",
  marginLeft: "133px",
};
const inputName = {
  height: "25px",
  width: "300px",
  margin: "auto",
  justifyContent: "center",
  marginLeft: "55px",
};

const addbtn = {
  width: "55px",
  height: "30px",
  backgroundColor: "green",
  borderRadius: "8px",
};

const cnlbtn = {
  width: "55px",
  height: "30px",
  backgroundColor: "red",
  borderRadius: "8px",
};

const buttons = {
  display: "flex",
  justifyContent: "space-between",
};

const AddEmployeeModal = (props) => {
  const deptDetails = useSelector(getDeptList);
  const dispatch = useDispatch();
  const { onClose, selectedDeptObj } = props;
  const [empObj, setempObj] = useState({});

  const handleClick = () => {
    const employeeArr = selectedDeptObj.employee || [];
    const newEmpArr = [...employeeArr, empObj];
    const newSelectedDeptObj = { ...selectedDeptObj, employee: newEmpArr };
    const selectedIndex = deptDetails.indexOf(selectedDeptObj);

    const deptArr1 = deptDetails.slice(0, selectedIndex);
    const deptArr2 = deptDetails.slice(selectedIndex + 1);
    dispatch(editData([...deptArr1, newSelectedDeptObj, ...deptArr2]));

    onClose();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const handleChange = (value, fieldName) => {
    setempObj({ ...empObj, [fieldName]: value });
  };

  return (
    <div style={mainContainer}>
      <div style={subContainer}>
        <h3>Add Employee:</h3>
        <div style={inputcontent}>
          <p>Employee Id :</p>
          <input
            type="text"
            name="empId"
            value={empObj.empId}
            style={inputId}
            onChange={(e) => handleChange(e.target.value, "empId")}
            onKeyPress={(e) => handleKeyPress(e)}
          />
        </div>

        <div style={inputcontent}>
          <p>Employee Name :</p>
          <input
            type="text"
            name="empName"
            value={empObj.empName}
            style={inputName}
            onChange={(e) => handleChange(e.target.value, "empName")}
          />
        </div>

        <div style={inputcontent}>
          <p>Employee Location :</p>
          <input
            type="text"
            name="empLoc"
            value={empObj.empLoc}
            style={inputloc}
            onChange={(e) => handleChange(e.target.value, "empLoc")}
          />
        </div>

        <div style={inputcontent}>
          <p>Phone Number :</p>
          <input
            type="text"
            name="empPhno"
            value={empObj.empPhno}
            style={inputPhno}
            onChange={(e) => handleChange(e.target.value, "empPhno")}
          />
        </div>

        <div style={inputcontent}>
          <p>Email :</p>
          <input
            type="email"
            name="empEmail"
            value={empObj.empEmail}
            style={inputEmail}
            onChange={(e) => handleChange(e.target.value, "empEmail")}
          />
        </div>

        <div style={buttons}>
          <button style={cnlbtn} onClick={() => onClose()}>
            Cancel
          </button>
          <button style={addbtn} onClick={() => handleClick()}>
            Add
          </button>
          <Button
            className={"action-color"}
            variant="contained"
            color="primary"
          >
            EDIT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
