"use client";
import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import SwiperButtons from "./SwiperButtons";
import Card from "./Card";
import { motion, useMotionValue } from "framer-motion";
import { ServiceCardContext } from "./provider";

const data = ["", "", "", ""];

const DRAG_BUFFER = 100;

const Services = () => {
  let cardIndex: number = 0,
    setCardIndex: Dispatch<SetStateAction<number>>;
  const dragX = useMotionValue(0);
  const cardContext = useContext(ServiceCardContext);
  if (cardContext) {
    cardIndex = cardContext.cardIndex;
    setCardIndex = cardContext.setCardIndex;
  }
  const [_, setDragging] = useState(false);
  const handleDragEnd = () => {
    setDragging(false);
    if (
      dragX.get() < -DRAG_BUFFER &&
      cardIndex >= 0 &&
      cardIndex < data.length - 1
    ) {
      setCardIndex((preVal: number) => preVal + 1);
    } else if (dragX.get() > DRAG_BUFFER && cardIndex > 0) {
      setCardIndex((preVal: number) => preVal - 1);
    }
  };
  return (
    <div className="w-screen h-screen gap-4 flex items-center flex-col pt-8">
      <div className="flex w-[80%] justify-between h-fit items-center ">
        <p className="text-4xl w-[700px]">
          Businesses building the future of financial services with Anchor.
        </p>
        <SwiperButtons />
      </div>
      <div className="relative min-h-full h-full w-full overflow-hidden">
        <motion.div
          className="flex h-full cursor-grab active:cursor-grabbing gap-20 px-36"
          dragConstraints={{
            right: 0,
            left: 0,
          }}
          style={{
            x: dragX,
          }}
          animate={{
            translateX: `${-85.5 * cardIndex}vw`,
          }}
          onDragStart={() => {
            setDragging(true);
          }}
          onDragEnd={handleDragEnd}
          drag="x"
        >
          <Card title="aaa" />
          <Card title="bbb" />
          <Card title="ccc" />
          <Card title="ddd" />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
