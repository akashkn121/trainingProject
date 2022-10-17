import React, { useState } from "react";
const mainContainer = {
  zIndex: "1",
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgb(0,0,0,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const subContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "left",
  backgroundColor: "white",
  width: "44%",
  padding: "10px",
  paddingLeft: "50px",
};

const inputField = {
  display: "flex",
  alignItems: "center",
};

const buttons = {
  display: "flex",
  justifyContent: "space-between",
};

const inputId = {
  marginLeft: "92px",
  height: "30px",
};

const inputName = {
  marginLeft: "66px",
  height: "30px",
};

const inputLoc = {
  marginLeft: "50px",
  height: "30px",
};

const inputPhno = {
  marginLeft: "75px",
  height: "30px",
};

const inputMail = {
  marginLeft: "140px",
  height: "30px",
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

const EditEmp = (props) => {
  const {
    onClose,
    editEmpIndex,
    setDeptDetails,
    selectedDeptObj,
    deptDetails,
  } = props;
  const [tempObj, setTempObj] = useState({});
  const empArrToEdit = selectedDeptObj.employee;

  const handlechange = (value, fieldname) => {
    setTempObj({ ...tempObj, [fieldname]: value });
  };
  const handleClick = () => {
    const empList1 = empArrToEdit.slice(0, editEmpIndex);
    const empList2 = empArrToEdit.slice(editEmpIndex + 1);
    const newEmplist = [...empList1, tempObj, ...empList2];
    const newSelectedDept = { ...selectedDeptObj, employee: newEmplist };

    const selectedIndex = deptDetails.indexOf(selectedDeptObj);

    const deptArr1 = deptDetails.slice(0, selectedIndex);
    const deptArr2 = deptDetails.slice(selectedIndex + 1);
    setDeptDetails([...deptArr1, newSelectedDept, ...deptArr2]);
    onClose();
  };

  return (
    <div style={mainContainer}>
      <div style={subContainer}>
        <h3>Edit Employee:</h3>
        <div style={inputField}>
          <p>Employee Id:</p>
          <input
            name="empId"
            style={inputId}
            defaultValue={selectedDeptObj.employee[editEmpIndex].empId}
            onChange={(e) => handlechange(e.target.value, "empId")}
          />
        </div>
        <div style={inputField}>
          <p>Employee Name:</p>
          <input
            name="empName"
            style={inputName}
            defaultValue={selectedDeptObj.employee[editEmpIndex].empName}
            onChange={(e) => handlechange(e.target.value, "empName")}
          />
        </div>
        <div style={inputField}>
          <p>Employee Location:</p>
          <input
            name="empLoc"
            style={inputLoc}
            defaultValue={selectedDeptObj.employee[editEmpIndex].empLoc}
            onChange={(e) => handlechange(e.target.value, "empLoc")}
          />
        </div>
        <div style={inputField}>
          <p>Phone Number:</p>
          <input
            name="empPhno"
            style={inputPhno}
            defaultValue={selectedDeptObj.employee[editEmpIndex].empPhno}
            onChange={(e) => handlechange(e.target.value, "empPhno")}
          />
        </div>
        <div style={inputField}>
          <p>Email:</p>
          <input
            name="empEmail"
            style={inputMail}
            defaultValue={selectedDeptObj.employee[editEmpIndex].empEmail}
            onChange={(e) => handlechange(e.target.value, "empEmail")}
          />
        </div>
        <div style={buttons}>
          <button style={cnlbtn} onClick={() => onClose()}>
            Cancel
          </button>
          <button style={addbtn} onClick={() => handleClick()}>
            add
          </button>
        </div>
      </div>
    </div>
  );
};
export default EditEmp;
