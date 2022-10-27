import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getloggedUser } from "./redux/reducer/login";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { useState } from "react";

const headerCss = {
  subContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    listStyle: "none",
    width: "30%",
  },
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

const Header = () => {
  const loggedUser = useSelector(getloggedUser);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={headerCss.main}>
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

      {/* <div style={{ listStyle: "none", marginRight: "80px", fontWeight: 600 }}>
        {loggedUser.userName}
        <li>User Name :{loggedUser.userName}</li>
        <li>Email Id :{loggedUser.emailId}</li>
      </div> */}

      <div style={{ marginRight: "80px" }}>
        <Button onClick={handleClick}>{loggedUser.userName}</Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <li>UserName:{loggedUser.userName}</li>
          <li>EmailId:{loggedUser.emailId}</li>
        </Menu>
      </div>
    </div>
  );
};
export default Header;
