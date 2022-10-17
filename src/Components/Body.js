import React, { useState } from "react";
import AddEmployee from "./AddEmployee";
import EditDept from "./EditDept";
import EditEmp from "./EditEmp";

const styleObj = {
  list: {
    listStyle: "none",
  },
  lists: {
    disply: "flex",
  },
  mng: {
    paddingLeft: "32px",
  },
  loc: {
    paddingLeft: "80px",
  },
  dName: {
    paddingLeft: "11px",
  },
  noe: {
    paddingLeft: "25px",
  },
  forEmployee: {
    display: "flex",
    width: "65%",
  },
  btn: {
    width: "120px",
    height: "max-content",
    borderRadius: "8px",
    backgroundColor: "#0101f7a6",
    color: "white",
    marginLeft: "134px",
  },
  body: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  deptDetailsEditor: {
    display: "flex",
    alignItems: "center",
  },
  delbtn: {
    marginLeft: "50px",
    height: "30px",
    backgroundColor: "#e90404",
    color: "white",
    borderRadius: "8px",
  },
  edtbtn: {
    marginLeft: "50px",
    height: "30px",
    backgroundColor: "green",
    color: "white",
    borderRadius: "8px",
    width: "54px",
  },
  deleteButton: {
    border: "1px solid",
    padding: "8px",
    textAlign: "left",
    display: "flex",
    flexDirection: "row",
  },
  dailog: {
    marginRight: "20px",
  },
};
const tableCss = {
  table: {
    border: "1px solid",
    padding: "5px",
    marginTop: "5px",
    borderCollapse: "collapse",
    width: "100%",
  },
  tableDisplay: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    paddingRight: "20px",
  },
  tabData: {
    border: "1px solid",
    padding: "8px",
    textAlign: "left",
  },
  tabHeader: {
    border: "1px solid",
    padding: "8px",
    textAlign: "left",
  },
};

const Body = (props) => {
  const { selectedDeptId, deptDetails, setDeptDetails, setSelectedDeptId } =
    props;
  const [showEmpModal, setShowEmpModal] = useState(false);
  const [delEmpIndex, setDelEmpIndex] = useState(null);
  const [showEmpEdit, setShowEmpEdit] = useState(false);
  const [dailogOpen, setDailogOpen] = useState(false);
  const [editEmpIndex, setEditEmpIndex] = useState(null);
  const [openEditDeptDetails, onDeptEdit] = useState(false);

  const selectedDeptObj = deptDetails.find(
    (item) => item.deptId === selectedDeptId
  );

  const onDeptDelete = () => {
    const indexWantsToDelete = deptDetails.indexOf(selectedDeptObj);
    const deptArr1 = deptDetails.slice(0, indexWantsToDelete) || [];
    const deptArr2 = deptDetails.slice(indexWantsToDelete + 1) || [];
    setDeptDetails([...deptArr1, ...deptArr2] || []);
    setSelectedDeptId(null);
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
    <div style={styleObj.body}>
      <div>
        <ul style={styleObj.list}>
          <div style={styleObj.deptDetailsEditor}>
            <h3>Department Details</h3>
            <button style={styleObj.delbtn} onClick={() => onDeptDelete()}>
              Delete
            </button>
            <button style={styleObj.edtbtn} onClick={() => onDeptEdit(true)}>
              Edit
            </button>
          </div>
          <li>
            <b>Department Name :</b>
            <span style={styleObj.dName}>{selectedDeptObj.deptName}</span>
          </li>

          <li style={styleObj.lists}>
            <b>Manager Name :</b>
            <span style={styleObj.mng}>{selectedDeptObj.managerName}</span>
          </li>

          <li style={styleObj.lists}>
            <b>Location :</b>{" "}
            <span style={styleObj.loc}>{selectedDeptObj.location}</span>
          </li>

          <div style={styleObj.forEmployee}>
            <li>
              <b>No of Employee :</b>
              <span style={styleObj.noe}>
                {selectedDeptObj.employee?.length}
              </span>
            </li>

            <button style={styleObj.btn} onClick={() => setShowEmpModal(true)}>
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

      <div style={tableCss.tableDisplay}>
        <h3>Employee Details</h3>
        <table style={tableCss.table}>
          <tr>
            <th style={tableCss.tabHeader}>Id</th>
            <th style={tableCss.tabHeader}>Name</th>
            <th style={tableCss.tabHeader}>Location</th>
            <th style={tableCss.tabHeader}>Phone Number</th>
            <th style={tableCss.tabHeader}>Email</th>
            <th style={tableCss.tabHeader}>Edit/Delete</th>
          </tr>
          {selectedDeptObj.employee.map((item, index) => (
            <tr>
              <td style={tableCss.tabData} key={index}>
                {item.empId}
              </td>
              <td style={tableCss.tabData} key={index}>
                {item.empName}
              </td>
              <td style={tableCss.tabData} key={index}>
                {item.empLoc}
              </td>
              <td style={tableCss.tabData} key={index}>
                {item.empPhno}
              </td>
              <td style={tableCss.tabData} key={index}>
                {item.empEmail}
              </td>
              <td style={tableCss.tabData} key={index}>
                <button onClick={() => editEmp(index)}>Edit</button>
                <button onClick={() => handleOnClick(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </table>
        <dialog open={dailogOpen} style={styleObj.dailog}>
          <button onClick={() => delEmp()}>confirm</button>
        </dialog>
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
          onClose={() => onDeptEdit(false)}
          selectedDeptObj={selectedDeptObj}
          deptDetails={deptDetails}
          setDeptDetails={setDeptDetails}
        />
      )}
    </div>
  );
};

export default Body;
