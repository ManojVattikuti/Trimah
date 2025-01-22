import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { mainContext } from '../context/mainContex';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimateName from '../context/animateName';
import { API_BASE_URL } from '../constants/ApiConstants';
import { toast } from 'react-toastify';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { setToken } = useContext(mainContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}auth/login`, { email, password });
      const { token, user } = response.data;
      toast.success("Login Success")
      // Save token and user to localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      
      // Update context with token
      setToken(token);
  
     
        navigate('/'); // Redirect regular users to the home page
   
    } catch (error) {
      setError(error.response?.data?.msg || 'An error occurred');
      console.log(error);
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-l from-black to-gray-800">
    {/* Login Form Section */}
    <motion.div
      className="w-full max-w-md bg-black p-4 rounded-lg bg-opacity-30 shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl text-center text-white font-bold mb-2">LOGIN</h1>
      <p className="text-center text-gray-500 text-xs ">Enter  Admin Credentials  </p>
      <p className="text-center   text-gray-500 mb-4">Welcome back..!</p>
      {error && <div className="text-red-500 text-center mb-2">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            className="w-full px-4 py-2 border border-gray-300 bg-slate-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email.."
            required
          />
        </div>
        <div className="mb-6">
          <input
            className="w-full px-4 py-2 border border-gray-300 bg-slate-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password..."
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          LOGIN
        </button>
      </form>
      <div className="mt-4 text-center">
        <span className="text-gray-600 text-xs">Ceate new admin. </span>
        <Link to="/register" className="text-blue-500 text-sm hover:underline">
          Click here!
        </Link>
      </div>
    </motion.div>
  </div>
  
  );
}
