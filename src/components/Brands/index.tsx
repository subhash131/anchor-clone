import React from "react";
import styles from "./brands.module.css";
import List from "./List";

const Brands = () => {
  return (
    <div
      className={`overflow-hidden relative w-full h-24 before:bg-gradient-linear-to-r before:h-full before:w-[5%] before:z-10 before:absolute before:-right-1 before:top-0 after:absolute after:w-[5%] after:h-full after:bg-gradient-linear-to-l after:z-10 after:top-0 after:left-0 whitespace-nowrap flex items-center ${styles.slide_wrap} `}
    >
      <List />
      {/* Copy of same items */}
      <List />
    </div>
  );
};

export default Brands;
