import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addDept } from "./redux/action/department";

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
    width: "37%",
    padding: "20px",
    height: "max-content",
    border: "1px solid gray",
    display: "flex",
    flexDirection: "column",
  },
  btnInModalContent: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
};

function AddDeptModal({ onClose }) {
  const dispatch = useDispatch();
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
      dispatch(addDept(temtDept));
      onClose();
    }
  };

  return (
    <Box sx={styleObj.modal}>
      <Box sx={styleObj.modalContent}>
        <Typography variant="h5">Add Department Details</Typography>

        <TextField
          varient="Filled"
          label="Department Name"
          sx={{ marginTop: "20px", width: "500px" }}
          value={deptObj.deptName}
          onChange={(e) => handleChange(e.target.value, "deptName")}
          placeholder="Enter the Department name"
          onKeyPress={(e) => handleKeyPress(e)}
        />

        <TextField
          varient="Filled"
          label="Manager"
          sx={{ marginTop: "20px", width: "500px" }}
          value={deptObj.managerName}
          onChange={(e) => handleChange(e.target.value, "managerName")}
          placeholder="Enter the Manager name"
        />

        <TextField
          varient="Filled"
          label="Location"
          sx={{ marginTop: "20px", width: "500px" }}
          value={deptObj.location}
          onChange={(e) => handleChange(e.target.value, "location")}
          placeholder="Enter the Location"
        />

        <Box sx={styleObj.btnInModalContent}>
          <Button
            varient="contained"
            sx={{ backgroundColor: "red", color: "black" }}
            onClick={() => onClose()}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "green", color: "black" }}
            onClick={() => onAddClick()}
          >
            Add
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AddDeptModal;
