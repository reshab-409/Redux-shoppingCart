// import React from "react";
// import { useDispatch } from "react-redux";
// import Cart from "./Cart";
// import "./Header.css";
// import Avatar from '@mui/material/Avatar';
// import { authActions } from "../store/Auth-slice";
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import { useNavigate } from "react-router-dom";

// const Header = () => {
//   const loginData = window.localStorage.getItem("userData");
//   const loggedIn = window.localStorage.getItem("isLoggedIn");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

// const Logout = () => {
//   dispatch(authActions.Logout());
//   window.location.reload();
// };

// const Login = () => {
//   navigate("/")
// };

//   return (
//     <header>
//       <nav className="header-nav">
//         <ul className="header-ul">
//           <li>
//             <h2
//               className="header-h2"
//               style={{ fontFamily: "monospace", fontSize: "30px" }}
//             >
//               Redux Shopping App
//             </h2>
//           </li>
//           <Stack direction="row" spacing={2} sx={{ marginTop: '12px' }}>
//             <Avatar src="/broken-image.jpg" />
//             <h3 style={{ marginTop: "7px" }}>{loginData}</h3>
//           </Stack>
//           <li>
//             <Cart />
//           </li>
//           <li>
//             {!loggedIn && <Button sx={{ marginTop: "3px" }} variant="contained" color="success" onClick={Login}>Login First</Button>}
//             {loggedIn && <Button sx={{ marginTop: "3px" }} variant="contained" color="error" onClick={Logout}>Logout</Button>}
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
//new one

import Cart from "./Cart";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/Auth-slice';
import { deepOrange } from '@mui/material/colors';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedIn = window.localStorage.getItem("isLoggedIn");
  const loginData = window.localStorage.getItem("userData");
  const Logout = () => {
    dispatch(authActions.Logout());
    window.location.reload();
  };

  const Login = () => {
    navigate("/")
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: '#2E3B55' }} position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Redux App
          </Typography>
          <Stack direction="row" spacing={2}>
            {loggedIn && <Cart />}
            {!loggedIn && <Avatar src="/broken-image.jpg" />}
            {loggedIn && <Avatar sx={{ bgcolor: deepOrange[500] }} src="/broken-image.jpg" />}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>{loginData}</Typography>
            {!loggedIn && <Button color="success" variant="contained" onClick={Login}>Login</Button>}
            {loggedIn && <Button color="error" variant="contained" onClick={Logout}>Logout</Button>}
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
