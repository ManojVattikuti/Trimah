export const BC7 = () => {
  return (
    <div className="py-32">
      <h1 className="text-2xl font-bold text-center mb-8">What Sets Us Apart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 px-32 py-2">
        {/* Card 1 - Solid Background */}
        <div className="relative bg-gradient-to-b from-purple-500 to-purple-900 rounded-lg p-6 text-white hover:scale-105 transition-all duration-300 ease-in-out transform">
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-50"
            style={{
              backgroundImage: 'url(./bsuiness/bc7/3.png)',
              backgroundPosition: 'top right',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              filter: 'grayscale(100%)',
              animation: 'fadeInBg 2s ease-in-out'
            }}
          />
           <div className="relative z-10 flex flex-col  justify-center h-full text-white">
            <h2 className="text-xl font-bold ">Core Values</h2>
            <p className="text-sm">Trust, Excellence and Innovation</p>
          <p className="text-sm">Drive Our Consulting Approach</p>
          </div>
         
        </div>

        {/* Card 2 - Background Image */}
        <div
          className="h-80 flex items-center justify-center text-white font-bold text-lg rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out transform"
          style={{
            backgroundImage: `url('./bsuiness/bc7/BOX 2.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: 'fadeInBg 2s ease-in-out'
          }}
        >
         
        </div>

        {/* Card 3 - Purple Gradient with Top & Bottom Images */}
        <div className="h-80 rounded-lg shadow-lg relative overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out transform">

          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-500"
          >
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-40"
              style={{
                backgroundImage: 'url(./bsuiness/bc7/3.png)',
                backgroundPosition: 'top right',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                filter: 'grayscale(100%)'
              }}
            />
          </div>

          {/* Card Content */}
          <div className="relative z-10 flex flex-col  justify-center h-full text-white">
            <h2 className="text-xl font-bold px-4">Radiant Purple Card</h2>
            <p className="text-sm mt-2 px-4">
              This card has a gradient purple background with images at the top and bottom.
            </p>
          </div>
        </div>

        {/* Card 4 - Background Image */}
        <div
          className="h-80 flex items-center justify-center text-white font-bold text-lg rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out transform"
          style={{
            backgroundImage: `url('./bsuiness/bc7/BOX 4.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: 'fadeInBg 2s ease-in-out'
          }}
        >
         
        </div>

        {/* Card 5 - Solid Background */}
        <div className="h-80 flex items-center justify-center bg-red-500 text-white font-bold text-lg rounded-lg shadow-lg relative hover:scale-105 transition-all duration-300 ease-in-out transform">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-pink-700"
          >
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-40"
              style={{
                backgroundImage: 'url(./bsuiness/bc7/3.png)',
                backgroundPosition: 'top right',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                filter: 'grayscale(100%)'
              }}
            />
          </div>
          <div className="relative z-10 flex flex-col  justify-center h-full text-white">
            <h2 className="text-xl font-bold px-4">Flexible Engagement</h2>
            <p className="text-sm px-4">Whether on-site or remote, we adapt to your business requirements.</p>
         
          </div>
        </div>

        {/* Card 6 - Background Image */}
        <div
          className="h-80 flex items-center justify-center text-white font-bold text-lg rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out transform"
          style={{
            backgroundImage: `url('./bsuiness/bc7/BOX 6.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: 'fadeInBg 2s ease-in-out'
          }}
        >
        
        </div>
      </div>
    </div>
  );
};

