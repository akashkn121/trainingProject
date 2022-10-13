import React from "react";

const mainContainer = {
  position: "fixed",
  zIndex: "1",
  backgroundColor: "rgb(0,0,0,0.4)",
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  //   paddingTop: "7%",
};

const subContainer = {
  backgroundColor: "white",
  margin: "auto",
  width: "40%",
  padding: "20px",
  height: "max-content",
  display: "flex",
  flexDirection: "column",
};

const inputcontent = {
  display: "flex",
};
const inputId = {
  height: "25px",
  width: "300px",
  margin: "auto",
  justifyContent: "center",
  marginLeft: "86px",
};

const inputloc = {
  height: "25px",
  width: "300px",
  margin: "auto",
  justifyContent: "center",
  marginLeft: "39px",
};

const input = {
  height: "25px",
  width: "300px",
  margin: "auto",
  justifyContent: "center",
};

const addbtn = {
  width: "50px",
  height: "30px",
  backgroundColor: "green",
};

const cnlbtn = {
  width: "50px",
  height: "30px",
  backgroundColor: "red",
};

const buttons = {
  display: "flex",
  justifyContent: "space-between",
};

const AddEmployee = (props) => {
  const { onClick } = props;

  const handleClick = () => {
    onClick();
  };

  return (
    <div style={mainContainer}>
      <div style={subContainer}>
        <div style={inputcontent}>
          <p>Employee Name :</p>
          <input style={input} />
        </div>

        <div style={inputcontent}>
          <p>Employee Id :</p>
          <input style={inputId} />
        </div>

        <div style={inputcontent}>
          <p>Employee Location :</p>
          <input style={inputloc} />
        </div>

        <div style={buttons}>
          <button style={addbtn} onClick={() => handleClick()}>
            Add
          </button>
          <button style={cnlbtn} onClick={() => onClick()}>
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddEmployee;
