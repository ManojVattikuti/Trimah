import React, { useState } from "react";
import { Menu, MenuItem, IconButton, Typography, Avatar, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { Logout as LogOutIcon, Notifications as NotificationsIcon } from "@mui/icons-material";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Sidebar from "./Sidebar";

const AdminHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="bg-gray-900 text-white border-b flex items-center justify-between px-4 py-3 md:px-6 md:py-4 shadow-lg">
      <Sidebar/>
      <Typography variant="h5" component="h1" className="text-xl font-bold md:text-2xl">
        Trimah Tech
      </Typography>
      <div className="flex items-center gap-2 md:gap-4">
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
        <IconButton onClick={handleMenuOpen} color="inherit">
          <Avatar alt="User Avatar" src="/placeholder-user.jpg" />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          PaperProps={{
            style: {
              maxWidth: '200px', // Limits the width of the menu on larger screens
            },
          }}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link to="/admin/my-account" className="text-decoration-none text-gray-800 flex items-center">
              <AccountCircleRoundedIcon fontSize="small" sx={{ marginRight: 1 }} /> My Account
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/admin/settings" className="text-decoration-none text-gray-800 flex items-center">
              <AccountCircleRoundedIcon fontSize="small" sx={{ marginRight: 1 }} /> Settings
            </Link>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleMenuClose}>
            <LogOutIcon fontSize="small" sx={{ marginRight: 1 }} /> Logout
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
};

export default AdminHeader;
