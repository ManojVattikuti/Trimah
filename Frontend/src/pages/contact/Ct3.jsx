export const Ct3 = () => {
  return (
    <div className="relative w-full h-[200px] sm:h-[200px] md:h-[200px]"> {/* Mobile to desktop height adjustment */}
      <img 
        className="w-full h-full object-cover"  // Ensure the map image covers the full width and height
        src="./contact/map.png" 
        alt="Map"
      />
      <div 
        className="w-[60px] h-[60px] left-[60%] top-[30%] absolute flex justify-start items-start overflow-hidden sm:left-[80%] sm:top-[25%] md:left-[90%] md:top-[15%]"
      >
        {/* Add content inside the map overlay, if any */}
      </div>
    </div>
  );
};
