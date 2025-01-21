import React from "react";

const BackgroundImage = ({ imageUrl }) => {
    const imageUrl= "https://images.pexels.com/photos/9588205/pexels-photo-9588205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2?height=600&width=1200"
  return (
    <section
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url('${imageUrl}')`,
        height: "100vh", // Adjust height as needed
      }}
    />
  );
};

export default BackgroundImage;
