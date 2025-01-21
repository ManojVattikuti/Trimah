import React from 'react';

const AdminFooter = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 text-center py-2">
      <p className="text-sm">&copy; {new Date().getFullYear()} Trimah Tech. All rights reserved.</p>
    </footer>
  );
};

export default AdminFooter;
