import React, { useContext, useState } from "react"; 
import { Menu, MenuItem, IconButton, Divider } from "@mui/material"; 
import { Link, useNavigate } from "react-router-dom"; 
import { Logout as LogOutIcon, Notifications as NotificationsIcon } from "@mui/icons-material"; 
import Sidebar from "./Sidebar"; 
import { mainContext } from "../../context/mainContex"; 
 
const AdminHeader = () => { 
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const { user, setToken, signOut } = useContext(mainContext); 
 
  const handleMenuOpen = (event) => { 
    setAnchorEl(event.currentTarget); 
  }; 
 
  const handleMenuClose = () => { 
    setAnchorEl(null); 
  }; 
 
  const handleLogout = () => { 
    signOut(); 
    setToken(""); 
    navigate("/login"); 
  }; 
 
  return ( 
    <header className="bg-white text-gray-900 border-b flex items-center justify-between px-4 py-1 md:px-6 md:py-2 shadow-lg fixed top-0 left-0 right-0 z-50"> 
      <Sidebar /> 
      <Link to="/admin"> 
        <img 
          src="/TRIMAH - logos/logo-scroll.png" 
          alt="Trimah Tech Logo" 
          className="h-10 md:h-12" 
        /> 
      </Link> 
      <div className="flex items-center gap-2 md:gap-4"> 
        <IconButton color="inherit"> 
          <NotificationsIcon /> 
        </IconButton> 
        <IconButton onClick={handleMenuOpen} color="inherit"> 
          <img 
            src="/TRIMAH - logos/TRIMAH-icon-favicon-512x512.png" 
            alt="User Avatar" 
            className="w-10 h-10 rounded-full hover:animate-spin" 
          /> 
        </IconButton> 
        <Menu 
          anchorEl={anchorEl} 
          open={Boolean(anchorEl)} 
          onClose={handleMenuClose} 
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }} 
          transformOrigin={{ vertical: "top", horizontal: "right" }} 
          PaperProps={{ 
            elevation: 3,
            style: { 
              maxWidth: '220px',
              borderRadius: '8px',
            }, 
          }} 
        > 
          <MenuItem onClick={handleMenuClose}> 
            <Link to="/admin/my-account" className="text-decoration-none text-gray-800 flex items-center w-full"> 
              <span className="mr-2">👤</span> My Account 
            </Link> 
          </MenuItem> 
          <MenuItem onClick={handleMenuClose}> 
            <Link to="/admin/settings" className="text-decoration-none text-gray-800 flex items-center w-full"> 
              <span className="mr-2">⚙️</span> Settings 
            </Link> 
          </MenuItem> 
          <Divider /> 
          <MenuItem onClick={handleLogout} className="text-gray-800 flex items-center"> 
            <LogOutIcon fontSize="small" sx={{ marginRight: 1 }} /> Logout 
          </MenuItem> 
        </Menu> 
      </div> 
    </header> 
  ); 
}; 
 
export default AdminHeader;