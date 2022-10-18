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
    setDeptDetails,
    selectedDeptObj,
    editedEmpDetail,
    deptDetails,
  } = props;
  const [tempObj, setTempObj] = useState(editedEmpDetail || {});
  const empArrToEdit = selectedDeptObj.employee;

  const handlechange = (value, fieldname) => {
    setTempObj({ ...tempObj, [fieldname]: value });
  };

  const handleClick = () => {
    const editedEmpindex = empArrToEdit.indexOf(editedEmpDetail);
    const empList1 = empArrToEdit.slice(0, editedEmpindex);
    const empList2 = empArrToEdit.slice(editedEmpindex + 1);
    const newEmplist = [...empList1, tempObj, ...empList2];
    const newSelectedDept = { ...selectedDeptObj, employee: newEmplist };

    const selectedIndex = deptDetails.indexOf(selectedDeptObj);

    const deptArr1 = deptDetails.slice(0, selectedIndex);
    const deptArr2 = deptDetails.slice(selectedIndex + 1);
    setDeptDetails([...deptArr1, newSelectedDept, ...deptArr2]);
    onClose();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
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
            value={tempObj?.empId}
            onChange={(e) => handlechange(e.target.value, "empId")}
            onKeyPress={(e) => handleKeyPress(e)}
          />
        </div>
        <div style={inputField}>
          <p>Employee Name:</p>
          <input
            name="empName"
            value={tempObj?.empName}
            style={inputName}
            onChange={(e) => handlechange(e.target.value, "empName")}
          />
        </div>
        <div style={inputField}>
          <p>Employee Location:</p>
          <input
            name="empLoc"
            value={tempObj?.empLoc}
            style={inputLoc}
            onChange={(e) => handlechange(e.target.value, "empLoc")}
          />
        </div>
        <div style={inputField}>
          <p>Phone Number:</p>
          <input
            name="empPhno"
            value={tempObj?.empPhno}
            style={inputPhno}
            onChange={(e) => handlechange(e.target.value, "empPhno")}
          />
        </div>
        <div style={inputField}>
          <p>Email:</p>
          <input
            name="empEmail"
            value={tempObj?.empEmail}
            style={inputMail}
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
