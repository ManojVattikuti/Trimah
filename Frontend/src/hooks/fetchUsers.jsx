// hooks/useUsers.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ADMINENDPOINTS } from '../constants/ApiConstants';


const fetchUsers = (token) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      if (!token) {
        setError('No token provided');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(ADMINENDPOINTS.GETUSERS, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(response.data.users); // Assuming the response data is an array of users
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [token]);

  return { users, loading, error ,refetch: fetchUsers};
};

export default fetchUsers;
