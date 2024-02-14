"use client";
import React, { useContext } from "react";
import { ServiceCardContext } from "./provider";

const SwiperButtons = () => {
  const serviceContext = useContext(ServiceCardContext);
  const handleRightArrowClick = () => {
    if (serviceContext?.cardIndex! >= 0 && serviceContext?.cardIndex! < 3) {
      serviceContext?.setCardIndex((preVal) => preVal + 1);
    }
  };
  const handleLeftArrowClick = () => {
    if (serviceContext?.cardIndex! > 0) {
      serviceContext?.setCardIndex((preVal) => preVal - 1);
    }
  };
  return (
    <div className="flex h-fit gap-4 ">
      <button
        className={`p-6 rounded-lg ${
          serviceContext?.cardIndex === 0 ? "bg-[#F8F8F8]" : "bg-[#F1F9F6]"
        } `}
        onClick={handleLeftArrowClick}
      >
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
      <button
        className={`p-6 rounded-lg ${
          serviceContext?.cardIndex === 3 ? "bg-[#F8F8F8]" : "bg-[#F1F9F6]"
        } `}
        onClick={handleRightArrowClick}
      >
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
  );
};

export default SwiperButtons;
