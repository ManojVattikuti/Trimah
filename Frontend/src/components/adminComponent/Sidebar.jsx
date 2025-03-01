import React, { useContext, useState } from "react";
import {
  Avatar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Dashboard as DashboardIcon,
  People as UsersIcon,
  Settings as SettingsIcon,
  Description as FilesIcon,
  Logout as LogOutIcon,
  Menu as MenuIcon,
  Business as BusinessIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Email as MessagesIcon,
  Contacts as ContactsIcon,
} from "@mui/icons-material";
import { mainContext } from "../../context/mainContex";

const Sidebar = () => {
  const navigate = useNavigate();
  const { user, signOut } = useContext(mainContext);
  const [open, setOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);

  const handleSignOut = () => {
    signOut();
    navigate("/");
  };

  const toggleSidebar = () => setOpen(!open);
  const handleNavigation = (path) => {
    navigate(path);
    if (open) toggleSidebar();
  };
  const toggleBusinessMenu = () => setBusinessOpen(!businessOpen);

  return (
    <>
      {/* Mobile Toggle Button */}
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        className="absolute  left-6 z-10 md:hidden"
        onClick={toggleSidebar}
      >
        <MenuIcon />
        
      </IconButton>

      {/* Sidebar Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleSidebar}
        PaperProps={{
          sx: {
            width: 250,
            bgcolor: "white",
            color: "black",
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
            boxShadow: "2px 0px 10px rgba(0,0,0,0.1)",
          },
        }}
      >
        <div className="h-full w-full py-4 px-3">
          {/* Company Logo */}
          <div className="flex justify-center mb-4">
            <img src="/TRIMAH - logos/logo-scroll.png" alt="Company Logo" className="w-28" />
          </div>

          {/* Profile Section */}
          <div className="flex items-center gap-2 mb-4 ">
            <Avatar src={user.avatar || "/placeholder-user.jpg"} alt="User Avatar" sx={{ width: 40, height: 40 }} />
            <div>
              <Typography variant="body2" className="font-medium">
                {user.name}
              </Typography>
              <Typography variant="caption" color="gray.500">
                {user.email}
              </Typography>
            </div>
          </div>
          <Divider sx={{ bgcolor: "#E5E7EB", marginBottom: 2 }} />

          {/* Navigation Section */}
          <List>
            <ListItem button onClick={() => handleNavigation("/admin")}> 
              <ListItemIcon><DashboardIcon fontSize="small" /></ListItemIcon>
              <ListItemText primary="Dashboard" primaryTypographyProps={{ variant: "caption" }} />
            </ListItem>

            {/* Business Inquiries Dropdown */}
            <ListItem button onClick={toggleBusinessMenu}>
              <ListItemIcon><FilesIcon fontSize="small" /></ListItemIcon>
              <ListItemText primary="Form Datas" primaryTypographyProps={{ variant: "caption" }} />
              {businessOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItem>
            <Collapse in={businessOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigation("/admin/application")}> 
                  <ListItemIcon><ContactsIcon fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Applications" primaryTypographyProps={{ variant: "caption" }} />
                </ListItem>
                {/* <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigation("/admin/messages")}> 
                  <ListItemIcon><ContactsIconf fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Messages" primaryTypographyProps={{ variant: "caption" }} />
                </ListItem> */}
                <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigation("/admin/business-inquiries")}> 
                  <ListItemIcon><BusinessIcon fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Business Inquiries" primaryTypographyProps={{ variant: "caption" }} />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={() => handleNavigation("/admin/settings")}> 
              <ListItemIcon><SettingsIcon fontSize="small" /></ListItemIcon>
              <ListItemText primary="Settings" primaryTypographyProps={{ variant: "caption" }} />
            </ListItem>

            <ListItem button onClick={() => handleNavigation("/admin/users")}> 
              <ListItemIcon><UsersIcon fontSize="small" /></ListItemIcon>
              <ListItemText primary="Users" primaryTypographyProps={{ variant: "caption" }} />
            </ListItem>

            <Divider sx={{ bgcolor: "#E5E7EB", marginY: 2 }} />

            <ListItem button onClick={handleSignOut}> 
              <ListItemIcon><LogOutIcon fontSize="small" sx={{ color: "#D32F2F" }} /></ListItemIcon>
              <ListItemText primary="Logout" primaryTypographyProps={{ variant: "caption", color: "#D32F2F" }} />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Sidebar;
