import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { mainContext } from '../context/mainContex';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimateName from '../context/animateName';
import { API_BASE_URL } from '../constants/ApiConstants';
import { toast } from 'react-toastify';
import { Eye, EyeOff } from "lucide-react"; 

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { setToken } = useContext(mainContext);
  const [showPassword, setShowPassword] = useState(false);
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
 


  <div className="flex items-center justify-center min-h-screen bg-blue-800 relative px-4">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/45287dc5ed4e095aae98880c4564ff55fbfeb61f32f620f0f424518f1437958d?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
      />

      {/* Company Logo */}
      <div className="absolute top-10 flex justify-center w-full">
        <img
          src="/TRIMAH - logos/TRIMAH-reversed-all-white-logo.png"
          className="w-32 md:w-40 h-auto"
          alt="Company Logo"
        />
      </div>

      <div className="relative flex flex-col text-center text-white bg-black bg-opacity-40 p-6 md:p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Admin Panel</h1>

        {error && <div className="text-red-500 text-center mb-2">{error}</div>}

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          {/* Email Field */}
          <div className="flex items-center gap-3 px-4 py-3 rounded border border-white">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/57504037d7e6b3838ed793dd36d04799dd38f02f8e5105ccabc9e9c37e72edb4?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f"
              className="w-5 md:w-6"
              alt="User Icon"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="flex-1 bg-transparent border-none focus:outline-none text-white text-base md:text-lg"
            />
          </div>

          {/* Password Field */}
          <div className="flex items-center gap-3 px-4 py-3 rounded border border-white">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/47e1946ab5690657a70c7581182fa78d733a9e0928efd9d0c229f2aaa93d4f82?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f"
              className="w-5 md:w-6"
              alt="Password Icon"
            />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              className="flex-1 bg-transparent border-none focus:outline-none text-white text-base md:text-lg"
            />
            {/* Toggle Password Visibility */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="focus:outline-none"
            >
              {showPassword ? (
                <EyeOff className="w-5 md:w-6 text-white" />
              ) : (
                <Eye className="w-5 md:w-6 text-white" />
              )}
            </button>
          </div>

          {/* Login Button */}
          <button
  type="submit"
  className="w-full py-3 mt-6 text-base md:text-lg font-semibold uppercase bg-white text-black rounded shadow-md transition-all duration-300 ease-in-out hover:bg-gray-200 hover:shadow-lg active:scale-95"
>
  Login
</button>

        </form>
      </div>
    </div>
  
  
  );
}
