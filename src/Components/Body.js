import React, { useState, useEffect } from "react";
import AddEmployeeModal from "./AddEmployeeModal";
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
    width: "16%",
  },
  tabHeader: {
    border: "1px solid",
    padding: "8px",
    textAlign: "left",
  },
  btn: {
    marginLeft: "30px",
  },
  tbHeading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

const Body = (props) => {
  const { selectedDeptId, deptDetails, setDeptDetails, setSelectedDeptId } =
    props;
  const [showEmpModal, setShowEmpModal] = useState(false);
  const [showEmpEdit, setShowEmpEdit] = useState(null);
  const [openEditDeptDetails, onDeptEdit] = useState(false);
  const [sortEmpDetl, setSortEmpdetl] = useState(false);

  let selectedDeptObj = deptDetails.find(
    (item) => item.deptId === selectedDeptId
  );

  const onDeptDelete = () => {
    const indexWantsToDelete = deptDetails.indexOf(selectedDeptObj);
    const deptArr1 = deptDetails.slice(0, indexWantsToDelete) || [];
    const deptArr2 = deptDetails.slice(indexWantsToDelete + 1) || [];
    setDeptDetails([...deptArr1, ...deptArr2] || []);
    setSelectedDeptId(null);
  };

  const delEmp = (index) => {
    const toDel = selectedDeptObj.employee || [];
    const selectedDeptObj1 = toDel.slice(0, index);
    const selectedDeptObj2 = toDel.slice(index + 1);
    const newSelectedEmpObj = [...selectedDeptObj1, ...selectedDeptObj2];
    const newSelectedDept = { ...selectedDeptObj, employee: newSelectedEmpObj };

    const selectedIndex = deptDetails.indexOf(selectedDeptObj);

    const deptArr1 = deptDetails.slice(0, selectedIndex);
    const deptArr2 = deptDetails.slice(selectedIndex + 1);
    setDeptDetails([...deptArr1, newSelectedDept, ...deptArr2]);
  };

  const editEmp = (empObj) => {
    setShowEmpEdit(empObj);
  };
  useEffect(() => {
    let sortedArr = null;

    if (sortEmpDetl) {
      sortedArr = selectedDeptObj.employee.sort((a, b) =>
        a.empName > b.empName ? 1 : -1
      );
    } else {
      sortedArr = selectedDeptObj.employee.sort((a, b) =>
        a.empName < b.empName ? 1 : -1
      );
    }

    const newSelectedDept = { ...selectedDeptObj, employee: sortedArr };

    const selectedIndex = deptDetails.indexOf(selectedDeptObj);
    const newDept = deptDetails.splice(selectedIndex, 1, newSelectedDept);
    setDeptDetails(newDept);
  }, [sortEmpDetl]);

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
            <b>Location :</b>
            <span style={styleObj.loc}>{selectedDeptObj.location}</span>
          </li>

          <div style={styleObj.forEmployee}>
            <li>
              <b>No of Employee :</b>
              <span style={styleObj.noe}>
                {selectedDeptObj.employee?.length}
              </span>
            </li>

            <button
              style={styleObj.btn}
              onClick={() => setShowEmpModal(true)}
              onMouseOver={{ backgroundColor: "white" }}
            >
              Add Employee
            </button>
          </div>
        </ul>
      </div>

      {showEmpModal && (
        <AddEmployeeModal
          onClose={() => setShowEmpModal(false)}
          deptDetails={deptDetails}
          setDeptDetails={setDeptDetails}
          // setSelectedDept={setSelectedDept}
          selectedDeptObj={selectedDeptObj}
          // departmentId={departmentId}
        />
      )}

      <div style={tableCss.tableDisplay}>
        <div style={tableCss.tbHeading}>
          <h3>Employee Details</h3>
          <div style={{ width: "40px", height: "40px" }}>
            <button
              style={{ width: "40px", height: "40px" }}
              onClick={() => setSortEmpdetl(!sortEmpDetl)}
            >
              <svg
                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-134msul"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="SortByAlphaIcon"
              >
                <path d="M14.94 4.66h-4.72l2.36-2.36zm-4.69 14.71h4.66l-2.33 2.33zM6.1 6.27 1.6 17.73h1.84l.92-2.45h5.11l.92 2.45h1.84L7.74 6.27H6.1zm-1.13 7.37 1.94-5.18 1.94 5.18H4.97zm10.76 2.5h6.12v1.59h-8.53v-1.29l5.92-8.56h-5.88v-1.6h8.3v1.26l-5.93 8.6z"></path>
              </svg>
            </button>
          </div>
        </div>
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
              <td style={tableCss.tabData} key={"empId"}>
                {item.empId}
              </td>
              <td style={tableCss.tabData} key={"empName"}>
                {item.empName}
              </td>
              <td style={tableCss.tabData} key={"empLoc"}>
                {item.empLoc}
              </td>
              <td style={tableCss.tabData} key={"empPhno"}>
                {item.empPhno}
              </td>
              <td style={tableCss.tabData} key={"empEmail"}>
                {item.empEmail}
              </td>
              <td style={tableCss.tabData} key={"button"}>
                <button onClick={() => editEmp(item)} style={tableCss.btn}>
                  Edit
                </button>
                <button onClick={() => delEmp(index)} style={tableCss.btn}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>

      {showEmpEdit && (
        <EditEmp
          onClose={() => setShowEmpEdit(null)}
          setDeptDetails={setDeptDetails}
          selectedDeptObj={selectedDeptObj}
          editedEmpDetail={showEmpEdit}
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
