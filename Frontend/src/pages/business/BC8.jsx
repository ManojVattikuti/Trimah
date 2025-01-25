export const BC8 = () => {
    return (
        <div 
            className="min-h-[50vh] flex flex-col items-center justify-center bg-violet-300 bg-opacity-20 bg-cover bg-center"
            style={{ backgroundImage: 'url("./bsuiness/bc8/img.png")' }}
        >
            <div className="text-black p-8 rounded-lg">
                <div className="text-center text-white"> 
                    <h1 className="text-4xl text-black font-bold mb-4">Ready to take your Business to the<br/>   Next Level?</h1>
                    <p className="text-lg text-black mb-8">Let Us Help You Harness the Power of Technology to Achieve Your Goals</p>
                    <div className="flex space-x-4 justify-center">
                    <div className="flex justify-center lg:justify-start">
        <button className="relative overflow-hidden px-4 py-2 md:px-6 md:py-3 rounded-full bg-[#6fd1ab] text-black text-[15px] font-semibold font-['Maven Pro'] group">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
              Schedule a Consultation →
            </span>
            <div className="absolute top-0 left-0 w-full h-full bg-[#684fa3]  rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
          </button>
        </div>
                        <div className="flex justify-center lg:justify-start">
        <button className="relative overflow-hidden px-4 py-2 md:px-6 md:py-3 rounded-full bg-[#6fd1ab] text-black text-[15px] font-semibold font-['Maven Pro'] group">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
              Contact us Now →
            </span>
            <div className="absolute top-0 left-0 w-full h-full bg-[#684fa3]  rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
          </button>
        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
