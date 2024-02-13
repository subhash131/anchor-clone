import React from "react";
import SwiperButtons from "./SwiperButtons";
import Card from "./Card";
import { motion } from "framer-motion";

const data = [];

const Services = () => {
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
          style={{ transform: `translateX(${-85.5 * 3}vw)` }}
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
