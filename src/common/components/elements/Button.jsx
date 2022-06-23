import React from "react";

export const Button = ({ children }) => {
  return (
    <button className="relative group rounded-md p-3 border-2 border-primary-900 text-primary-900 font-medium ">
      <span className="absolute left-0 bottom-0 rounded-md w-0 h-full bg-primary-200 z-0 group-hover:w-full duration-300 group-hover:transition-all"></span>
      <span className="relative z-10 font-semibold">{children}</span>
    </button>
  );
};
