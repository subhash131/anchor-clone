import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen w-full pt-10 flex items-center flex-col relative bg--300">
      <div className="text-center w-[60%] flex items-center flex-col gap-6">
        <p className="text-6xl">The easiest way to build financial products.</p>
        <p className="w-[65%] text-sm text-gray-600">
          Anchor provides the complete infrastructure needed for businesses to
          build, launch, and scale banking and payment products.
        </p>
        <button className="bg-green-button text-white px-7 py-3 rounded-xl">
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
        <div className="w-80 h-20 bg-[#22322D] text-[#CEE9DF] flex items-center justify-start px-10 rounded-xl absolute bottom-64 left-96 -rotate-6">
          <p>Accounts</p>
        </div>
        <div className="w-80 h-20 bg-[#CEE9DF] text-[#22322D] flex items-center justify-start px-10 rounded-xl absolute bottom-60 right-80 rotate-3">
          <p>Payments</p>
        </div>
        <div className="w-80 h-20 bg-[#EED9BE] text-[#D05F0C] flex items-center justify-start px-10 rounded-xl absolute bottom-40 rotate-3">
          <p>Cards</p>
        </div>
        <div className="w-80 h-20 bg-[#D05F0C] text-white flex items-center justify-start px-10 rounded-xl absolute bottom-16 left-96 ">
          <p>Cards</p>
        </div>
        <div className="w-80 h-20 bg-[#22322D] text-[#CEE9DF] flex items-center justify-start px-10 rounded-xl absolute bottom-16 right-80 ">
          <p>Savings + Investment</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
