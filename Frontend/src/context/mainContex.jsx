import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const mainContext = createContext();

export const MainProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {});

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      // Fetch user details from token
      const fetchUserDetails = async () => {
        try {
          const response = await axios.get('http://localhost:8080/api/auth/userDetails', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(response.data.user);
          localStorage.setItem('user', JSON.stringify(response.data.user));
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      };

      fetchUserDetails();
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setUser({});
    }
  }, [token]);

  const signOut = () => {
    // Clear token and user data from localStorage and reset state
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken('');
    setUser({});
  };

  return (
    <mainContext.Provider value={{ token, setToken, user, setUser, signOut }}>
      {children}
    </mainContext.Provider>
  );
};
