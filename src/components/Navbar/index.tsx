import React from "react";

const items = ["Products", "Developers", "Resources", "Company"];

const Navbar = () => {
  return (
    <nav className="py-5 px-16 sticky mt-4 top-0 flex justify-between items-center text-gray_green_mixed bg-white z-50">
      <div>
        <p className="font-semibold text-3xl">nayak</p>
      </div>
      <ul className="flex gap-10 text-gray-600">
        {items.map((item, index) => {
          return (
            <li className="px-2 cursor-pointer" key={`nav-${index}-${item}`}>
              {item}
            </li>
          );
        })}
      </ul>
      <div className="flex gap-4">
        <button className="bg-green-button text-white px-7 py-3 rounded-xl">
          Sign up
        </button>
        <button>Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
