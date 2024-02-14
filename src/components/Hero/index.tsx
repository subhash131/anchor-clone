import React from "react";
import Card from "../common/Card";

const cards = [
  {
    name: "Accounts",
    className: "bg-[#22322D] text-[#CEE9DF] left-96 -rotate-6",
    initialTop: -200,
    top: 330,
    delay: 0.1,
  },
  {
    name: "Payments",
    className: "bg-[#CEE9DF] text-[#22322D] right-80 rotate-3",
    initialTop: -200,
    top: 330,
    delay: 0.5,
  },
  {
    name: "Cards",
    className: "bg-[#EED9BE] text-[#D05F0C] rotate-3",
    initialTop: -200,
    top: 430,
    delay: 0.2,
  },
  {
    name: "Credit",
    className: "bg-[#D05F0C] text-white left-96",
    initialTop: -200,
    top: 530,
    delay: 0.3,
  },
  {
    name: "Savings + Investment",
    className: "bg-[#22322D] text-[#CEE9DF] right-80",
    initialTop: -250,
    top: 530,
    delay: 0.2,
  },
];

const Hero = () => {
  return (
    <div className="min-h-screen w-full pt-10 flex items-center flex-col relative px-4">
      <div className="text-center w-[60%] flex items-center flex-col gap-6">
        <p className="text-6xl">The easiest way to build financial products.</p>
        <p className="w-[65%] text-sm text-gray-600">
          Anchor provides the complete infrastructure needed for businesses to
          build, launch, and scale banking and payment products.
        </p>
        <button className="bg-green-button text-white px-7 py-3 rounded-xl hover:scale-105 transition-all">
          Get Started
        </button>
      </div>
      <div className="w-full  mt-10 flex h-[40vh] gap-5 justify-between">
        <div className=" h-full w-[30%] flex flex-col justify-between">
          <div className="w-[60%] h-20 bg-[#F1F9F6] rounded-r-xl"> </div>
          <div className="w-full h-20 bg-[#F1F9F6] rounded-r-xl"> </div>
          <div className="w-[80%] h-20 bg-[#F1F9F6] rounded-r-xl"> </div>
        </div>
        <div className="h-full w-[30%] flex flex-col justify-between items-end">
          <div className="w-[60%] h-20 bg-[#F1F9F6] rounded-l-xl"> </div>
          <div className="w-full h-20 bg-[#F1F9F6] rounded-l-xl"> </div>
          <div className="w-[60%] h-20 bg-[#F1F9F6] rounded-l-xl"> </div>
        </div>
      </div>
      <div className="bg-blue-00 h-full w-full absolute bg--50 top-0 left-0 pointer-events-none justify-center items-center flex-col flex">
        {cards.map(({ name, className, initialTop, top, delay }, index) => {
          return (
            <Card
              className={className}
              key={`hero-${name}-${index}`}
              initialTop={initialTop}
              top={top}
              delay={delay}
            >
              {name}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
