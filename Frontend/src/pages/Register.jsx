import React, { useContext, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_BASE_URL } from '../constants/ApiConstants';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';



function Register() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
 

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API_BASE_URL}auth/register`, { name, email, password });
      toast.success('A verification code has been sent to your email.');
      setStep(2);
    } catch (error) {
      setError(error.response?.data?.msg || 'Registration failed. Please try again.');
      toast.error(error.response?.data?.msg || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API_BASE_URL}auth/verify-otp`, { email, otp });
      toast.success('Your account has been successfully verified.');
      navigate('/login');
    } catch (error) {
      setError(error.response?.data?.msg || 'Invalid verification code. Please try again.');
      toast.error(error.response?.data?.msg || 'Invalid OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 items-center justify-center p-6 relative">
    {/* Background Image */}
    <div 
      className="absolute inset-0 w-full h-full bg-cover bg-center"
      style={{
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div> {/* Optional dark overlay */}
    </div>
  
    {/* Registration Container */}
    <div className="relative flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden z-10">
      {/* Left Section - Form */}
      <div className="w-1/2 p-10 flex flex-col justify-center">
        {/* Company Logo */}
        <div className="flex justify-center mb-6">
          <img src="/TRIMAH - logos/logo-scroll.png" alt="Company Logo" className="h-12" />
        </div>
          {step === 1 ? (
            <>
              <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Company Registration</h2>
              {error && <div className="bg-red-100 text-red-700 p-3 rounded-lg text-center mb-4">{error}</div>}
              <form onSubmit={handleRegister} className="space-y-5">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Full Name</label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-3 text-gray-400" />
                    <input
                      className="w-full pl-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                      type="text" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm  font-medium mb-2">Company Email</label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                    <input
                      className="w-full pl-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                      type="email" placeholder="youremail@trimahtech.com" value={email} onChange={(e) => setEmail(e.target.value)} required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                  <div className="relative">
                    <FaLock className="absolute left-3 top-3 text-gray-400" />
                    <input
                      className="w-full pl-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                      type="password" placeholder="Enter a secure password" value={password} onChange={(e) => setPassword(e.target.value)} required
                    />
                  </div>
                </div>
                <button
  type="submit"
  disabled={loading}
  className="w-full bg-blue-700 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition duration-200 flex items-center justify-center"
>
  {loading ? (
    <AiOutlineLoading3Quarters className="animate-spin text-xl" />
  ) : (
    'Register'
  )}
</button>

              </form>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Verify Your Email</h2>
              {/* {error && <div className="bg-red-100 text-red-700 p-3 rounded-lg text-center mb-4">{error}</div>} */}
              <form onSubmit={handleVerifyOtp} className="space-y-5">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Verification Code</label>
                  <input
                    className="w-full py-2 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                    type="text" placeholder="Enter your verification code" value={otp} onChange={(e) => setOtp(e.target.value)} required
                  />
                </div>
                <button
                  type="submit" disabled={loading}
                  className="w-full bg-blue-700 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition duration-200 flex items-center justify-center"
                >
                  {loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : 'Verify'}
                </button>
              </form>
            </>
          )}
          <div className="mt-6 text-center">
            <span className="text-gray-600">Already have an account? </span>
            <Link to="/login" className="text-blue-700 hover:underline">Sign in</Link>
          </div>
        </div>
        <div className="w-1/2 bg-gradient-to-r from-blue-700 to-blue-500 flex flex-col text-center items-center justify-center p-10 text-white shadow-lg rounded-lg">
  <h2 className="text-3xl font-extrabold tracking-wide uppercase">Welcome to <span className="text-yellow-300">TrimahTech</span></h2>
  <p className="text-lg text-center mt-4 font-light leading-relaxed">
    Empowering businesses and individuals with cutting-edge solutions. <br />
    Elevate your career, expand your opportunities, and grow with us!
  </p>
  <div className="mt-6">
    <button className="px-6 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-full shadow-md hover:bg-yellow-300 transition duration-300">
      Join Us Today
    </button>
  </div>
</div>

      </div>
    </div>
  );
}

export default Register;