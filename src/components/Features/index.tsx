import React from "react";
import FeatureCard from "./FeatureCard";

const cards = [
  {
    className: "bg-[#CEE9DF] text-[#000000]",
    description:
      "Create custom deposit, savings and virtual accounts effortlessly using our API solutions.",
    image: "/assets/accounts.svg",
    card: {
      children: "Accounts",
      className: "bg-[#22322D] text-[#CEE9DF]",
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
    },
  },
];

const Features = () => {
  return (
    <div className="w-screen grid place-content-center">
      <div className="flex overflow-y-scroll w-screen items-stretch h-[70vh] gap-14 px-28">
        {cards.map((item, index) => {
          return (
            <FeatureCard
              key={`feature-${index}`}
              className={item.className}
              image={item.image}
              description={item.description}
              card={item.card}
            ></FeatureCard>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
