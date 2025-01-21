import React, { useContext, useState } from "react";
import { Avatar, Button, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import {
  Dashboard as DashboardIcon,
  People as UsersIcon,
  Settings as SettingsIcon,
  Description as FilesIcon,
  Logout as LogOutIcon,
  Menu as MenuIcon
} from "@mui/icons-material";
import { mainContext } from "../../context/mainContex";

const Sidebar = () => {
  const navigate = useNavigate();
  const { user, signOut } = useContext(mainContext);
  const [open, setOpen] = useState(false);

  const handleSignOut = () => {
    signOut();
    navigate("/");
  };

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const handleLinkClick = (path) => {
    navigate(path);
    if (open) {
      toggleSidebar();
    }
  };

  return (
    <>
      {/* Menu Button to Open Sidebar */}
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        className="absolute top-4 left-4 z-10 md:hidden"
        onClick={toggleSidebar}
      >
        <MenuIcon />
      </IconButton>

      {/* Sidebar (Drawer) */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleSidebar}
        PaperProps={{
          sx: {
            width: 256,
            bgcolor: 'background.gray',
            color: 'text.primary'
          }
        }}
      >
        <div className="bg-gray-900 text-gray-100 h-full w-64 py-8">
          {/* Profile Section */}
          <div className="flex flex-col items-center gap-6 mb-6">
            <Avatar
              src="/placeholder-user.jpg"
              alt="User Avatar"
              sx={{ width: 64, height: 64 }}
            />
            <div className="text-center">
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p className="text-sm">{user.role}</p>
            </div>
          </div>

          {/* Navigation Section */}
          <List>
            <ListItem button onClick={() => handleLinkClick("/admin")}>
              <ListItemIcon><DashboardIcon /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button onClick={() => handleLinkClick("/admin/application")}>
              <ListItemIcon><FilesIcon /></ListItemIcon>
              <ListItemText primary="Applications" />
            </ListItem>
            <ListItem button onClick={() => handleLinkClick("/admin/messages")}>
              <ListItemIcon><FilesIcon /></ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItem>
            <ListItem button onClick={() => handleLinkClick("/admin/settings")}>
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button onClick={() => handleLinkClick("/admin/users")}>
              <ListItemIcon><UsersIcon /></ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
            <ListItem button onClick={handleSignOut}>
              <ListItemIcon><LogOutIcon /></ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Sidebar;


















// import React, { useContext } from "react";
// import { Avatar, Button } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   Dashboard as DashboardIcon,
//   People as UsersIcon,
//   Settings as SettingsIcon,
//   Description as FilesIcon,
//   Logout as LogOutIcon,
// } from "@mui/icons-material";
// import { mainContext } from "../../context/mainContex";

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const { user, signOut } = useContext(mainContext);

//   const handleSignOut = () => {
//     signOut();
//     // Redirect to home page or another appropriate page after sign-out
//     navigate("/");
//   };

//   return (
//     <aside className="bg-gray-900 text-gray-100 border-r flex flex-col items-center justify-between h-screen w-64 py-8">
//       {/* Profile Section */}
//       <div className="flex flex-col items-center gap-6">
//         <Avatar
//           src="/placeholder-user.jpg"
//           alt="User Avatar"
//           sx={{ width: 64, height: 64 }}
//         />
//         <div className="text-center">
//           <h3 className="text-lg font-semibold">{user.name}</h3>
//           <p className="text-sm">{user.role}</p>
//         </div>
//       </div>

//       {/* Navigation Section */}
//       <nav className="mt-6 flex-1">
//         <ul className="space-y-4">
//           <li>
//             <Button
//               component={Link}
//               to="/admin/dashboard"
//               className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800 hover:text-white w-full"
//               startIcon={<DashboardIcon />}
//             >
//               Dashboard
//             </Button>
//           </li>
          
//           <li>
//             <Button
//               component={Link}
//               to="/admin/messages"
//               className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800 hover:text-white w-full"
//               startIcon={<FilesIcon />}
//             >
//              messages
//             </Button>
//           </li>
//           <li>
//             <Button
//               component={Link}
//               to="/admin/settings"
//               className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800 hover:text-white w-full"
//               startIcon={<SettingsIcon />}
//             >
//               Settings
//             </Button>
//           </li>
//           <li>
//             <Button
//               component={Link}
//               to="/admin/users"
//               className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800 hover:text-white w-full"
//               startIcon={<UsersIcon />}
//             >
//               Users
//             </Button>
//           </li>
          
//         </ul>
//       </nav>

//       {/* Logout Button */}
//       <Button
//         variant="text"
//         className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-gray-100 hover:bg-gray-800 w-full"
//         startIcon={<LogOutIcon />}
//         onClick={handleSignOut}
//       >
//         Logout
//       </Button>
//     </aside>
//   );
// };

// export default Sidebar;
