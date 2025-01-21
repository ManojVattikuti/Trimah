import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { mainContext } from '../context/mainContex';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimateName from '../context/animateName';
import { API_BASE_URL } from '../constants/ApiConstants';

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
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Login Form Section */}
      <motion.div
        className="flex-1 flex items-center justify-center bg-gradient-to-l from-black to-gray-800 text-white p-4 md:p-8"
        style={{ flexBasis: '40%' }} // Increased width for login section
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full  max-w-md bg-black p-4 rounded-lg bg-opacity-30 shadow-lg">
          <h1 className="text-3xl text-center text-white-800 mb-4">LOGIN</h1>
          <p className='text-center p-4 mb-4'>Welcome back..!</p>
          {error && <div className="text-red-500 text-center mb-4">{error}</div>}
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
            <span className="text-gray-600">Don't have an account? </span>
            <Link to="/register" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Additional Content Section with Background Image */}
      <motion.div
        className="flex-1 flex items-center justify-center"
        style={{
          flexBasis: '60%', // Adjusted width to match the login section increase
          backgroundImage: `url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2240&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, // Replace with your image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
       

       
       <motion.div
      className="w-full max-w-3xl p-8 bg-transparent-to-r from-gray-800 to-black rounded-lg text-center text-white mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
       <AnimateName>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
        Welcome to Trimah Technologies
      </h2>
      </AnimateName>
      <p className="mb-4 text-lg md:text-xl leading-relaxed">
        At Trimah Technologies, we deliver innovative tech solutions to empower businesses in the digital age. Our expert team crafts custom software, websites, and mobile applications tailored to your needs.
      </p>
      <p className="mb-4 text-lg md:text-xl leading-relaxed">
        Join us in a company that values creativity, excellence, and collaboration. Whether you’re a tech enthusiast or a business owner, we support your journey every step of the way.
      </p>
      <p className="mb-4 text-lg md:text-xl leading-relaxed">
        Explore our services, from web development to cloud solutions and AI integration. Let’s build the future together!
      </p>
    </motion.div>
    
      </motion.div>
    </div>
  );
}
