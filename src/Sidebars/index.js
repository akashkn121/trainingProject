import React, { useState } from "react";
import Modal from "../Modal";
import "./index.css";

const SideBar = (props) => {
  const { setSelectedDept } = props;
  const [showModal, setShowModal] = useState(false);
  const [deptDetails, setDeptDetails] = useState([]);

  return (
    <div id="mainBar">
      <div>
        <ul>
          {deptDetails.map((item, index) => (
            <h4 onClick={() => setSelectedDept(item)} key={index}>
              {item.deptName}
            </h4>
          ))}
        </ul>
      </div>

      <div id="add">
        <button id="add_button" onClick={() => setShowModal(true)}>
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
