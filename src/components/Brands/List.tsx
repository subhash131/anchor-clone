import Image from "next/image";
import React from "react";
import styles from "./brands.module.css";

const brands = [
  "bikemap",
  "bumble",
  "classpass",
  "doordash",
  "dropbox",
  "duolingo",
  "faire",
  "fotmob",
  "fullstory",
  "handshake",
  "instabug",
  "life360",
  "square",
  "stream",
  "stripe",
  "tunein",
];

const List = () => {
  return (
    <ul
      className={`inline-block text-lg p-10 items-center select-none ${styles.logo_slide}`}
    >
      <div className="flex gap-10">
        {brands.map((item, index) => {
          return (
            <li
              className={`flex gap-1 w-32 h-6 object-cover `}
              key={`brands-${index}`}
            >
              <Image
                src={`/assets/brands/${item}.svg`}
                alt={item}
                width={100}
                height={100}
                draggable={false}
              />
            </li>
          );
        })}
      </div>
    </ul>
  );
};

export default List;
