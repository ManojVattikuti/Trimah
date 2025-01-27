import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

const Why = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    {
      title: "Integrity",
      description: "Transparent and Ecthical Practices in Every Interaction",
      image: "./cards/card1.jpeg",
    },
    {
      title: "Excellence",
      description: "Deliver High Quality IT-Solutions With Precesion ",
      image: "./cards/card2.png",
    },
    {
      title: "Partnership",
      description: "Collaborting With Understand And Fullfill Your Unique Goal",
      image: "./cards/card3.png",
    },
    {
      title: "Innovation",
      description: "Levaranging Technology to Stay Ahead Of Industry Trends",
      image: "./cards/card4.png",
    },
  ];

  const handleSwipe = (direction) => {
    if (direction === "left") {
      setCurrentCard((prev) => (prev + 1) % cards.length);
    } else if (direction === "right") {
      setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
  });

  return (
    <section className="bg-[#f0f4fd] bg-opacity-50 py-2  px-8 lg:px-32">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl lg:text-4xl font-bold font-parkinsans  text-center capitalize leading-10 p-6">
          Why Trimah Technologies
        </h2>
        <p className="
text-sm sm:text-base lg:text-lg mb-8 font-parkinsans text-gray-500  text-center mb-8 capitalize leading-7">
          Our Leadership Team, with years of Experience in IT Healthcare and
          Pharmaceuticals, Understands <br />
          the Challenges of Finding Top-Tier Talent and Delivering IT Solutions
        </p>

        {/* Mobile Swipeable Cards */}
        <div className="sm:hidden w-full" {...handlers}>
          <div className="relative overflow-hidden rounded-lg font-parkinsans  shadow-lg">
            <img
              src={cards[currentCard].image}
              alt={cards[currentCard].title}
              className="transition-all duration-300"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 opacity-75"></div>
            <div className="absolute top-0 left-0 p-8 text-white">
              <p className=" text-[22px] lg:text-[42px] font-semibold">{cards[currentCard].title}</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 text-white">
              <p className="text-lg">{cards[currentCard].description}</p>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => handleSwipe("right")}
              className="text-blue text-3xl"
            >
              ←
            </button>
            <button
              onClick={() => handleSwipe("left")}
              className="text-black text-3xl  p-2 rounded"
            >
              →
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img
                src={card.image}
                alt={card.title}
                className="transition-all duration-300 grayscale group-hover:grayscale-0"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-75"></div>
              <div className="absolute top-0 left-0 p-4 text-white">
                <p className="text-lg font-semibold group-hover:mt-8 transition-all duration-300">
                  {card.title}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-lg font-abel group-hover:mb-8 transition-all duration-300">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="/contact"
            className="text-black text-lg font-semibold font-parkinsans hover:underline"
          >
            Get Started Today →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Why;
