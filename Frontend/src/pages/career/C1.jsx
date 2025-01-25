export const C1 = () => {
  return (
    <div className="flex gap-10 px-32 py-16 max-md:px-5 max-md:py-10 max-sm:flex-col">
        <div className="flex-1">
          <h2 className="text-3xl leading-10">
            <span>Join the</span>
            <br />
            <span className="text-slate-500">Trimah Technologies Team</span>
          </h2>
          <p className="mt-5 text-xl leading-10 text-gray-600">
            At Trimah Technologies, we are always on the lookout for talented
            individuals who share our passion for technology and innovation.
            As a leading provider of IT staffing and consulting solutions, we
            offer career opportunities in software development, cybersecurity,
            DevOps, QA/E and more.
          </p>
        </div>
        <div className="grid flex-1 gap-5 grid-cols-[1fr]">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/70c1aa3da260c619f84dd05500260c4c40f5f539599ee62aa6f7a7cbe30ffa86?apiKey=4126fbaca52340fea6ccc661ec39005f&" 
            alt="Team collaboration" 
            className="w-full rounded-xl" 
          />
        </div>
      </div>
  );
};
