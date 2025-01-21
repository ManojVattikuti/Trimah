import React from "react";
import { Card, Table, TableBody, TableCell, TableHead, TableRow, Button } from "@mui/material";
import { Settings as SettingsIcon, Logout as LogOutIcon } from "@mui/icons-material";

const Dashboard = () => {
  return (
    <main className="flex-1 p-6">
      <div className="grid gap-6">
        <Card>
          <h2 className="text-xl font-semibold px-6 py-4 bg-gray-100 border-b">Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
            <div className="bg-gray-100 rounded-md p-4 flex flex-col gap-2">
              <div className="text-4xl font-bold">120</div>
              <div className="text-gray-600">Total Users</div>
            </div>
            <div className="bg-gray-100 rounded-md p-4 flex flex-col gap-2">
              <div className="text-4xl font-bold">32</div>
              <div className="text-gray-600">New Users</div>
            </div>
            <div className="bg-gray-100 rounded-md p-4 flex flex-col gap-2">
              <div className="text-4xl font-bold">3456</div>
              <div className="text-gray-600">Total messages</div>
            </div>
            <div className="bg-gray-100 rounded-md p-4 flex flex-col gap-2">
              <div className="text-4xl font-bold">87%</div>
              <div className="text-gray-600">Conversion Rate</div>
            </div>
          </div>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold px-6 py-4 bg-gray-100 border-b">Recent Users</h2>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Message</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Jane Doe</TableCell>
                <TableCell>jane@example.com</TableCell>
                <TableCell>2023-04-15</TableCell>
                <TableCell>
                  <Button variant="text" startIcon={<SettingsIcon />}>
                    Edit
                  </Button>
                  <Button variant="text" startIcon={<LogOutIcon />}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>John Smith</TableCell>
                <TableCell>john@example.com</TableCell>
                <TableCell>2023-04-12</TableCell>
                <TableCell>
                  <Button variant="text" startIcon={<SettingsIcon />}>
                    Edit
                  </Button>
                  <Button variant="text" startIcon={<LogOutIcon />}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sarah Lee</TableCell>
                <TableCell>sarah@example.com</TableCell>
                <TableCell>2023-04-10</TableCell>
                <TableCell>
                  <Button variant="text" startIcon={<SettingsIcon />}>
                    Edit
                  </Button>
                  <Button variant="text" startIcon={<LogOutIcon />}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </main>
  );
};

export default Dashboard;
