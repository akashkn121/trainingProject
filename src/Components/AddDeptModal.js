import React, { useState } from "react";

const styleObj = {
  list: {
    textAlign: "left",
  },
  input: {
    marginLeft: "20px",
  },
  modal: {
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "1",
    width: "100%",
    height: "100%",
    top: "0",
    backgroundColor: "rgb(0, 0, 0, 0.4)",
  },
  modalContent: {
    backgroundColor: "white",
    margin: "auto",
    width: "46%",
    padding: "20px",
    height: "max-content",
    border: "1px solid gray",
    display: "flex",
    flexDirection: "column",
  },
  btnInModalContent: {
    display: "flex",
    justifyContent: "space-between",
  },
};
const star = {
  color: "red",
  display: "inline-flex",
};
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

function AddDeptModal(props) {
  const { onClose, setDeptDetails, deptDetails } = props;
  const [deptObj, setDeptObj] = useState({
    managerName: "",
    deptName: "",
    location: "",
    employee: [],
  });

  const handleChange = (value, fieldName) => {
    const tempObj = { ...deptObj, [fieldName]: value };
    setDeptObj(tempObj);

    /*
    setDeptObj({ ...deptObj, [fieldName]: value });
    */
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onAddClick();
    }
  };

  const onAddClick = () => {
    if (deptObj.deptName !== "") {
      const deptId = new Date().valueOf();
      const temtDept = { ...deptObj, deptId: deptId };
      setDeptDetails([...deptDetails, temtDept]);
      onClose();
    }
  };

  return (
    <div style={styleObj.modal}>
      <div style={styleObj.modalContent}>
        <h4>
          <u>Add Department Details</u>
        </h4>

        <div style={fieldContainer}>
          <p>
            Department Name<span style={star}>*</span>:
          </p>
          <input
            style={inputCssDeptname}
            type="text"
            name="deptName"
            value={deptObj.deptName}
            onChange={(e) => handleChange(e.target.value, "deptName")}
            placeholder="Enter the Department name"
            onKeyPress={(e) => handleKeyPress(e)}
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

        <div style={styleObj.btnInModalContent}>
          <button style={btnCancel} onClick={() => onClose()}>
            Cancel
          </button>
          <button style={btnadd} onClick={() => onAddClick()}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddDeptModal;
