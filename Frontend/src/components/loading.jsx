import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 30); // Adjust speed of loading

    if (progress === 100) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="flex flex-col items-center justify-center h-screen  text-black">
      {/* Rotating Logo */}
      <div className="relative">
        <div className="animate-spin-slow rounded-full  w-32 h-32 flex items-center justify-center">
          <img
            src="./TRIMAH - logos/TRIMAH-icon-favicon-512x512.png"
            alt="Logo"
            className="w-20 h-20"
          />
        </div>
      </div>

      {/* Loading Text */}
      <h2 className="mt-6 p-4 text-2xl font-bold tracking-widest animate-pulse">
        Loading...
      </h2>

      {/* Progress Bar */}
      <div className="w-64 h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#24c79b] transition-all duration-300 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Loading Percentage */}
      <p className="mt-4 text-lg font-medium">{progress}%</p>
    </div>
  );
};

export default LoadingScreen;
