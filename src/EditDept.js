import React, {  useState } from "react";

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
};

const inputMgr = {
  marginLeft: "100px",
};

const inputLoc = {
  marginLeft: "100px",
};

const EditDept = (props) => {
  const { onClose, selectedDeptObj, deptDetails, setDeptDetails } = props;
  const [newSelecterDeptObj, setNewSelectedDeptObj] = useState(null);

  const handleChange = (value, fieldName) => {
    setNewSelectedDeptObj({ ...selectedDeptObj, [fieldName]: value });
  };

  const handleClick = () => {
    const indexOfSelectedObj = deptDetails.indexOf(selectedDeptObj);

    const deptArr1 = deptDetails.slice(0, indexOfSelectedObj);
    const deptArr2 = deptDetails.slice(indexOfSelectedObj + 1);
    setDeptDetails(...deptArr1, newSelecterDeptObj, ...deptArr2);
    onClose();
  };

  return (
    <div>
      <div style={mainContainer}>
        <div style={subContainer}>
          <div style={inputField}>
            <p>Department Name:</p>
            <input
              style={inputName}
              value={selectedDeptObj.deptName}
              onChange={(e) => handleChange(e.target.value, "deptName")}
            />
          </div>
          <div style={inputField}>
            <p>Manager:</p>
            <input
              style={inputMgr}
              value={selectedDeptObj.managerName}
              onChange={(e) => handleChange(e.target.value, "managerName")}
            />
          </div>
          <div style={inputField}>
            <p>Location:</p>
            <input
              style={inputLoc}
              value={selectedDeptObj.location}
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
