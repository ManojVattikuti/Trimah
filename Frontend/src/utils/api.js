import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api'; // Adjust this based on your backend setup

const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
    return response.data; // Assuming backend returns saved user data upon successful registration
  } catch (error) {
    throw error.response.data;
  }
};

const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, userData);
    return response.data; // Assuming backend returns JWT token and user data upon successful login
  } catch (error) {
    throw error.response.data;
  }
};

export { registerUser, loginUser };
