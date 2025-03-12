import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { ADMINENDPOINTS } from '../constants/ApiConstants';

const fetchUsers = (token) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users function with useCallback to avoid unnecessary re-creation
  const fetchUsers = useCallback(async () => {
    if (!token) {
      setError('No token provided');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null); // Reset error before fetching

    try {
      const response = await axios.get(ADMINENDPOINTS.GETUSERS, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUsers(response.data.users); // Ensure response contains 'users' array
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  }, [token]);

  // Fetch users when token changes
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { users, loading, error, refetch: fetchUsers };
};

export default fetchUsers;
