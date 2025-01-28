import { Link } from "react-router-dom";

export const BC8 = () => {
    return (
      <div className="flex relative flex-col justify-center items-center self-stretch px-20 py-24 mt-9 w-full text-base min-h-[277px] max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/85e491ba78476807e8c81ecf599c3b2d3b25b3d0d3503cdfb76bbefd9534c014?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col items-center max-w-full w-[616px]">
        <div className="px-3 py-1.5 w-44 max-w-full leading-none text-emerald-400 uppercase  font-parkinsans rounded-2xl bg-emerald-400 bg-opacity-20">
          WANT TO REACH US
        </div>
        <div className="self-stretch mt-2.5 text-3xl sm:text-3xl lg:text-4xl font-semibold font-parkinsans leading-10 text-center text-black max-md:max-w-full">
        Ready to Take Your Business to the{" "}
          <span className=" text-[#684fa3] font-bold">Next Level? </span>{" "}
         
        </div>
        <div className="flex gap-4 mt-5 max-w-full font-semibold w-full md:w-[463px]">
  <div className="flex justify-center lg:justify-start">
    <Link to="/contact">
 
    <button className="relative overflow-hidden px-4 py-2 md:px-6 md:py-3 rounded-full bg-[#6fd1ab] text-black text-sm sm:text-base md:text-[15px] font-semibold font-['Maven Pro'] group">
      <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
        Schedule a Consultation →
      </span>
      <div className="absolute top-0 left-0 w-full h-full bg-[#684fa3] rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
    </button>
    </Link>
  </div>
  <div className="flex justify-center lg:justify-start">
  <Link to="/contact">
    <button className="relative overflow-hidden px-4 py-2 md:px-6 md:py-3 rounded-full bg-[#6fd1ab] text-black text-sm sm:text-base md:text-[15px] font-semibold font-['Maven Pro'] group">
      <span className="relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out">
        Contact us Now →
      </span>
   
      <div className="absolute top-0 left-0 w-full h-full bg-[#684fa3] rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
    </button>
    </Link>
  </div>
</div>

      </div>
    </div>
    );
};
