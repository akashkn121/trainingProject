import React, { useState } from "react";

const mainContainer = {
  position: "fixed",
  top: "0",
  left: "0",
  backgroundColor: "rgb(0,0,0,0.4)",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "1",
};

const subContainer = {
  backgroundColor: "white",
  width: "32%",
  padding: "10px",
};

const inputField = {
  display: "flex",
  alignItems: "center",
};

const buttons = {
  display: "flex",
  justifyContent: "space-between",
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

const inputName = {
  marginLeft: "34px",
  height: "30px",
};

const inputMgr = {
  marginLeft: "100px",
  height: "30px",
};

const inputLoc = {
  marginLeft: "100px",
  height: "30px",
};

const EditDept = (props) => {
  const { onClose, selectedDeptObj, deptDetails, setDeptDetails } = props;
  const [tempObj, setTempObj] = useState(selectedDeptObj || {});

  const handleChange = (value, fieldName) => {
    setTempObj({ ...tempObj, [fieldName]: value });
  };

  const handleClick = () => {
    const indexOfSelectedObj = deptDetails.indexOf(selectedDeptObj);
    const newSelectedDeptObj = { ...selectedDeptObj, ...tempObj };
    const deptArr1 = deptDetails.slice(0, indexOfSelectedObj) || [];
    const deptArr2 = deptDetails.slice(indexOfSelectedObj + 1) || [];
    setDeptDetails([...deptArr1, newSelectedDeptObj, ...deptArr2]);
    onClose();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div>
      <div style={mainContainer}>
        <div style={subContainer}>
          <h3>Edit Department Details:</h3>
          <div style={inputField}>
            <p>Department Name:</p>
            <input
              name="deptName"
              style={inputName}
              value={tempObj.deptName}
              onChange={(e) => handleChange(e.target.value, "deptName")}
              onKeyPress={(e) => handleKeyPress(e)}
            />
          </div>
          <div style={inputField}>
            <p>Manager:</p>
            <input
              name="managerName"
              style={inputMgr}
              value={tempObj.managerName}
              onChange={(e) => handleChange(e.target.value, "managerName")}
            />
          </div>
          <div style={inputField}>
            <p>Location:</p>
            <input
              name="location"
              style={inputLoc}
              value={tempObj.location}
              onChange={(e) => handleChange(e.target.value, "location")}
            />
          </div>
          <div style={buttons}>
            <button onClick={() => onClose()} style={cnlbtn}>
              Cancel
            </button>
            <button style={addbtn} onClick={() => handleClick()}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditDept;
