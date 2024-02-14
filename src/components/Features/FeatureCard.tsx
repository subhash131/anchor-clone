import Image from "next/image";
import React from "react";
import Card, { CardType } from "../common/Card";

const FeatureCard = ({
  className,
  description,
  card,
  image,
  top,
}: {
  className: string;
  image: string;
  card: CardType;
  description: string;
  top: number;
}) => {
  return (
    <div
      className={`select-none w-[250px] min-w-[250px] h-full rounded-2xl relative flex flex-col justify-between items-center shrink-0 ${className}`}
    >
      <p className="py-10 px-8 text-lg">{description}</p>
      <Image
        src={image}
        alt={description}
        width={100}
        height={100}
        className="w-full rounded-b-2xl"
      />
      <Card
        className={`${card.className} bottom-8 scale-90`}
        delay={card.delay}
        initialTop={card.initialTop}
        top={top}
      >
        {card.children}
      </Card>
    </div>
  );
};

export default FeatureCard;
