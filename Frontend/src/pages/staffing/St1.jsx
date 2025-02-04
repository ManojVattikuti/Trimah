export const St1 = () => {
  return (
    <div className="flex flex-col px-6 md:px-16 lg:px-32 mt-10 w-full">
      {/* Text Section */}
      <div className="max-w-full">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Text */}
          <div className="flex flex-col font-parkinsans w-full lg:w-[62%]">
            <div className="flex flex-col">
              <div className="self-start px-4 py-1.5 text-sm md:text-base text-emerald-400 uppercase rounded-2xl bg-emerald-400 bg-opacity-20">
                Industries We Serve
              </div>
              <div className="mt-2 text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
                Staffing Solutions <span className="lowercase">for Your</span> Business
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="flex flex-col w-full lg:w-[68%]">
            <p className="text-sm md:text-base font-parkinsans lg:text-lg text-gray-500">
              At Trimah Technologies, we understand that having the right team can make all the difference. 
              Whether you need temporary talent or long-term professionals, our staffing solutions are built on trust, 
              reliability, and a commitment to excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative flex flex-col items-center md:items-start p-4 sm:p-6 bg-white mt-8 w-full">
  {/* Main Image with Auto Animation and Transition */}
  <div className="relative w-[90%] sm:w-[80%] md:w-[70%] rounded-lg overflow-hidden animate-fadeInUp transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-2">
    <img
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd78296cf4c83228b50bdfd9279598964f8288f728999538ac77147633f06efa?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f"
      alt="Main Office Scene"
      className="w-full h-auto sm:h-[350px] md:h-[350px] lg:h-[450px] rounded-lg"
    />
  </div>

  {/* Inset Image (Overlapping) with Auto Animation and Transition */}
  <div className="absolute top-1/2 right-0 md:right-[-5%] lg:right-[2%] -translate-y-1/2 w-[50%] sm:w-[45%] md:w-[40%] lg:w-[40%] rounded-[30px] overflow-hidden shadow-lg border-4 sm:border-8 md:border-8 border-white animate-fadeInRight transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-3">
    <img
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3865663775c32f2a3bfea9f9fc58ba596ef5c917806aa6b1a3c95ebbba400a1c?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f"
      alt="Customer Service"
      className="w-full h-auto rounded-lg"
    />
  </div>
</div>



    </div>
  );
};
