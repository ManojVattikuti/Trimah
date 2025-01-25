export const St1=()=>
{
    return(
      <div className="flex flex-col self-stretch px-32 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10">
              <div className="self-start px-5 py-1.5 text-base leading-none text-emerald-400 uppercase rounded-2xl bg-emerald-400 bg-opacity-20">
                Industries We Serve
              </div>
              <div className="mt-2.5 text-3xl leading-10 text-slate-900">
                Staffing Solutions <span className="lowercase">for Your</span> Business
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
            <div className="self-stretch my-auto text-lg leading-9 text-gray-600 max-md:mt-10 max-md:max-w-full">
              At Trimah Technologies, we understand that having the right team can make all the difference. 
              Whether you need temporary talent or long-term professionals, our staffing solutions are built on trust, 
              reliability, and a commitment to excellence
            </div>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/10a1e09c-d0ee-4e03-9a44-e55d3f90caa4?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f"
        alt="Staffing solutions illustration"
        className="object-contain mt-8 w-full rounded-3xl aspect-[2.36] max-md:mr-2.5 max-md:max-w-full"
      />
    </div>
    )

}