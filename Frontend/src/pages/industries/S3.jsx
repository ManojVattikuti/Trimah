export const S3=()=>
    {
    const cards = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8a34ee66248a616763a303c8d3a367e0e8896f053896d876964d60b12dff263f?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f',
    title: 'Industry Expertise',
    description: 'Leadership experience across various sectors ensures tailored IT solutions.'
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e44a34b262f7e22ec6e8cde7119da5cba7489cf811c9c9b035f573be93a1c2ac?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f',
    title: 'Trusted Partnerships',
    description: 'We build transparent and reliable relationships with our clients'
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e44a34b262f7e22ec6e8cde7119da5cba7489cf811c9c9b035f573be93a1c2ac?placeholderIfAbsent=true&apiKey=4126fbaca52340fea6ccc661ec39005f',
    title: 'Scalable Solutions',
    description: 'Flexible services that adapt to your industry\'s needs'
  }]
  const Card = ({ icon, title, description }) => {
    return (
      <div className="flex flex-col grow items-start px-10 py-14 w-full bg-white rounded shadow-2xl max-md:px-5 max-md:mt-6">
        {icon && (
          <img
            loading="lazy"
            src={icon}
            alt=""
            className="object-contain aspect-[1.05] w-[63px]"
          />
        )}
        <div className="mt-6 text-xl leading-none text-slate-900">
          {title}
        </div>
        <div className="self-stretch mt-1.5 text-base leading-6 text-neutral-700">
          {description}
        </div>
      </div>
    );
  };
        return(
          <div className="lg:px-32">
            <div className="self-center mt-11 text-3xl leading-none text-center text-slate-900 max-md:mt-10 max-md:max-w-full">
      Why Choose Trimah Technologies?
    </div>
         
          <div className="self-center mt-10 w-full max-w-[1269px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
      </div>
        )
    }