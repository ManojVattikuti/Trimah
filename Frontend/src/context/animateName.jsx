import React, { useState, useEffect } from 'react';

const AnimateName = ({ children }) => {
  const [animateName, setAnimateName] = useState(false);

  useEffect(() => {
    // Trigger animation after a short delay when component mounts
    const timer = setTimeout(() => {
      setAnimateName(true);
    }, 10); // Adjust delay as needed

    // Clean up timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${animateName ? 'animate-name' : ''}`}>
      {children}
    </div>
  );
};

export default AnimateName;
