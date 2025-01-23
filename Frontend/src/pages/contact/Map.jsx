import React from 'react';

const MapImageComponent = () => {
  const location = "3934+N+Hampton+Dr,+Powell,+OH+43065"; // Formatted address

  const googleMapsUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location}&zoom=14&size=600x400&markers=color:red%7C${location}&key=YOUR_API_KEY`;

  return (
    <div>
      <h1>Map of 3934 N Hampton Dr, Powell, OH 43065</h1>
      <img 
        src={googleMapsUrl} 
        alt="Static Map of 3934 N Hampton Dr" 
        style={{ width: '100%', height: 'auto' }} 
      />
    </div>
  );
};

export default MapImageComponent;
