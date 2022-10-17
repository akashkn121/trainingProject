import React, { useState } from "react";
import Modal from "./Modal";

const styleObj = {
  mainBar: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  add: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingTop: "15px",
  },
  add_button: {
    width: "90px",
    height: "36px",
    borderRadius: "8px",
    backgroundColor: "darkkhaki",
  },
  h4: {
    textAlign: "start",
  },
};

const SideBar = ({ deptDetails, setDeptDetails, setSelectedDeptId }) => {
  // const { deptDetails, setDeptDetails, setSelectedDeptId } = props;
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={styleObj.mainBar}>
      <div>
        <ul>
          {deptDetails.map((item, index) => (
            <h4
              key={index}
              style={styleObj.h4}
              onClick={() => setSelectedDeptId(item.deptId)}
            >
              {item.deptName}
            </h4>
          ))}
        </ul>
      </div>

      <div style={styleObj.add}>
        <button style={styleObj.add_button} onClick={() => setShowModal(true)}>
          Add
        </button>
      </div>

      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          setDeptDetails={setDeptDetails}
          deptDetails={deptDetails}
        />
      )}
    </div>
  );
};

export default SideBar;
