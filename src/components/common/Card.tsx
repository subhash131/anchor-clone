"use client";
import React from "react";
import { motion } from "framer-motion";

export type CardType = {
  children: string;
  className: string;
  top: number;
  initialTop: number;
  delay: number;
};

const Card = ({ children, className, initialTop, top, delay }: CardType) => {
  return (
    <motion.div
      className={`w-80 h-20 flex items-center justify-start px-10 rounded-xl absolute ${className}`}
      initial={{
        top: initialTop,
      }}
      animate={{
        top,
      }}
      transition={{ type: "spring", stiffness: 100, delay }}
    >
      <p>{children}</p>
    </motion.div>
  );
};

export default Card;
