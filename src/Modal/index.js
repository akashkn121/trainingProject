import React, { useState } from "react";
import "./index.css";

const inputCssDeptname = {
  height: "30px",
  width: "300px",
  marginLeft: "57px",
  justifyContent: "center",
};
const fieldContainer = {
  display: "flex",
  alignItems: "center",
};

const inputCss = {
  height: "30px",
  width: "300px",
  margin: "auto",
  justifyContent: "center",
};
const btnadd = {
  height: "36px",
  width: "90px",
  borderRadius: "8px",
  backgroundColor: "green",
};
const btnCancel = {
  height: "36px",
  width: "90px",
  borderRadius: "8px",
  backgroundColor: "red",
};

function Modal(props) {
  const { onClose, setDeptDetails, deptDetails } = props;
  const [deptObj, setDeptObj] = useState({
    managerName: "",
    deptName: "",
    location: "",
    employee:[]
  });

  const handleChange = (value, fieldName) => {
    const tempObj = { ...deptObj, [fieldName]: value };
    setDeptObj(tempObj);

    /*
    setDeptObj({ ...deptObj, [fieldName]: value });
    */
  };
  const handleClick = () => {
    if (deptObj.deptName !== "") {
      const deptId = new Date().valueOf();
      const temtDept = { ...deptObj, deptId: deptId };
      setDeptDetails([...deptDetails, temtDept]);
    }
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h4>
          <u>Add Department Details</u>
        </h4>

        <div style={fieldContainer}>
          <p>Department Name:</p>
          <input
            style={inputCssDeptname}
            type="text"
            name="deptName"
            value={deptObj.deptName}
            onChange={(e) => handleChange(e.target.value, "deptName")}
            placeholder="Enter the Department name"
          />
        </div>
        
        <div style={fieldContainer}>
          <p>Manager:</p>
          <input
            style={inputCss}
            type="text"
            name="Manager"
            value={deptObj.managerName}
            onChange={(e) => handleChange(e.target.value, "managerName")}
            placeholder="Enter the Manager name"
          />
        </div>

        <div style={fieldContainer}>
          <p>Location:</p>
          <input
            style={inputCss}
            type="text"
            name="Location"
            value={deptObj.location}
            onChange={(e) => handleChange(e.target.value, "location")}
            placeholder="Enter the Location"
          />
        </div>

        <div className="btn">
          <button style={btnCancel} onClick={() => onClose()}>
            Cancel
          </button>
          <button style={btnadd} onClick={() => handleClick()}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
