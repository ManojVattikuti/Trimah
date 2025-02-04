export const BC7 = () => {
  return (
    <div className=" sm:py-32">
      <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold font-parkinsans text-center mb-8">What Sets Us Apart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 px-8 sm:px-32 py-2">
        {/* Card 1 - Solid Background */}
        <div className="relative bg-gradient-to-b from-purple-500 to-purple-900 rounded-lg p-6 text-white hover:scale-105 transition-all duration-300 ease-in-out transform">
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-50"
            style={{
              backgroundImage: 'url( https://cdn.builder.io/api/v1/image/assets/TEMP/65a397ac81d967985536a6cd254f1dffe58e006fea844c4d2dc8dadaec74716a?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f)',
              backgroundPosition: 'top right',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              filter: 'grayscale(100%)',
              animation: 'fadeInBg 2s ease-in-out'
            }}
          />
          <div className="relative z-10 flex flex-col justify-center h-full text-white">
            <h2 className="text-xl font-parkinsans  font-bold">Core Values</h2>
            <p className="text-sm font-parkinsans ">Trust, Excellence and Innovation</p>
            <p className="text-sm font-parkinsans ">Drive Our Consulting Approach</p>
          </div>
        </div>

        {/* Card 2 - Background Image */}
        <div
          className="h-60 sm:h-80 flex items-center justify-center text-white font-bold text-lg rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out transform"
          style={{
            backgroundImage: `url('./bsuiness/bc7/BOX 2.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: 'fadeInBg 2s ease-in-out'
          }}
        >
        </div>

        {/* Card 3 - Purple Gradient with Top & Bottom Images */}
        <div className="h-60 sm:h-80 rounded-lg shadow-lg relative overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out transform">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-500">
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-40"
              style={{
                backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/TEMP/d60ed63063a1093a79ecde3ea100c519032b452c37099febbcb23b9e5f5e3d3c?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f)',
                backgroundPosition: 'top right',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                filter: 'grayscale(100%)'
              }}
            />
          </div>

          {/* Card Content */}
          <div className="relative z-10 flex flex-col justify-center h-full text-white">
            <h2 className="text-xl font-bold font-parkinsans  px-4">Leadership Expertise</h2>
            <p className="text-sm mt-2 font-parkinsans  px-4">
              Decades Of Experience in IT, DevOps and Compliance Consulting
            </p>
          </div>
        </div>

        {/* Card 4 - Background Image */}
        <div
          className="h-60 sm:h-80 flex items-center justify-center text-white font-bold text-lg rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out transform"
          style={{
            backgroundImage: `url('./bsuiness/bc7/BOX 4.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: 'fadeInBg 2s ease-in-out'
          }}
        >
        </div>

        {/* Card 5 - Solid Background */}
        <div className="h-60 sm:h-80 flex items-center justify-center bg-red-500 text-white bg-rounded-[10px]  text-lg rounded-lg shadow-lg relative hover:scale-105 transition-all duration-300 ease-in-out transform">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-pink-700 ">
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-40"
              style={{
                backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets/TEMP/eb57caabda5c965d70b7e650baa37df8be5ba7946b901da770a7c79d4b7d8198?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f)',
                backgroundPosition: 'top right',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                filter: 'grayscale(100%)'
              }}
            />
          </div>
          <div className="relative z-10 flex flex-col justify-center h-full text-white">
            <h2 className="text-xl font-bold px-4 font-parkinsans ">Flexible Engagement</h2>
            <p className="text-sm  font-parkinsans px-4 ">Whether on-site or remote, we adapt to your business requirements.</p>
          </div>
        </div>

        {/* Card 6 - Background Image */}
        <div
          className="h-60 sm:h-80 flex items-center justify-center text-white font-bold text-lg rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out transform"
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
