import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import axios from "axios";
import { API_PATH, EDIT_USER } from "./../config/const";
import { useSelector, useDispatch } from "react-redux";
import { getloggedUser } from "./redux/reducer/login";
import { loggedUser } from "./redux/action/login";

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
  editInput: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
  },
};

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [editMenu, setEditMenu] = useState(null);
  const openEditMenu = Boolean(editMenu);
  const [editedUser, setEditedUser] = useState(null);
  const userLoggedIn = useSelector(getloggedUser);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEditMenu = (event) => {
    setEditMenu(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (value, fieldName) => {
    setEditedUser({ ...editedUser, [fieldName]: value });
  };

  const handleEditUser = () => {
    axios
      .post(`${API_PATH}${EDIT_USER}`, {
        params: {
          action: "EDIT",
          userId: userLoggedIn.userId,
          userName: editedUser.user_name,
          userEmail: editedUser.user_email,
          password: editedUser.user_password,
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(loggedUser(response.data[0][0]));
      });
    setEditMenu(null);
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
      <div style={{ marginRight: "80px" }}>
        <Button onClick={handleClick}>{userLoggedIn.user_name || null}</Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <li>User Id:{userLoggedIn.userId}</li>
          <li>UserName:{userLoggedIn.user_name || null}</li>
          <li>EmailId:{userLoggedIn.user_email || null}</li>
        </Menu>
        <EditIcon onClick={handleEditMenu}></EditIcon>
        <Box>
          <Menu
            anchorEl={editMenu}
            open={openEditMenu}
            onClose={() => setEditMenu(null)}
            style={headerCss.editInput}
          >
            <TextField
              id="outlined-basic"
              label="User Name"
              variant="outlined"
              onChange={(e) => {
                handleChange(e.target.value, "user_name");
              }}
            />
            <TextField
              id="outlined-basic"
              label="User Email"
              variant="outlined"
              onChange={(e) => {
                handleChange(e.target.value, "user_email");
              }}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              onChange={(e) => {
                handleChange(e.target.value, "user_password");
              }}
            />
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                onClick={() => setEditMenu(null)}
                style={{ color: "red" }}
              >
                Close
              </Button>
              <Button
                style={{ color: "green" }}
                onClick={() => handleEditUser()}
              >
                Edit
              </Button>
            </Box>
          </Menu>
        </Box>
      </div>
    </div>
  );
};
export default Header;
