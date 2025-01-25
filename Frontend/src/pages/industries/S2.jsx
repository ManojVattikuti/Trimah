import * as React from "react";
export const S2=()=>
  
    {

      const challenges = [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/25c896a956619593a96ba59f4a73896a12fc532589acf964feb822837fc4c5f1?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f",
          text: "Regulatory compliance, data security, and operational scalability"
        }
      ];
      
      const services = [
        "Software developers for secure financial applications.",
        "Cloud and cybersecurity solutions"
      ];

      function ServiceItem({ icon, text }) {
        return (
          <div className="flex flex-wrap gap-2.5 self-stretch mt-3 text-lg text-white text-opacity-80">
            <img
              loading="lazy"
              src={icon}
              alt=""
              className="object-contain shrink-0 my-auto w-5 aspect-square"
            />
            <div className="flex-auto w-[550px] max-md:max-w-full">
              {text}
            </div>
          </div>
        );
      }

      function SectionTitle({ title }) {
        return (
          <>
            <div className="text-3xl">{title}</div>
            <div className="flex shrink-0 h-0.5 bg-purple-400 w-[146px]" />
          </>
        );
      }
    
        return(
          <div className="lg:px-32 mt-8">
   <div className="text-xl p-4 leading-none text-slate-900">
      Industries <span className="lowercase">We</span> Specialize{" "}
      <span className="lowercase">In</span>
    </div>
  
        
          <div className="pl-20 mt-5 w-full bg-violet-500 max-md:pl-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start self-stretch my-auto w-full text-xl leading-none text-white max-md:mt-10 max-md:max-w-full">
                <SectionTitle title="Financial Services" />
                <div className="mt-9">
                  Challenges <span className="lowercase">We</span> Solve
                </div>
                {challenges.map((challenge, index) => (
                  <ServiceItem 
                    key={index}
                    icon={challenge.icon}
                    text={challenge.text}
                  />
                ))}
                <div className="mt-6">Services Offered</div>
                <div className="mt-3 text-lg leading-9 text-white text-opacity-80 max-md:max-w-full">
                  {services.map((service, index) => (
                    <React.Fragment key={index}>
                      {service}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b82965ad3c07a07671cdd5adc36171b478945bb59c8fa60cb52f6902378bb532?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f"
                alt="Financial services illustration"
                className="object-contain grow w-full aspect-[0.91] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        </div>
        )
    }