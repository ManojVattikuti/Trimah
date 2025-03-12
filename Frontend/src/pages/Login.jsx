import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { mainContext } from "../context/mainContex";
import { toast } from "react-toastify";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { API_BASE_URL } from "../constants/ApiConstants";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setToken } = useContext(mainContext);
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1); // 1 = Login, 2 = Forgot Password, 3 = OTP Verification
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${API_BASE_URL}auth/login`, { email, password });
      const { token, user } = response.data;
      toast.success("Login Successful!");

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      setToken(token);
      navigate("/");
    } catch (error) {
      setError(error.response?.data?.msg || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleSendOTP = async () => {
    setLoading(true);
    try {
      await axios.post(`${API_BASE_URL}auth/forgot-password`, { email });
      toast.success("OTP sent to your email!");
      setStep(3); // Move to OTP step
    } catch (error) {
      toast.error(error.response?.data?.msg || "Error sending OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    setLoading(true);
    try {
      await axios.post(`${API_BASE_URL}auth/reset-password`, {
        email,
        otp,
        newPassword,
      });
      toast.success("Password reset successful!");
      setStep(1);
      setEmail("");
      setOtp("");
      setNewPassword("");
    } catch (error) {
      toast.error(error.response?.data?.msg || "Error resetting password");
    } finally {
      setLoading(false);
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

      <div className="relative flex flex-col text-center text-white bg-black bg-opacity-40 p-6 md:p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          {step === 1 ? "Admin Panel" : step === 2 ? "Forgot Password" : "Verify OTP"}
        </h1>

        {error && <div className="text-red-500 text-center mb-2">{error}</div>}

        {step === 1 && (
          <form onSubmit={handleLogin} className="w-full space-y-4">
            <div className="flex items-center gap-3 px-4 py-3 rounded border border-white">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="flex-1 bg-transparent border-none focus:outline-none text-white text-base md:text-lg"
              />
            </div>

            <div className="flex items-center gap-3 px-4 py-3 rounded border border-white">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                className="flex-1 bg-transparent border-none focus:outline-none text-white text-base md:text-lg"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="focus:outline-none">
                {showPassword ? <EyeOff className="w-5 md:w-6 text-white" /> : <Eye className="w-5 md:w-6 text-white" />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-white text-black rounded font-semibold flex items-center justify-center"
              disabled={loading}
            >
              {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : "Login"}
            </button>
          </form>
        )}

        {step === 2 && (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 mb-4 bg-transparent border border-white rounded text-white focus:outline-none"
            />
            <button
              onClick={handleSendOTP}
              className="w-full py-3 bg-white text-black rounded font-semibold hover:bg-gray-200"
              disabled={loading}
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-3 mb-4 bg-transparent border border-white rounded text-white focus:outline-none"
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-3 mb-4 bg-transparent border border-white rounded text-white focus:outline-none"
            />
            <button
              onClick={handleResetPassword}
              className="w-full py-3 bg-white text-black rounded font-semibold hover:bg-gray-200"
              disabled={loading}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </>
        )}

        <p className="mt-4 text-sm md:text-base">
          {step === 1 ? (
            <button onClick={() => setStep(2)} className="text-blue-300 hover:text-blue-400 underline">
              Forgot Password?
            </button>
          
          ) : (
            <button onClick={() => setStep(1)} className="text-blue-300 hover:text-blue-400 underline">
              Back to Login
            </button>
          )}
           
        </p>
        <Link
            to="/register"
            className="text-blue-300 hover:text-blue-400  flex justify-center underline"
          >
            Register with Organization Credentials
          </Link>
      </div>
      
    </div>
  );
}
