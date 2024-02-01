import React from "react";
type CardType = {
  children: string;
  className: string;
};

const Card = ({ children, className }: CardType) => {
  return (
    <div
      className={`w-80 h-20 flex items-center justify-start px-10 rounded-xl absolute ${className}`}
    >
      <p>{children}</p>
    </div>
  );
};

export default Card;
