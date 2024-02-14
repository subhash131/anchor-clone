"use client";
import React, { useRef, useState } from "react";
import FeatureCard from "./FeatureCard";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

const cards = [
  {
    className: "bg-[#CEE9DF] text-[#000000]",
    description:
      "Create custom deposit, savings and virtual accounts effortlessly using our API solutions.",
    image: "/assets/accounts.svg",
    card: {
      children: "Accounts",
      className: "bg-[#22322D] text-[#CEE9DF]",
      delay: 0.1,
      initialTop: 0,
      top: 350,
    },
  },
  {
    className: "bg-[#433968] text-[#CEE9DF]",
    description:
      "Seamlessly integrate fast, cost-effective transfers and bill  payments using Anchor's APIs.",
    image: "/assets/payments.svg",
    card: {
      children: "Payments",
      className: "bg-[#CEE9DF] text-[#22322D]",
      delay: 0.2,
      initialTop: 0,
      top: 350,
    },
  },
  {
    className: "bg-[#22322D] text-[#CEE9DF]",
    description:
      "Issue branded debit cards [physical and virtual] to your customers with our API infrastructure.",
    image: "/assets/cards.svg",
    card: {
      children: "Cards",
      className: "bg-[#EED9BE] text-[#D05F0C] ",
      delay: 0.3,
      initialTop: 0,
      top: 350,
    },
  },
  {
    className: "bg-[#EED9BE] text-[#272727]",
    description:
      "Accelerate your lending services with Anchor's APIs for efficient loans management.",
    image: "/assets/coins.svg",
    card: {
      children: "Credit",
      className: "bg-[#D05F0C] text-white",
      delay: 0.4,
      initialTop: 0,
      top: 350,
    },
  },
  {
    className: "bg-[#E0F4FE] text-[#272727]",
    description:
      "Accelerate your lending services with Anchor's APIs for efficient loans management.",
    image: "/assets/savings.svg",
    card: {
      children: "Savings + Investment",
      className: "bg-[#22322D] text-[#CEE9DF]",
      delay: 0.5,
      initialTop: 0,
      top: 350,
    },
  },
];

const Features = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
  });
  const [translateX, setTranslateX] = useState(800);
  const [top, setTop] = useState(0);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 400) {
      setTranslateX(0);
      setTop(350);
    }
  });
  return (
    <div className="w-screen grid place-content-center" ref={ref}>
      <motion.div
        className="flex overflow-y-scroll w-screen items-stretch h-[70vh] gap-14 px-28"
        initial={{
          translateX,
        }}
        animate={{
          translateX,
        }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        {cards.map((item, index) => {
          return (
            <FeatureCard
              key={`feature-${index}`}
              className={item.className}
              image={item.image}
              description={item.description}
              card={item.card}
              top={top}
            ></FeatureCard>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Features;
