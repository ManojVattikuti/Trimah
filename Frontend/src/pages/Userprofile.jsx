// components/UserProfile.js
import React, { useContext, useState } from 'react';

import { mainContext } from '../context/mainContex';

const Userprofile = () => {
  const { user } = useContext(mainContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch updated user details if needed
//   const fetchUserDetails = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get('http://localhost:5002/api/v1/auth/user', {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//       });
//       setLoading(false);
//       localStorage.setItem('user', JSON.stringify(response.data.user));
//     } catch (error) {
//       setLoading(false);
//       setError(error.message || 'Error fetching user details');
//     }
//   };

//   useEffect(() => {
//     // Optionally fetch user details when component mounts
//     // fetchUserDetails();
//   }, []);

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 md:px-6 min-h-full">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">User Profile</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div>
            <p>
              <strong>Name:</strong> {user.firstName}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            {/* Add more user details as needed */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Userprofile;
