import React from "react";

const Services = () => {
  return (
    <div className="w-screen h-screen  flex justify-center">
      <div className="flex w-[80%] justify-between h-[20%] items-center ">
        <p className="text-4xl w-[700px]">
          Businesses building the future of financial services with Anchor.
        </p>
        <div className="flex h-fit gap-4 ">
          <button className="p-6 rounded-lg bg-[#F8F8F8] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button className="p-6 rounded-lg bg-[#F1F9F6]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
