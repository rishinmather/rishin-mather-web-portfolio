import React from "react";
import { links } from "../data";
const Navbar = () => {
  return (
    <nav className="bg-emerald-100">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold border-2 ">
          Web
          <span className="text-emerald-600 ">Dev</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                href={href}
                key={id}
                className="capitalize text-lg px-5 mt-4  sm:mb-1 tracking-wide hover:text-emerald-600 duration-300 -ml-4"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
