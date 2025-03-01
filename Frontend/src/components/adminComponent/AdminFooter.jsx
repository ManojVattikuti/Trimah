import React from 'react';

const AdminFooter = () => {
  return (
    <footer className="bg-white text-black shadow-lg text-center py-2">
      <p className="text-sm">&copy; {new Date().getFullYear()} Trimah Tech. All rights reserved.</p>
    </footer>
  );
};

export default AdminFooter;
