import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_BASE_URL } from '../constants/ApiConstants';
import { AiOutlineLoading3Quarters } from 'react-icons/ai'; // Spinner icon

function Register() {
  const [step, setStep] = useState(1); // Step 1: Registration, Step 2: OTP Verification
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const userData = { name, email, password, role };
      await axios.post(`${API_BASE_URL}auth/register`, userData);
      toast.success('OTP sent to your email!');
      setStep(2); // Move to OTP verification step
    } catch (error) {
      setError(error.response?.data?.msg || 'An error occurred');
      toast.error(error.response?.data?.msg || 'An error occurred');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const otpData = { email, otp };
      await axios.post(`${API_BASE_URL}auth/verify-otp`, otpData);
      toast.success('Registration successful!');
      navigate('/login');
    } catch (error) {
      setError(error.response?.data?.msg || 'Invalid OTP');
      toast.error(error.response?.data?.msg || 'Invalid OTP');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-l from-black to-gray-800 ">
      <motion.div
        className="w-full max-w-md bg-black bg-opacity-30 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {step === 1 ? (
          // Step 1: Registration Form
          <form onSubmit={handleRegister}>
            <h1 className="text-3xl text-center text-white mb-2 font-poppins font-bold">
              REGISTER
            </h1>
            {error && <div className="text-red-500 text-center mb-4">{error}</div>}
            <input
              className="w-full px-4 py-2 mb-4 border border-gray-300 bg-slate-900 text-white rounded-lg"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              required
            />
            <input
              className="w-full px-4 py-2 mb-4 border border-gray-300 bg-slate-900 text-white rounded-lg"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
            />
            <input
              className="w-full px-4 py-2 mb-4 border border-gray-300 bg-slate-900 text-white rounded-lg"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? (
                <AiOutlineLoading3Quarters className="animate-spin mr-2" />
              ) : (
                'Register'
              )}
            </button>
          </form>
        ) : (
          // Step 2: OTP Verification
          <form onSubmit={handleVerifyOtp}>
            <h1 className="text-3xl text-center text-white mb-2 font-poppins font-bold">
              VERIFY OTP
            </h1>
            {error && <div className="text-red-500 text-center mb-4">{error}</div>}
            <input
              className="w-full px-4 py-2 mb-4 border border-gray-300 bg-slate-900 text-white rounded-lg"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? (
                <AiOutlineLoading3Quarters className="animate-spin mr-2" />
              ) : (
                'Verify OTP'
              )}
            </button>
          </form>
        )}
        {step === 1 && (
          <div className="mt-4 text-center">
            <span className="text-gray-600 text-xs">Login with Existing adminID </span>
            <Link to="/login" className="text-blue-500 hover:underline text-sm">
              Login
            </Link>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default Register;
