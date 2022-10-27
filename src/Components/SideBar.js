import React, { useState } from "react";
import AddDeptModal from "./AddDeptModal";
import { useSelector } from "react-redux";
import { getDeptList } from "./redux/reducer/deparment";

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

const SideBar = ({ setSelectedDeptId }) => {
  const deptDetails = useSelector(getDeptList);
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

      {showModal && <AddDeptModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default SideBar;
