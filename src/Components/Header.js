import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const headerCss = {
  subContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    listStyle: "none",
    padding: "10px",
    width: "30%",
  },
  profBtn: {
    marginLeft: "800px",
  },
};
const Header = () => {
  const history = useHistory();
  return (
    <div style={{ display: "flex" }}>
      <ul style={headerCss.subContainer}>
        <li>
          <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "black" }}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div>
        <button
          onClick={() => history.push("/profileDetails")}
          style={headerCss.profBtn}
        >
          Profile
        </button>
      </div>
    </div>
  );
};
export default Header;
