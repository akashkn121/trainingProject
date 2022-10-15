import React, { useState } from "react";
import AddEmployee from "./AddEmployee";
import EditDept from "./EditDept";
import EditEmp from "./EditEmp";

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
const noe = {
  paddingLeft: "25px",
};
const forEmployee = {
  display: "flex",
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
  marginLeft: "134px",
};

const table = {
  border: "1px solid",
  padding: "5px",
  marginTop: "5px",
  borderCollapse: "collapse",
  width: "100%",
};

const tableDisplay = {
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  paddingRight: "20px",
};

const tabData = {
  border: "1px solid",
  padding: "8px",
  textAlign: "left",
};

const tabHeader = {
  border: "1px solid",
  padding: "8px",
  textAlign: "left",
};

const deptDetailsEditor = {
  display: "flex",
  alignItems: "center",
};

const delbtn = {
  marginLeft: "50px",
  height: "37px",
  backgroundColor: "#e90404",
  color: "white",
  borderRadius: "8px",
};

const edtbtn = {
  marginLeft: "50px",
  height: "37px",
  backgroundColor: "blue",
  color: "white",
  borderRadius: "8px",
  width: "54px",
};

const deleteButton = {
  border: "1px solid",
  padding: "8px",
  textAlign: "left",
  display: "flex",
  flexDirection: "row",
};

const rowCss = {};

const Body = (props) => {
  const { selectedDeptId, deptDetails, setDeptDetails } = props;
  const [showEmpModal, setShowEmpModal] = useState(false);
  const [delEmpIndex, setDelEmpIndex] = useState(null);
  const [showEmpEdit, setShowEmpEdit] = useState(false);
  const [dailogOpen, setDailogOpen] = useState(false);
  const [editEmpIndex, setEditEmpIndex] = useState(null);
  const [openEditDeptDetails, setOpenEditDeptDetails] = useState(false);

  const selectedDeptObj = deptDetails.find(
    (item) => item.deptId === selectedDeptId
  );

  const deletDept = () => {
    const indexWantsToDelete = deptDetails.indexOf(selectedDeptObj);
    const deptArr1 = deptDetails.slice(0, indexWantsToDelete);
    const deptArr2 = deptDetails.slice(indexWantsToDelete + 1);
    setDeptDetails([...deptArr1, ...deptArr2]);
  };

  const handleOnClick = (index) => {
    setDailogOpen(true);
    setDelEmpIndex(index);
  };

  const delEmp = () => {
    const toDel = selectedDeptObj.employee || [];
    const selectedDeptObj1 = toDel.slice(0, delEmpIndex);
    const selectedDeptObj2 = toDel.slice(delEmpIndex + 1);
    const newSelectedEmpObj = [...selectedDeptObj1, ...selectedDeptObj2];
    const newSelectedDept = { ...selectedDeptObj, employee: newSelectedEmpObj };

    const selectedIndex = deptDetails.indexOf(selectedDeptObj);

    const deptArr1 = deptDetails.slice(0, selectedIndex);
    const deptArr2 = deptDetails.slice(selectedIndex + 1);
    setDeptDetails([...deptArr1, newSelectedDept, ...deptArr2]);
    setDailogOpen(false);
  };

  const editEmp = (index) => {
    setShowEmpEdit(true);
    setEditEmpIndex(index);
  };

  return (
    <div style={body}>
      <div>
        <ul style={list}>
          <div style={deptDetailsEditor}>
            <h3>Department Details</h3>
            <button style={delbtn} onClick={() => deletDept()}>
              Delete
            </button>
            <button style={edtbtn} onClick={() => setOpenEditDeptDetails(true)}>
              Edit
            </button>
          </div>
          <li>
            <b>Department Name :</b>
            <span style={dName}>{selectedDeptObj.deptName}</span>
          </li>

          <li style={lists}>
            <b>Manager Name :</b>
            <span style={mng}>{selectedDeptObj.managerName}</span>
          </li>

          <li style={lists}>
            <b>Location :</b>{" "}
            <span style={loc}>{selectedDeptObj.location}</span>
          </li>

          <div style={forEmployee}>
            <li>
              <b>No of Employee :</b>
              <span style={noe}>{selectedDeptObj.employee?.length}</span>
            </li>

            <button style={btn} onClick={() => setShowEmpModal(true)}>
              Add Employee
            </button>
          </div>
        </ul>
      </div>

      {showEmpModal && (
        <AddEmployee
          onClose={() => setShowEmpModal(false)}
          deptDetails={deptDetails}
          setDeptDetails={setDeptDetails}
          // setSelectedDept={setSelectedDept}
          selectedDeptObj={selectedDeptObj}
          // departmentId={departmentId}
        />
      )}

      <div style={tableDisplay}>
        <h3>Employee Details</h3>
        <table style={table}>
          <tr style={rowCss}>
            <th style={tabHeader}>Id</th>
            <th style={tabHeader}>Name</th>
            <th style={tabHeader}>Location</th>
            <th style={tabHeader}>Phone Number</th>
            <th style={tabHeader}>Email</th>
            <th style={tabHeader}>Edit</th>
            <th style={tabHeader}>Delete</th>
          </tr>
          {selectedDeptObj.employee.map((item, index) => (
            <tr>
              <td style={tabData}>{item.empId}</td>
              <td style={tabData}>{item.empName}</td>
              <td style={tabData}>{item.empLoc}</td>
              <td style={tabData}>{item.empPhno}</td>
              <td style={tabData}>{item.empEmail}</td>
              <td style={tabData}>
                <button onClick={() => editEmp(index)}>Edit</button>
              </td>
              <td style={deleteButton}>
                <button onClick={() => handleOnClick(index)}>Delete</button>
                <dialog open={dailogOpen}>
                  <button onClick={() => delEmp()}>conform</button>
                </dialog>
              </td>
            </tr>
          ))}
        </table>
      </div>
      {showEmpEdit && (
        <EditEmp
          onClose={() => setShowEmpEdit(false)}
          editEmpIndex={editEmpIndex}
          setDeptDetails={setDeptDetails}
          selectedDeptObj={selectedDeptObj}
          deptDetails={deptDetails}
        />
      )}
      {openEditDeptDetails && (
        <EditDept
          onClose={() => setOpenEditDeptDetails(false)}
          selectedDeptObj={selectedDeptObj}
          deptDetails={deptDetails}
          setDeptDetails={setDeptDetails}
        />
      )}
    </div>
  );
};

export default Body;
