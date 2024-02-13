"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { createContext } from "react";

type CardType = {
  cardIndex: number;
  setCardIndex: Dispatch<SetStateAction<number>>;
};

export const ServiceCardContext = createContext<CardType | undefined>(
  undefined
);

const ServiceCardProvider = ({ children }: { children: React.ReactNode }) => {
  const [cardIndex, setCardIndex] = useState(0);
  return (
    <ServiceCardContext.Provider value={{ cardIndex, setCardIndex }}>
      {children}
    </ServiceCardContext.Provider>
  );
};

export default ServiceCardProvider;
