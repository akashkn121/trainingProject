import React from "react";
import { Link } from "react-router-dom";

const headerCss = {
  subContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    listStyle: "none",
    padding: "10px",
    width: "30%",
  },
};
const Header = () => {
  return (
    <div>
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
    </div>
  );
};
export default Header;
