import React from "react";

const Card = ({ title }: { title: string }) => {
  return (
    <div className="w-[80vw] h-[80%] bg-red-200 shrink-0 rounded-2xl">
      {title}
    </div>
  );
};

export default Card;
